function add(a: number, b: number): number {
  return a + b
}

it('1 + 1 equals 2', () => {
  expect(add(1, 1)).toBe(2)
})
