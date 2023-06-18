import React, { useEffect } from 'react'

import useZustandContext from '@/stores'

const ProductPage = () => {
  const { products } = useZustandContext()

  return (
    <div>
      {products.count}
      <button onClick={() => products.setCount(products.count + 1)}>click!</button>
    </div>
  )
}

export default ProductPage
