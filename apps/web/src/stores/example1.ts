import { create, StateCreator } from 'zustand'

import { Product } from '@/common/interfaces'

export interface ProductSlice {
  setCount(arg0: number): void;
  products: Product[]
  count: number
  fetchProducts: () => void
}

const ProductStore = create<ProductSlice>()((set) => ({
  products: [],
  count: 0,

  // 이건 그냥 예시고 api 요청은 가능하면 zustand에서 하지 말아주세요
  fetchProducts: async () => {
    const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
    set({ products: await res.json() })
  },

  setCount: (a: Number) => set({ count: a }),
}))

export default ProductStore
