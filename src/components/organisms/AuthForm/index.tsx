import { IAuthLoginRequest } from '@/common/interfaces';
import { UserSchema } from '@/common/schemas';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid, Link, TextField, Typography, FormControlLabel, Checkbox, Button } from '@mui/material';
import { Logo } from '@/components/atoms/Logo';

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
    <Grid container component='main' sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></Grid>
      <Grid item xs={false} sm={8} md={5}>
        <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Logo />
          <Typography component='h1' variant='h3'>
            Login
          </Typography>
          <Box component='form' noValidate onSubmit={handleSubmit(handleSubmitForm)} sx={{ mt: 1 }}>
            <Controller
              name='username'
              control={control}
              defaultValue=''
              render={({ field, fieldState: { error } }) => (
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='username'
                  label='Username'
                  name='username'
                  autoComplete='username'
                  autoFocus
                  value={field.value}
                  onChange={field.onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
            <Controller
              name='password'
              control={control}
              defaultValue=''
              render={({ field, fieldState: { error } }) => (
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                  value={field.value}
                  onChange={field.onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
            <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
          </Box>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthForm;
