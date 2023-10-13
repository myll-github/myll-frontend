export const noop = () => {}

export const shuffleArray = <T,>(array: T[]) => {
  const newArr = Array.from(array)

  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArr[i], newArr[j]] = [newArr[j], newArr[i]]
  }

  return newArr
}
