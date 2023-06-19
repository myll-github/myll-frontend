import { create } from 'zustand'

import { Product } from '@/common/interfaces'

export interface CartSlice {
  cart: Product[]
  count: number
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  showCart: boolean
  toggleCart: () => void
}

const CartStore = create<CartSlice>()((set, get) => ({
  cart: [],
  showCart: false,
  count: 1,

  setCount: () => {
    set({ count: get().count + 1 })
  },

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

export default CartStore
