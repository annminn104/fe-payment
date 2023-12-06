import React from 'react';
import ChakraProvider from './ChakraProvider';
import ReactQueryProvider from './ReactQueryProvider';
import ReduxProvider from './ReduxProvider';

const RootProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <ReduxProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </ReduxProvider>
    </ReactQueryProvider>
  );
};

export default RootProviders;
