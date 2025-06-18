import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './GlobalStyles.css'; // Importando estilos globais
import Home from './pages/HomePage/Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Home />
    </Router>
  </StrictMode>,
);