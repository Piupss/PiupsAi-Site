import styled from "styled-components";
import { Link } from 'react-router-dom';

// Estiliza o container principal do Header
export const HeaderContainer = styled.header`
  background-color: #000; /* Fundo escuro, similar ao da NASA */
  color: #ffffff;
  padding: 0 60px; /* Espaçamento nas laterais */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px; /* Altura do header */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Sombra sutil */
  position: fixed; /* Fixa o header no topo */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* Garante que o header fique acima de outros conteúdos */

  /* Adicione responsividade dentro do styled-component se desejar */
  @media (max-width: 768px) {
    padding: 0 15px;
    height: 55px;
  }
`;

// Estiliza a seção esquerda
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

// Estiliza o span "Explore"
export const HeaderExplore = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  margin-right: 15px;
  letter-spacing: 0.5px;
  color: #ffffff;
  cursor: pointer;
  transition: color 0.2s ease-in-out, border-color 0.3s, padding 0.3s;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid transparent;
  border-radius: 4px;

  // Estilo condicional para quando a sidebar está aberta (HeaderExplore ativo)
  &.header-explore-active { // Note o '&' para se referir ao próprio componente
    border: 1px solid #3d4aff; /* Borda azul quando ativo */
  }

  @media (max-width: 768px) {
    display: none; // Esconder em telas menores
  }
`;

// Estiliza o input de busca
export const HeaderSearchInput = styled.input`
  background-color: #000;
  border: 1px solid #404040;
  color: #ffffff;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 0.9rem;
  width: 220px;
  transition: background-color 0.3s, border-color 0.3s;

  &:focus { // Estilo para o estado de foco
    background-color: #000;
    border-color: #3d4aff;
    outline: none;
    border-width: 2px;
  }

  @media (max-width: 768px) {
    display: none; // Esconder em telas menores
  }
`;

// Estiliza a seção central
export const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
`;

// Estiliza a imagem do logo
export const HeaderLogo = styled.img`
  height: 40px;
  width: auto;
  display: block;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.5);
  }

  @media (max-width: 480px) {
    height: 32px;
  }
`;

// Estiliza a seção direita
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-left: auto;
  }
`;

// Estiliza a navegação
export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: none; // Esconder em telas menores
  }
`;

// Estiliza os links de navegação
export const HeaderNavLink = styled(Link)` // Estilizando um componente Link do react-router-dom
  color: #ffffff;
  text-decoration: none;
  margin-left: 25px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  position: relative;

  @media (max-width: 1024px) {
    margin-left: 18px;
  }
`;

// Estiliza o botão LIVE
export const HeaderLiveButton = styled(Link)` // Estilizando um componente Link do react-router-dom
  background-color: transparent;
  color: #ff4d4d;
  border: 1px solid #ff4d4d;
  padding: 3px 7px;
  border-radius: 2px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.70rem;
  letter-spacing: 0.5px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  text-transform: uppercase;

  &:hover {
    background-color: #ff4d4d;
    color: #ffffff;
  }

  @media (max-width: 480px) {
    padding: 5px 10px;
    font-size: 0.8rem;
  }
`;

// NOTA: Os estilos abaixo para .page-body-wrapper, .explore-sidebar-overlay, etc.,
// não devem estar aqui se você estiver usando styled-components para componentes específicos.
// Eles parecem ser estilos globais ou de outros componentes.
// Se eles forem globais, você precisaria usar createGlobalStyle para eles.
// Por simplicidade, vou omitir esses estilos aqui, assumindo que eles vêm de GlobalStylish.css
// ou de outros componentes estilizados.