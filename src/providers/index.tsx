import React from 'react'
import ChakraProvider from './chakra'

const RootProviders = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider>{children}</ChakraProvider>
}

export default RootProviders
