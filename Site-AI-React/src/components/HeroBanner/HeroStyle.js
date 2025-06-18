import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroBannerContainer = styled.section`
  width: 100%;
  height: 100vh; /* Ajuste conforme a altura desejada para o banner */
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Empurra o conteúdo principal para cima e os links para baixo */
  align-items: flex-start;
  color: white;
  padding: 100px 80px 80px 80px; /* Padding superior para não cobrir o header, e padding nas laterais/inferior */
  box-sizing: border-box; /* Garante que o padding não aumente o tamanho total */
  position: relative; /* Para posicionar elementos internos, como o fade */

  /* Overlay escuro para melhorar a legibilidade do texto */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%),
      linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%); 
    z-index: 1;
  }
`;

export const HeroContent = styled.div`
  max-width: 600px;
  z-index: 2; /* Acima do overlay */
  margin-top: 50px; /* Ajuste para descer o conteúdo principal */
  text-align: left;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5); /* Sombra para o texto do título */
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5); /* Sombra para o texto do subtítulo */
`;

export const HeroButton = styled.button`
  background-color: #007bff; /* Cor azul similar ao botão da NASA */
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const HeroBottomLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 2; /* Acima do overlay */
  gap: 20px; /* Espaçamento entre os cards e controles de mídia */
  margin-top: auto; /* Empurra para a parte inferior do HeroBannerContainer */
  padding-right: 50px; /* Para alinhar com o lado direito da imagem */
`;

export const LinkCard = styled.div`
  background-color: rgba(0, 0, 0, 0.6); /* Fundo semi-transparente para os cards */
  padding: 15px 20px;
  border-left: 3px solid #007bff; /* Borda esquerda azul */
  display: flex;
  flex-direction: column;
  flex: 1; /* Ocupa espaço igual */
  max-width: 250px; /* Limite a largura dos cards */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    transform: scale(1.02);
  }
`;

export const Category = styled.span`
  font-size: 0.8em;
  color: #bbb;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

export const TitleLink = styled.a`
  font-size: 1.1em;
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #007bff;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
  }
`;

export const MediaControls = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px 15px;
  border-radius: 5px;
  gap: 10px;
`;

export const PlayPauseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 5px;

  svg {
    width: 24px;
    height: 24px;
    fill: white;
  }
`;

export const ProgressBarContainer = styled.div`
  width: 120px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  overflow: hidden;
`;

export const ProgressBar = styled.div`
  height: 100%;
  background-color: white;
  width: 0%; /* Controlado via props ou estado no futuro */
`;

export const TimeDisplay = styled.span`
  font-size: 0.9em;
  color: white;
`;