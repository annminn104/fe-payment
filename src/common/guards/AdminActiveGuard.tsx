import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { authService } from '@/services/auth';
import { setProfile } from '@/stores/auth.slice';
import { useMutation } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface INonActiveGuardProps {
  component?: React.ReactNode;
}

const AdminActiveGuard: React.FC<INonActiveGuardProps> = ({ component }) => {
  const { profile } = useAppSelector((state) => state.auth);
  const accessToken = authService.getAccessToken();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { mutate: onProfileMutate, isLoading } = useMutation(() => authService.profile(), {
    onSuccess: (res) => {
      console.log(res);
      dispatch(setProfile(res));
      if (res.isAdmin === false) {
        navigate('/');
      }
    },
    onError: () => {
      navigate('/auth/login');
    }
  });

  useEffect(() => {
    if (accessToken && !profile) {
      onProfileMutate();
    }
  }, [accessToken, profile]);

  return !isLoading && profile?.isAdmin ? <React.Fragment>{component}</React.Fragment> : null;
};

export default AdminActiveGuard;
