import { styled } from '@mui/material';

export const Form = styled(
  'form',
  {}
)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}));

export const SubmitBtn = styled(
  'button',
  {}
)(() => ({
  margin: '16px auto auto auto',
  width: '100%',
  maxWidth: 390,
  background: 'transparent',
  padding: 0,
  border: 0
}));
