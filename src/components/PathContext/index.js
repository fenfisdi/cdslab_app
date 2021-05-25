import React, { createContext, useContext, useState } from 'react'

const PathContext = createContext()

export function usePath() {
  const context = useContext(PathContext)
  if (context === undefined) {
    throw new Error('usePath must be used within a PathProvider')
  }
  return context
}

export const PathProvider = ({children}) => {
  const localStoragePath = JSON.parse(sessionStorage.getItem('path')) || []
  const pathState = useState(localStoragePath)
  return (
    <PathContext.Provider value={pathState}> 
      {children}
    </PathContext.Provider>
  )
}