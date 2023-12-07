import React from 'react';
import { Outlet } from 'react-router-dom';

interface IAuthLayoutProps {
  children?: React.ReactNode;
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children }) => {
  return (
    <div>
      <h2>Auth Layout</h2>
      {children}
      <Outlet />
    </div>
  );
};

export default AuthLayout;
