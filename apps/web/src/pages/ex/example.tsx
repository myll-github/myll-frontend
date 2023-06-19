import { useEffect } from 'react'

import { useCartStore, useProductStore } from '@/stores'

let [a, b] = [1, 1]

setInterval(() => a++, 1000)
setInterval(() => b++, 1000)

const A = () => {
  const products = useProductStore()

  return (
    <div>
      {a}
      {products.count}
      <button onClick={() => products.setCount(products.count + 1)}>click!</button>
    </div>
  )
}

const B = () => {
  const carts = useCartStore()

  return (
    <>
      {b}
      {carts.count}
      <button onClick={() => carts.setCount()}>click!</button>
    </>
  )
}

const ProductPage = () => {
  return (
    <div>
      <A />
      <B />
    </div>
  )
}

export default ProductPage
