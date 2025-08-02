import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="314468258648-rb1kcfq1m2ndk37mc58kv96jrcppu2nt.apps.googleusercontent.com">
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </GoogleOAuthProvider>
);
