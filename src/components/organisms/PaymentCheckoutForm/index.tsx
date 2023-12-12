import { Button } from '@mui/material';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import * as S from './styles';

const PaymentCheckoutForm = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`
      }
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message || '');
    } else {
      setMessage('An unexpected error occured.');
    }

    setIsProcessing(false);
  };

  return (
    <form id='payment-form' onSubmit={handleSubmit}>
      <PaymentElement id='payment-element' />
      <S.SubmitBtn disabled={isProcessing || !stripe || !elements} id='submit'>
        <Button fullWidth variant='contained' component='div'>
          <span id='button-text'>{isProcessing ? 'Processing ... ' : 'Pay now'}</span>
        </Button>
      </S.SubmitBtn>
      {message && <div id='payment-message'>{message}</div>}
    </form>
  );
};

export default PaymentCheckoutForm;
