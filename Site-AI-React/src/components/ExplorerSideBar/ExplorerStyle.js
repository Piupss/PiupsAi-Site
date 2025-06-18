import styled from "styled-components";
import { Link } from 'react-router-dom';

// Estilos do Overlay da Sidebar
export const ExploreSidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente para o overlay */
  z-index: 997; /* Abaixo da sidebar, mas acima do conteúdo principal */
  display: flex;
  justify-content: flex-start; /* Alinha a sidebar à esquerda */
  align-items: flex-start;
`;

// Estilos do Sidebar Principal
export const ExploreSidebarContainer = styled.aside`
  background-color: #000; /* Cor de fundo preta como na imagem */
  color: #fff; /* Texto branco */
  padding: 30px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5); /* Sombra mais escura */
  transform: translateX(0); /* Garante que está visível */
  transition: transform 0.3s ease-in-out;
  position: relative; /* Para posicionar o botão de fechar */
  display: flex; /* Agora o sidebar é um flex container */
  flex-direction: column; /* Organiza itens em coluna: botão de fechar, e depois main content flex */
  align-items: flex-start; /* Alinha itens ao início */

  /* Altura ajustada para limitar até a linha vermelha */
  top: 80px; /* Abaixo do header, que tem 80px */
  left: 0;
  height: calc(100vh - 400px); /* Ajuste dinâmico da altura para parar antes da linha */
  max-height: 600px; /* Limite máximo da altura */
  min-height: fit-content; /* Garante que não encolha demais */
  z-index: 998; /* Abaixo do header, mas acima do conteúdo principal */
  overflow-y: auto; /* Adiciona scroll se o conteúdo ultrapassar o limite */
`;

// Novo container flex para a navegação e os artigos
export const SidebarMainContent = styled.div`
  display: flex; /* Transforma em flex container */
  flex-direction: row; /* Alinha navegação e artigos lado a lado */
  gap: 20px; /* Espaçamento entre a navegação e os artigos */
  flex-grow: 1; /* Permite que ocupe o espaço restante */
  overflow: hidden; /* Garante que os scrolls internos funcionem */
  align-items: flex-start; /* Alinha os itens verticalmente ao topo */
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 250px; /* Largura fixa para a navegação */
  flex-shrink: 0; /* Impede que a navegação encolha */
  padding-right: 15px; /* Espaço entre a nav e os artigos */
  border-right: 1px solid #333; /* Separador visual */
  overflow-y: auto; /* Adiciona scroll se a navegação for muito longa */
  margin-left: 50px; /* Espaçamento à esquerda para alinhar com o conteúdo principal */
`;

export const SidebarNavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 12px 0; /* Aumenta o padding para espaçamento visual */
  font-size: 1rem;

  &:hover {
    color: #ffffff; /* Cor do texto ao passar o mouse */
    text-decoration-line: underline;
    text-decoration-color: #3d4aff;
    text-decoration-thickness: 2px; /* Espessura da linha */
    text-underline-offset: 5px; /* Distância da linha em relação ao texto */
  }
`;

// Estilos para a seção de artigos em destaque
export const FeaturedArticlesSection = styled.div`
  flex-grow: 1; /* Ocupa o espaço restante no container flex pai */
  display: flex; /* Define como flex container */
  flex-direction: column; /* Artigos dentro da seção ficam em coluna */
  gap: 15px; /* Espaço entre os elementos diretos da seção (título e grid) */
  margin-left: 20px; /* Espaçamento à esquerda para alinhar com o conteúdo principal */
`;

export const FeaturedArticlesTitle = styled.h2`
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

export const ArticlesGrid = styled.div`
  display: flex; /* Artigos dentro da grade ficam em flex */
  gap: 20px; /* Espaçamento entre os cards dos artigos */
  justify-content: flex-start; /* Alinha os artigos ao início */
  margin: 20px;
`;

export const ArticleCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;
  flex: 1 1 calc(50% - 10px); /* Ocupa aproximadamente metade da largura com gap */
  min-width: 400px; /* Garante um tamanho mínimo para evitar colapso */

  @media (max-width: 768px) {
    flex: 1 1 100%; /* Ocupa a largura total em mobile */
    max-width: 100%; /* Garante que não exceda a largura total */
    height: auto; /* Altura automática para o card */
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 300px; /* Altura ajustada para caber no layout lado a lado */
  object-fit: cover;
  display: flex;

    &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    height: 180px; /* Mantém uma altura razoável para a imagem */
  }
`;

export const ArticleReadTime = styled.p`
  color: #888;
  font-size: 0.8em;
  margin-top: 15px;
  margin-bottom: 5px;
  padding: 0 15px; /* Adicionado padding aqui também */
`;

export const ArticleTitle = styled.h3`
  color: #fff;
  font-size: 1.0em; /* Ajustada fonte para caber melhor */
  font-weight: 600;
  margin-bottom: 10px;
  padding: 0 15px; /* Adicionado padding aqui também */
`;

export const ArticleMeta = styled.p`
  color: #aaa;
  font-size: 0.75em;
  margin-bottom: 15px;
  padding: 0 15px; /* Adicionado padding aqui também */
`;

// REMOVIDOS estilos para .app-container, .content-area, .main-content
// pois eles não são específicos da Sidebar e devem ser tratados em um GlobalStyle
// ou em componentes mais abrangentes, como o App.jsx ou Home.jsx.
// Mantenha GlobalStylish.css para estilos globais que não são de styled-components.

// Ajustes de responsividade dentro dos styled-components individuais
// (já foram movidos para os respectivos componentes styled-components acima)