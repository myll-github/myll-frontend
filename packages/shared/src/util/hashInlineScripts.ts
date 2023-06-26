/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
// hash-inline-scripts.ts
import crypto from 'crypto'

const hash = (content: string) => crypto.createHash('sha256').update(content).digest('base64')

const hashInlineScripts = (scripts: JSX.Element[]) => {
  const scriptHashes = scripts.map((script) => {
    const content = script.props.dangerouslySetInnerHTML
      ? script.props.dangerouslySetInnerHTML.__html
      : script.props.children
    return `'sha256-${hash(content)}'`
  })
  return { scriptHashes, scripts }
}

export default hashInlineScripts
