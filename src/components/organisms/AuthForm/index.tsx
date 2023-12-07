import { IAuthLoginRequest } from '@/common/interfaces';
import { UserSchema } from '@/common/schemas';
import { Logo } from '@/components/atoms/Logo';
import OAuthButtonGroup from '@/components/molecules/OAuthButtonGroup';
import { Box, Button, Checkbox, Container, Divider, HStack, Heading, Input, Link, Stack, Text } from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface IAuthFormProp {
  onLogin: (values: IAuthLoginRequest) => void;
}

const AuthForm: React.FC<IAuthFormProp> = ({ onLogin }) => {
  const validationSchema = UserSchema.pick(['username', 'password']);

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const handleSubmitForm = (data: IAuthLoginRequest) => {
    onLogin(data);
  };

  return (
    <Container maxW='lg' py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing='8'>
        <Stack spacing='6'>
          <Logo />
          <Stack spacing={{ base: '2', md: '3' }} textAlign='center'>
            <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
            <Text color='fg.muted'>
              Don't have an account? <Link href='#'>Sign up</Link>
            </Text>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'transparent', sm: 'bg.surface' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing='6' as='form' onSubmit={handleSubmit(handleSubmitForm)}>
            <Stack spacing='5'>
              <Controller
                name='username'
                control={control}
                defaultValue=''
                render={({ field }) => <Input id='username' value={field.value} onChange={field.onChange} placeholder='username' type='text' />}
              />

              <Controller
                name='password'
                control={control}
                defaultValue=''
                render={({ field }) => <Input id='password' value={field.value} onChange={field.onChange} placeholder='*****' type='password' />}
              />
            </Stack>
            <HStack justify='space-between'>
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant='text' size='sm'>
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing='6'>
              <Button type='submit'>Sign in</Button>
              <HStack>
                <Divider />
                <Text textStyle='sm' whiteSpace='nowrap' color='fg.muted'>
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default AuthForm;
