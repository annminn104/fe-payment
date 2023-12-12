import { IAuthLoginRequest } from '@/common/interfaces';
import AuthForm from '@/components/organisms/AuthForm';
import { authService } from '@/services/auth';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState<string>('');
  const { mutate: onLoginMutate } = useMutation((data: IAuthLoginRequest) => authService.login(data), {
    onSuccess: () => {
      navigate('/payment');
      setErrorMsg('');
    },
    onError: () => {
      setErrorMsg('You can not "Login" or username or password incorrect!!');
    }
  });

  return <AuthForm onLogin={onLoginMutate} errorMsg={errorMsg} />;
};

export default LoginPage;
