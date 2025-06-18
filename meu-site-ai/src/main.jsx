import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './GlobalStylish.css'
import Home from './containers/Home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
