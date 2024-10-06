import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Whatsapp from './Components/Whatsapp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Whatsapp/>
    <App />
  </StrictMode>,
)
