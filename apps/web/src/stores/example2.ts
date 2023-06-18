import { create } from 'zustand'

import { Product } from '@/common/models/interfaces'

export interface CartSlice {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  showCart: boolean
  toggleCart: () => void
}

const createCartSlice = create<CartSlice>()((set, get) => ({
  cart: [],
  showCart: false,

  addToCart: (product: Product) => {
    const { cart } = get()
    const findProduct = cart.find((p) => p.id === product.id)
    if (findProduct) {
      findProduct.quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }
    set({ cart })
  },
  removeFromCart: (productId: number) => {
    set({ cart: get().cart.filter((product) => product.id !== productId) })
  },

  toggleCart: () => {
    set({ showCart: !get().showCart })
  },
}))

export default createCartSlice
