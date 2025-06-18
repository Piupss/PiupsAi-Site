import React from 'react';
import { Link } from 'react-router-dom';
import piupsAiLogo from '../../assets/Logo/piups-ai-logo.png';
import {
  HeaderContainer,
  HeaderLeft,
  HeaderExplore,
  HeaderSearchInput,
  HeaderCenter,
  HeaderLogo,
  HeaderRight,
  HeaderNav,
  HeaderNavLink,
  HeaderLiveButton,
} from './HeaderStyle.js';

const Header = ({ onExploreClick, isExploreSidebarOpen }) => {
  return (
    // Use os componentes estilizados diretamente aqui, em vez de divs com classes
    <HeaderContainer>
      {/* Left Section */}
      <HeaderLeft>
        <HeaderExplore
          // Aplique a classe condicional diretamente ao styled-component via prop 'className'
          className={isExploreSidebarOpen ? 'header-explore-active' : ''}
          onClick={onExploreClick}
        >
          Explore
          {isExploreSidebarOpen && (
            <svg
              className="list-icon" // Se list-icon for um estilo global ou de styled-component separado, adicione-o
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          )}
        </HeaderExplore>
        <HeaderSearchInput type="text" placeholder="Search" aria-label="Search" />
      </HeaderLeft>

      {/* Seção Central - Logo */}
      <HeaderCenter>
        {/* HeaderNavLink já é um Link estilizado */}
        <HeaderNavLink to="/" aria-label="Página Inicial PiupsAi">
          <HeaderLogo
            src={piupsAiLogo}
            alt="PiupsAi Logo"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/38x38/666666/FFFFFF?text=Logo"; }}
          />
        </HeaderNavLink>
      </HeaderCenter>

      {/* Seção Direita */}
      <HeaderRight>
        <HeaderNav aria-label="Navegação Principal">
          <HeaderNavLink to="/news">News & Events</HeaderNavLink>
          <HeaderNavLink to="/multimedia">Multimedia</HeaderNavLink>
          <HeaderNavLink to="/piups-plus">PiupsAi+</HeaderNavLink>
        </HeaderNav>
        <HeaderLiveButton to="/live">LIVE</HeaderLiveButton>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;