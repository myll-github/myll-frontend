/* eslint-disable react/jsx-no-constructed-context-values */
import _ from 'lodash'
import { createContext, ReactNode, useContext } from 'react'

import ProductStore from './example1'
import CartStore from './example2'

const ZustandContext = createContext(null)

export const ZustandContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ZustandContext.Provider value={{ products: ProductStore(), carts: CartStore() }}>
      {children}
    </ZustandContext.Provider>
  )
}

const useZustandContext = () => {
  const context = useContext(ZustandContext)

  return context
}
export default useZustandContext
