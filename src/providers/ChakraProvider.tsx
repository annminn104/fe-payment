import customTheme from '@/libraries/themes';
import { ChakraProvider as ChakraUiProvider } from '@chakra-ui/react';

import React from 'react';

const ChakraProvider = ({ children }: { children: React.ReactNode }) => {
  return <ChakraUiProvider theme={customTheme}>{children}</ChakraUiProvider>;
};

export default ChakraProvider;
