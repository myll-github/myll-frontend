import { Context, createContext, useContext } from 'react'
import createProductSlice, { ProductSlice } from './example1'
import createCartSlice, { CartSlice } from './example2'

import _ from 'lodash'

const ZustandContext = createContext(null)

export const ZustandContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ZustandContext.Provider value={{ products: createProductSlice(), carts: createCartSlice() }}>
      {children}
    </ZustandContext.Provider>
  )
}

const useZustandContext = () => {
  const context = useContext(ZustandContext)

  return context
}
export default useZustandContext
