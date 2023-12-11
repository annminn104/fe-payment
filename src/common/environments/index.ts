export const environments = {
  base: {
    serverUri: import.meta.env.VITE_SERVER_URI || 'http://localhost:5000',
    clientUri: import.meta.env.VITE_CLIENT_URI || 'http:localhost:5050'
  },
  stripe: {
    publicKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY || '',
    clientSecret: import.meta.env.VITE_STRIPER_CLIENT_SECRET || ''
  }
};
