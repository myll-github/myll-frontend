/*
 reference:
  https://medium.com/iadvize-engineering/using-figma-api-to-extract-illustrations-and-icons-34e0c7c230fa
*/

import { writeFileSync } from 'fs'
import fetch from 'node-fetch'

const TOKEN = process.env.FIGMA_WEBHOOK
const FILE_KEY = 'v2LAIwRuECBSb24aIFDKwB'

const fetchFigmaFile = (key) => {
  return fetch(`https://api.figma.com/v1/files/${key}`, { headers: { 'X-Figma-Token': TOKEN } }).then((response) =>
    response.json(),
  )
}

const flatten = (acc, cur) => [...acc, ...cur]

const getComponentsFromNode = (node) => {
  if (node.type === 'COMPONENT') {
    return [node]
  }
  if ('children' in node) {
    return node.children.map(getComponentsFromNode).reduce(flatten, [])
  }
  return []
}

const formatIconsSVG = (svg) => svg.replace(/fill="#[a-f0–9]{6}"/gm, 'fill="currentColor"')

const formatName = (name) =>
  name
    ?.toUpperCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // removes diacritics
    .replace(/\//g, '_') // replaces '/' by '_'
    .replace(/[^a-zA-Z0–9_]/g, '') // removes non alphanumeric or '_' characters

const hash = (path) => path.replace(/^.*\/img\//g, '').replace(/\//g, '_')

const generateFiles = (ele) => {
  if (!ele) return

  const { name, fileName, svg } = ele

  console.log(`${name}.svg is generated`)
  writeFileSync(`./src/icons/${name}.svg`, svg)
}

const getSVGsFromComponents = (components) => {
  const key = FILE_KEY
  const ids = components.filter(({ name }) => name?.toUpperCase().startsWith('ICON')).map(({ id }) => id)

  return fetch(`https://api.figma.com/v1/images/${key}?ids=${ids.join()}&format=svg`, {
    headers: { 'X-Figma-Token': TOKEN },
  })
    .then((response) => response.json())
    .then(({ images }) =>
      Promise.all(
        components.map(
          ({ id, name, type }) =>
            images[id] &&
            fetch(images[id])
              .then((response) => response.text())
              .then((svg) => ({
                name,
                fileName: hash(images[id]),
                svg: formatIconsSVG(svg),
              })),
        ),
      ),
    )
}

async function run() {
  if (!TOKEN) {
    console.error(
      'The Figma API token is not defined, you need to set an environment variable `FIGMA_API_TOKEN` to run the script',
    )
    return
  }
  fetchFigmaFile(FILE_KEY)
    .then((data) => getComponentsFromNode(data.document))
    .then(getSVGsFromComponents)
    .then((dataArray) => dataArray.map(generateFiles))
}

run()
