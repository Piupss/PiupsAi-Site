// src/components/AIAgentSection/AIAgentSectionStyle.js
import styled from 'styled-components';

export const AIAgentContainer = styled.section`
  width: 100%;
  height: 100vh; /* Para garantir que ocupe a altura total da viewport */
  background-color: #000; /* Fundo preto para o efeito Matrix */
  position: relative;
  overflow: hidden; /* Garante que o canvas não cause barras de rolagem indesejadas */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* Cor do texto padrão para o conteúdo */
`;

export const MatrixCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block; /* Remove o espaçamento extra que alguns navegadores adicionam ao canvas */
  z-index: 1; /* Abaixo da caixa de mensagem */
`;

export const AIChatBox = styled.div`
  background-color: rgba(0, 0, 0, 0.44); /* Fundo semi-transparente para a caixa da IA */
  border: 1px solid #007bff; /* Borda azul */
  border-radius: 10px;
  padding: 40px;
  max-width: 190vh;
  width: 95%; /* Ajustável para diferentes tamanhos de tela */
  height: 90%; /* Ajustável para diferentes tamanhos de tela */
  z-index: 2; /* Acima do canvas Matrix */
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 20px rgba(0, 123, 255, 0.5); /* Sombra azul para destaque */
`;

export const AIChatHeader = styled.div` /* NOVO: Container para o título e descrição */
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Alinha o título e a descrição ao topo */
  margin-bottom: 20px; /* Espaço entre o cabeçalho e o conteúdo principal */
`;

export const AIChatTitle = styled.h2`
  font-size: 2em;
  color: #007bff; /* Título em azul */
  margin-bottom: 10px;
`;

export const AIChatDescription = styled.p`
  font-size: 1.1em;
  line-height: 1.5;
  color: #ccc;
`;

export const ChatMessagesContainer = styled.div` /* NOVO: Para futuras mensagens do chat */
  flex-grow: 1; /* Permite que ocupe o espaço restante */
  overflow-y: auto; /* Adiciona scroll se as mensagens excederem a altura */
  padding-right: 10px; /* Espaço para a barra de scroll */
  margin-bottom: 15px; /* Espaçamento antes do input */
  /* Estilize a barra de rolagem se desejar */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #007bff;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(255,255,255,0.1);
  }
`;

export const ChatInputContainer = styled.div` /* NOVO: Para agrupar input e botão */
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-top: auto; /* Empurra o container para o final do AIChatBox */
`;

export const ChatInput = styled.textarea`
  width: calc(100% - 20px); /* Ajuste para padding */
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid #007bff;
  border-radius: 5px;
  color: white;
  font-size: 1em;
  resize: vertical; /* Permite redimensionamento vertical */
  min-height: 80px;

  &:focus {
    outline: none;
    border-color: #00aaff;
    box-shadow: 0 0 5px rgba(0, 170, 255, 0.7);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const SendButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;