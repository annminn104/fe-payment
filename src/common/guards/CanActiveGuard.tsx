import { authService } from '@/services/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { setProfile } from '@/stores/auth.slice';
import { QueryKeyConstants } from '../constants';
import { useQuery } from '@tanstack/react-query';
import { useAppDispatch } from '@/hooks/useStore';

interface ICanActiveGuardProps {
  component?: React.ReactNode;
}

const CanActiveGuard: React.FC<ICanActiveGuardProps> = ({ component }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isLoading } = useQuery({
    queryKey: [QueryKeyConstants.getProfile + '-auth-guard'],
    queryFn: () => authService.profile(),
    onSuccess: (res) => {
      dispatch(setProfile(res));
    },
    onError: () => {
      navigate(`/auth/login`);
    }
  });

  return !isLoading ? <React.Fragment>{component}</React.Fragment> : null;
};

export default CanActiveGuard;
