import { Alert, Button, Typography } from '@mui/material';
import * as S from './styles';
import { Link } from 'react-router-dom';

const PaymentCompletionPage = () => {
  return (
    <S.CompleteLayout>
      <Typography color='success.dark' variant='h3'>
        Successfully!
      </Typography>
      <Alert severity='success' color='info'>
        <Typography>Congratulations on your successful payment</Typography>
      </Alert>
      <Link to='/'>
        <Button variant='outlined'>Back to payment history</Button>
      </Link>
      <Link to='/payment'>
        <Button variant='outlined'>Back to transfer money</Button>
      </Link>
    </S.CompleteLayout>
  );
};

export default PaymentCompletionPage;
