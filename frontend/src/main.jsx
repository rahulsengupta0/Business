import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'; // ✅ Add this
import App from './App.jsx';
import './index.css';

const clientId = '1034690129058-ibdh9i1pc1of65c4eef0nm02f0dq7n9o.apps.googleusercontent.com'; // ✅ Replace with your actual Client ID

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}> {/* ✅ Google OAuth context */}
      <BrowserRouter> {/* ✅ Enables routing */}
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>
);
