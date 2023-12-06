import customTheme from '@/libraries/themes'
import { ChakraProvider as PayChakraProvider } from '@chakra-ui/react'

import React from 'react'

const ChakraProvider = ({ children }: { children: React.ReactNode }) => {
  return <PayChakraProvider theme={customTheme}>{children}</PayChakraProvider>
}

export default ChakraProvider
