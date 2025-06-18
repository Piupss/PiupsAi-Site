// src/components/AIAgentSection/AIAgentSection.jsx
import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  AIAgentContainer,
  MatrixCanvas,
  AIChatBox,
  AIChatHeader,
  AIChatTitle,
  AIChatDescription,
  ChatMessagesContainer,
  ChatInputContainer,
  ChatInput,
  SendButton
} from './AIAgentStyle';

const AIAgentSection = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const matrixLetters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}[]:;<>,.?/~"; // Caracteres para o efeito Matrix
  const fontSize = 20; // Tamanho da fonte dos caracteres
  const columns = useRef([]); // Para armazenar a posição y e o caractere de cada coluna
  const fallSpeed = 0.05; // Ajuste este valor para controlar a velocidade. Valores menores = mais lento. (Ajustado)
  const characterChangeInterval = 15; // Novo: A cada 15 frames, o caractere de UMA coluna muda (maior valor = troca mais lenta e menos frequente) (Ajustado)
  const frameCount = useRef(0); // Contador de frames

  // Função para desenhar o efeito Matrix
  const drawMatrix = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Redimensiona o canvas para preencher o contêiner
    // ESTA PARTE SERÁ TRATADA NO useEffect para evitar redimensionamentos excessivos
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;

    // Calcula o número de colunas baseado na largura e tamanho da fonte
    const numColumns = Math.floor(canvas.width / fontSize);

    // Inicializa as colunas se for a primeira vez ou se o número de colunas mudou
    if (columns.current.length === 0 || columns.current.length !== numColumns) {
      columns.current = Array(numColumns).fill(null).map(() => ({
        y: Math.random() * canvas.height, // Começa em posições aleatórias para um efeito mais natural
        char: matrixLetters.charAt(Math.floor(Math.random() * matrixLetters.length)),
        nextCharChangeFrame: Math.floor(Math.random() * characterChangeInterval) // Quando o próximo caractere deve mudar
      }));
    }

    // Fundo semitransparente para o "rastro" dos códigos
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#007bff'; // Cor azul para os códigos
    ctx.font = `${fontSize}px monospace`; // Fonte monospace para alinhar os caracteres

    // Incrementa o contador de frames
    frameCount.current++;

    columns.current.forEach((column, index) => {
      const x = index * fontSize; // Posição X da coluna

      // Lógica para mudar o caractere de forma mais controlada
      if (frameCount.current >= column.nextCharChangeFrame) {
        column.char = matrixLetters.charAt(Math.floor(Math.random() * matrixLetters.length));
        column.nextCharChangeFrame = frameCount.current + Math.floor(Math.random() * characterChangeInterval) + characterChangeInterval; // Define o próximo frame para mudança
      }

      ctx.fillText(column.char, x, column.y); // Desenha o caractere armazenado

      // Move para baixo
      column.y += fontSize * fallSpeed;

      // Reinicia a coluna quando atinge o final da tela ou aleatoriamente para simular chuva
      if (column.y > canvas.height && Math.random() > 0.98) { // Aumentado o threshold para menos reinícios
        column.y = 0;
        column.char = matrixLetters.charAt(Math.floor(Math.random() * matrixLetters.length)); // Novo caractere ao reiniciar
        column.nextCharChangeFrame = frameCount.current + Math.floor(Math.random() * characterChangeInterval); // Novo tempo para mudança
      }
    });

    animationFrameId.current = requestAnimationFrame(drawMatrix);
  }, [matrixLetters, fallSpeed, characterChangeInterval]); // Adicione characterChangeInterval às dependências do useCallback

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      // Configuração inicial do tamanho do canvas
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
       // Inicializa as colunas pela primeira vez aqui
      const numColumns = Math.floor(canvas.width / fontSize);
      columns.current = Array(numColumns).fill(null).map(() => ({
        y: Math.random() * canvas.height,
        char: matrixLetters.charAt(Math.floor(Math.random() * matrixLetters.length)),
        nextCharChangeFrame: Math.floor(Math.random() * characterChangeInterval) // Define o próximo frame para mudança
      }));
    }

    drawMatrix();

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Reinicializa as colunas ao redimensionar, mantendo a estrutura do objeto
        const numColumns = Math.floor(canvasRef.current.width / fontSize);
        columns.current = Array(numColumns).fill(null).map(() => ({
          y: Math.random() * canvasRef.current.height,
          char: matrixLetters.charAt(Math.floor(Math.random() * matrixLetters.length)),
          nextCharChangeFrame: Math.floor(Math.random() * characterChangeInterval)
        }));
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [drawMatrix, matrixLetters, fontSize, characterChangeInterval]); // Adicione fontSize e characterChangeInterval às dependências do useEffect

  return (
    <AIAgentContainer>
      <MatrixCanvas ref={canvasRef} />
      <AIChatBox>
        {/* NOVO: Container para o título e descrição */}
        <AIChatHeader>
          <AIChatTitle>PiupsAI</AIChatTitle> {/* Título PiupsAI no canto esquerdo superior */}
          <AIChatDescription> {/* Mensagem no canto superior direito */}
            Faça suas perguntas e explore as capacidades da minha agente de inteligência artificial.
          </AIChatDescription>
        </AIChatHeader>

        {/* Container para futuras mensagens do chat, ocupa o espaço central */}
        <ChatMessagesContainer>
            {/* Aqui é onde as mensagens do chat serão exibidas no futuro */}
            <p style={{ color: '#eee', textAlign: 'center', opacity: 0.7 }}>Aguardando sua primeira mensagem...</p>
        </ChatMessagesContainer>

        {/* Container para a caixa de entrada de mensagens e o botão de enviar */}
        <ChatInputContainer>
          <ChatInput placeholder="Digite sua mensagem aqui..." /> {/* Caixa de entrada de mensagens na parte inferior */}
          <SendButton>Enviar Mensagem</SendButton> {/* Botão de enviar mensagem dentro da caixa, no lado direito */}
        </ChatInputContainer>
      </AIChatBox>
    </AIAgentContainer>
  );
};


export default AIAgentSection;