import { authService } from '@/services/auth';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setProfile } from '@/stores/auth.slice';
import { User } from '../models';
import { IUserResponse } from '../interfaces';

interface IAuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<IAuthGuardProps> = ({ children }) => {
  const [status, setStatus] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate: useProfileMutation } = useMutation(() => authService.profile(), {
    onSuccess: (res: IUserResponse) => {
      dispatch(setProfile(new User(res)));
      setStatus(true);
    },
    onError: () => {
      navigate(`/login`);
      setStatus(false);
    }
  });

  useEffect(() => {
    useProfileMutation();
  }, [children]);

  return status ? (
    <React.Fragment>
      {children}
      <Outlet />
    </React.Fragment>
  ) : null;
};

export default AuthGuard;
