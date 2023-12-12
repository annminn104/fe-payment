import * as yup from 'yup';

export const UserSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email().required('Email is required')
});
