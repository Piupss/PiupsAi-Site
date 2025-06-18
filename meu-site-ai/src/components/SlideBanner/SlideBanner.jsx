import React, { useState, useEffect, useRef, useCallback } from 'react';

const SlideBanner = () => {
  const images = [
    appleIaImg,
    assistidaIaImg,
    modoBuscaIaImg,
    // Adicione mais imagens conforme necessário
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setProgress(0); // Reinicia a barra de progresso ao mudar de slide
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setProgress(0); // Reinicia a barra de progresso ao ir para um slide específico
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // Reinicia o intervalo de avanço automático
    }
  };

  useEffect(() => {
    // Inicia o intervalo para avançar o slide automaticamente
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000); // Troca de slide a cada 5 segundos (ajuste conforme necessário)

    return () => {
      // Limpa o intervalo quando o componente é desmontado
      clearInterval(intervalRef.current);
    };
  }, [nextSlide]); // Depende de nextSlide

  useEffect(() => {
    // Anima a barra de progresso
    const progressBarInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          // Quando o progresso atinge 100%, o nextSlide já foi chamado pelo primeiro useEffect
          // para evitar chamadas duplas e descompasso na animação, basta resetar o progresso
          return 0;
        }
      });
    }, 50); // Atualiza a barra de progresso a cada 50ms (ajuste para a velocidade desejada)

    return () => {
      clearInterval(progressBarInterval);
    };
  }, [currentIndex]); // Depende de currentIndex para reiniciar a animação

  return (
    <div className="slide-banner-container"> {/* Alterado para usar a classe do CSS fornecido */}
      <div
        className="slide-wrapper" // Alterado para usar a classe do CSS fornecido
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="slide-item"> {/* Alterado para usar a classe do CSS fornecido */}
            <img src={image} alt={`Banner ${index + 1}`} className="slide-image" /> {/* Adicionado className */}
          </div>
        ))}
      </div>
      <div className="progress-bar-container">
        {images.map((_, index) => (
          <div
            key={index}
            className={`progress-segment ${index === currentIndex ? 'active' : ''}`}
            style={{ width: `${100 / images.length}%` }}
            onClick={() => goToSlide(index)}
          >
            {/* Barra de progresso animada */}
            {index === currentIndex && (
              <div className="progress-indicator" style={{ width: `${progress}%` }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideBanner;