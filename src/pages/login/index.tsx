import { IAuthLoginRequest } from '@/common/interfaces';
import AuthForm from '@/components/organisms/AuthForm';
import { authService } from '@/services/auth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const { mutate: onLoginMutate } = useMutation((data: IAuthLoginRequest) => authService.login(data), {
    onSuccess: () => {
      navigate('/');
    }
  });

  return (
    <div>
      <h3>Login page</h3>
      <AuthForm onLogin={onLoginMutate} />
    </div>
  );
};

export default LoginPage;
