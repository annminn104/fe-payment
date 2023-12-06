import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/stores';

interface IReduxProviderProps {
  children?: React.ReactNode;
}

const ReduxProvider: React.FC<IReduxProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
