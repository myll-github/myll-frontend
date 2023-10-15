/* eslint-disable no-continue */
export const noop = () => {}

export const shuffleArray = <T,>(array: T[]) => {
  const newArr = Array.from(array)

  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArr[i], newArr[j]] = [newArr[j], newArr[i]]
  }

  return newArr
}

export const JSONstartWith = (target: string, jsonObject: any, notTarget = '') => {
  const ObjectEntries = Object.entries(jsonObject)

  for (let i = 0; i < ObjectEntries.length; i += 1) {
    const [key, value] = ObjectEntries[i]

    if (value && key.startsWith(target)) {
      if (notTarget !== '' && key.startsWith(notTarget)) {
        continue
      }

      return value
    }
  }

  return null
}
