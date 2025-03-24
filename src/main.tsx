import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './typography.css'
import './all.css'
import "react-quill/dist/quill.snow.css";
import App from './App.tsx'
import { UserContextProvider } from './context/auth_context.tsx'
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from 'react-toastify'

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <GoogleOAuthProvider clientId={googleClientId}>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </GoogleOAuthProvider>
  </StrictMode>,
)
