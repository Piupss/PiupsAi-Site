// src/components/Header.jsx
import React from 'react';
import piupsAiLogo from '../../assets/logo/piups-ai-logo.png'; // Importe o logo se necessário
import { Link } from 'react-router-dom'; // Importando link para navegação

const Header = ({ onExploreClick, isExploreSidebarOpen }) => {
  return (
    <div className="header-container">
      {/* Left Section */}
      <div className="header-left">
        {/* Adiciona classe condicional para a borda azul e o ícone de lista */}
        <span
          className={`header-explore ${isExploreSidebarOpen ? 'header-explore-active' : ''}`}
          onClick={onExploreClick}
        >
          Explore
          {/* Ícone de lista que aparece quando o sidebar está aberto */}
          {isExploreSidebarOpen && (
            <svg
              className="list-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          )}
        </span>
        <input type="text" placeholder="Search" className="header-search-input" aria-label="Search" />
      </div>

      {/* Seção Central - Logo */}
      <div className="header-center">
        <Link to="/" aria-label="Página Inicial PiupsAi">
          <img src={piupsAiLogo} alt="PiupsAi Logo" className="header-logo" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/38x38/666666/FFFFFF?text=Logo"; }}/>
        </Link>
      </div>

      {/* Seção Direita */}
      <div className="header-right">
        <nav className="header-nav" aria-label="Navegação Principal">
          {/* Adapte os links conforme as seções do seu site */}
          <Link to="/news" className="header-nav-link">News & Events</Link>
          <Link to="/multimedia" className="header-nav-link">Multimedia</Link>
          {/* O link "NASA+" foi adaptado para "PiupsAi+" */}
          <Link to="/piups-plus" className="header-nav-link">PiupsAi+</Link>
        </nav>
        <Link to="/live" className="header-live-button">LIVE</Link>
      </div>
    </div>
  );
};

export default Header;