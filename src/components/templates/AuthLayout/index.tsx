import React from 'react';
import { Outlet } from 'react-router-dom';

interface IAuthLayoutProps {
  children?: React.ReactNode;
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      {children}
      <Outlet />
    </React.Fragment>
  );
};

export default AuthLayout;
