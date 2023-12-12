import { Elements } from '@stripe/react-stripe-js';
import { environments } from '@/common/environments';
import { loadStripe } from '@stripe/stripe-js';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { paymentService } from '@/services/payment';
import { IPaymentCreateIntentRequest } from '@/common/interfaces';
import PaymentCheckoutForm from '@/components/organisms/PaymentCheckoutForm';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, TextField, DialogActions, Alert } from '@mui/material';
import { PaymentButtonMock } from '@/common/mocks';
import NumericMoney from '@/components/atoms/NumericMoney';
import React from 'react';
import { NumberUtils } from '@/common/utils';
import * as S from './styles';

const stripePromise = loadStripe(environments.stripe.publicKey);
const PaymentPage = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [clientSecret, setClientSecret] = useState<string>('');
  const [open, setOpen] = React.useState<number | null>(null);

  const { mutate: createPaymentMutate } = useMutation((data: IPaymentCreateIntentRequest) => paymentService.createIntent(data), {
    onSuccess: (res) => {
      setClientSecret(res.clientSecret);
      setTimeout(() => {
        handleCloseDialog();
      }, 500);
    }
  });

  const handleOpenDialog = (index: number) => {
    setOpen(index);
  };

  const handleCloseDialog = () => {
    setOpen(null);
  };

  const handleAcceptTransMoney = (money: number) => {
    setInputValue(money);
    if (money > 0) {
      createPaymentMutate({ amount: money });
    }
  };

  return (
    <React.Fragment>
      {clientSecret && stripePromise ? (
        <S.TransferForm>
          <Alert severity='info'>Transfer amount of {NumberUtils.formatMoney(inputValue, '$')}</Alert>
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <PaymentCheckoutForm />
          </Elements>
        </S.TransferForm>
      ) : (
        <Grid container spacing={{ xs: 1, md: 2 }}>
          <Grid item xs={12} md={8}>
            <TextField
              label='Amount'
              fullWidth
              value={inputValue}
              onChange={(e) => setInputValue(Number(e.target.value || 0))}
              name='numberformat'
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              InputProps={{ inputComponent: NumericMoney as any }}
              variant='standard'
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button fullWidth sx={{ lineHeight: '32px' }} variant='contained' onClick={() => handleAcceptTransMoney(inputValue)}>
              Transfer money
            </Button>
          </Grid>

          {PaymentButtonMock.map((btn, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Button fullWidth onClick={() => handleOpenDialog(index)} variant='outlined'>
                {btn.label}
              </Button>
              <Dialog
                open={open === index}
                onClose={handleCloseDialog}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
              >
                <DialogTitle id='alert-dialog-title'>Confirm money transfer</DialogTitle>
                <DialogContent>
                  <DialogContentText id='alert-dialog-description'>
                    Are you sure to create a money transfer order for the amount of {btn.label}?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button variant='outlined' onClick={handleCloseDialog}>
                    Disagree
                  </Button>
                  <Button variant='contained' onClick={() => handleAcceptTransMoney(btn.value)} autoFocus>
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
          ))}
        </Grid>
      )}
    </React.Fragment>
  );
};

export default PaymentPage;
