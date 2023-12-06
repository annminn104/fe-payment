import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface IReactQueryProviderProps {
  children?: React.ReactNode;
}

const ReactQueryProvider: React.FC<IReactQueryProviderProps> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0
      }
    }
  });
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
