import { Elements } from '@stripe/react-stripe-js';
import { environments } from '@/common/environments';
import { loadStripe } from '@stripe/stripe-js';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { paymentService } from '@/services/payment';
import { IPaymentCreateIntentRequest } from '@/common/interfaces';
import PaymentCheckoutForm from '@/components/organisms/PaymentCheckoutForm';
import { Button, Grid, InputAdornment, TextField } from '@mui/material';
import { PaymentButtonMock } from '@/common/mocks';
import React from 'react';
import { NumericFormat } from 'react-number-format';
import NumericMoney from '@/components/atoms/NumericMoney';

const stripePromise = loadStripe(environments.stripe.publicKey);
const PaymentPage = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [clientSecret, setClientSecret] = useState<string>('');

  const { mutate: createPaymentMutate } = useMutation((data: IPaymentCreateIntentRequest) => paymentService.createIntent(data), {
    onSuccess: (res) => {
      setClientSecret(res.clientSecret);
    }
  });

  return (
    <React.Fragment>
      <TextField
        label='Amount'
        fullWidth
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value || 0))}
        name='numberformat'
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        InputProps={{ inputComponent: NumericMoney as any }}
        variant='standard'
        sx={{ mb: 2 }}
      />

      <Grid container spacing={2}>
        {PaymentButtonMock.map((btn, index) => (
          <Grid item xs={3} key={index}>
            <Button fullWidth onClick={() => createPaymentMutate({ amount: btn.value })} variant='outlined'>
              {btn.label}
            </Button>
          </Grid>
        ))}
      </Grid>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentCheckoutForm />
        </Elements>
      )}
    </React.Fragment>
  );
};

export default PaymentPage;
