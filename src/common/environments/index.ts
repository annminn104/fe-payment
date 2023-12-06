export const environments = {
  ServerUri: import.meta.env.VITE_SERVER_URI || 'http://localhost:8080',
  ClientUri: import.meta.env.VITE_CLIENT_URI || 'http:localhost:3000'
};
