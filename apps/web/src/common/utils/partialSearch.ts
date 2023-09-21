export const partialSearch = (searchValue: string, text: string) => {
  const regex = new RegExp(searchValue, 'gi')
  const matches = text.match(regex)

  if (matches) {
    return true
  }
  return false
}
