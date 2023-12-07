import React from 'react';
import MuiProvider from './MuiProvider';
import ReactQueryProvider from './ReactQueryProvider';
import ReduxProvider from './ReduxProvider';

const RootProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <ReduxProvider>
        <MuiProvider>{children}</MuiProvider>
      </ReduxProvider>
    </ReactQueryProvider>
  );
};

export default RootProviders;
