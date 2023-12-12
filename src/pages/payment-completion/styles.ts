import { Box, styled } from '@mui/material';

export const CompleteLayout = styled(
  Box,
  {}
)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  rowGap: '8px'
}));
