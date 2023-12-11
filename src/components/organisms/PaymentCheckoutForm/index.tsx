import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';

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
    <div>
      <form id='payment-form' onSubmit={handleSubmit}>
        <PaymentElement id='payment-element' />
        <button disabled={isProcessing || !stripe || !elements} id='submit'>
          <span id='button-text'>{isProcessing ? 'Processing ... ' : 'Pay now'}</span>
        </button>
        {message && <div id='payment-message'>{message}</div>}
      </form>
    </div>
  );
};

export default PaymentCheckoutForm;
