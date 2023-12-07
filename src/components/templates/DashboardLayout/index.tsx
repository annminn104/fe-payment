import { authService } from '@/services/auth';
import { Button } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

interface IDashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout: React.FC<IDashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const { mutate: logoutMutate } = useMutation(() => authService.logout(), {
    onSettled: () => {
      navigate('/auth/login');
    }
  });

  const handleLogout = () => {
    logoutMutate();
  };
  return (
    <div>
      <h2>Dashboard Layout</h2>
      <Button onClick={handleLogout}>Logout</Button>
      {children}
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
