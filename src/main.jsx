import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Whatsapp from './Components/Whatsapp.jsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Whatsapp/>
    <Toaster richColors expand={true} position="top-right"  />
    <App />
  </StrictMode>,
)
