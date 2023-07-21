import React, { createContext, ReactNode, useContext, useMemo } from 'react'

const CompoundContext = createContext(null as unknown)

interface CompoundProps {
  children: ReactNode
}

export const CompoundProvider = ({ children, ...providerValue }: CompoundProps) => {
  const memoProviderValue = useMemo(() => ({ ...providerValue }), [providerValue])

  return <CompoundContext.Provider value={memoProviderValue}>{children}</CompoundContext.Provider>
}

export const useCompound = () => {
  const context = useContext(CompoundContext)

  if (!context) {
    throw new Error('no Context provider!')
  }

  return context
}
