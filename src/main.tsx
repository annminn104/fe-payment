import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import RootProviders from './providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootProviders>
      <App />
    </RootProviders>
  </React.StrictMode>
);
