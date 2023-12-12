import { authService } from '@/services/auth';
import { Box, Button, Divider, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Grid } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FiAlignJustify, FiChevronLeft, FiList, FiCreditCard, FiUser } from 'react-icons/fi';
import * as S from './styles';
import { useAppSelector } from '@/hooks/useStore';

interface IDashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout: React.FC<IDashboardLayoutProps> = ({ children }) => {
  const { profile } = useAppSelector((state) => state.auth);

  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

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
    <Box sx={{ display: 'flex' }}>
      <S.AppBar position='absolute' open={open}>
        <Toolbar sx={{ pr: '24px' }}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={toggleDrawer}
            sx={{ marginRight: '16px', ...(open && { display: 'none' }) }}
          >
            <FiAlignJustify />
          </IconButton>
          <Typography component='h1' variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
            Payment Dashboard
          </Typography>
          <Button onClick={handleLogout} variant='contained' color='error'>
            Logout
          </Button>
        </Toolbar>
      </S.AppBar>
      <S.Drawer variant='permanent' open={open}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
          <IconButton onClick={toggleDrawer}>
            <FiChevronLeft />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component='nav'>
          <ListItemButton component={NavLink} to='/'>
            <ListItemIcon sx={{ minWidth: '40px' }}>
              <FiList />
            </ListItemIcon>
            <ListItemText primary='History' />
          </ListItemButton>
          <ListItemButton component={NavLink} to='/payment'>
            <ListItemIcon sx={{ minWidth: '40px' }}>
              <FiCreditCard />
            </ListItemIcon>
            <ListItemText primary='Transfer money' />
          </ListItemButton>

          {profile?.isAdmin && (
            <ListItemButton component={NavLink} to='/user-management'>
              <ListItemIcon sx={{ minWidth: '40px' }}>
                <FiUser />
              </ListItemIcon>
              <ListItemText primary='Users' />
            </ListItemButton>
          )}
        </List>
      </S.Drawer>
      <Box
        component='main'
        sx={{
          backgroundColor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]),
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto'
        }}
      >
        <Toolbar />
        <S.ChildContainer>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              {children}
              <Outlet />
            </Grid>
          </Grid>
        </S.ChildContainer>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
