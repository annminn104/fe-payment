import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services/auth';
import { setProfile } from '@/stores/auth.slice';
import { useAppDispatch } from '@/hooks/useStore';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

interface INonActiveGuardProps {
  component?: React.ReactNode;
}

const NonActiveGuard: React.FC<INonActiveGuardProps> = ({ component }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const accessToken = authService.getAccessToken();

  const { mutate: onProfileMutate, isLoading } = useMutation(() => authService.profile(), {
    onSuccess: (res) => {
      dispatch(setProfile(res.data));
      navigate(`/`);
    }
  });

  useEffect(() => {
    if (accessToken) {
      onProfileMutate();
    }
  }, [accessToken]);

  return !isLoading ? <React.Fragment>{component}</React.Fragment> : null;
};

export default NonActiveGuard;
