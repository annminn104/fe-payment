import React from 'react';
import { Outlet } from 'react-router-dom';

interface IRootLayoutProps {
  children?: React.ReactNode;
}

const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => {
  return (
    <div>
      <h1>Root Layout</h1>
      {children}
      <Outlet />
    </div>
  );
};

export default RootLayout;
