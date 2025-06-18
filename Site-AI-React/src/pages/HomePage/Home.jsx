// src/containers/Home/Home.jsx
import React, { useState } from 'react';
import Header from '../../components/Header/Header.jsx'; // Importe o Header com o caminho correto
import ExplorerSideBar from '../../components/ExplorerSideBar/ExplorerSideBar.jsx'; // Importe o ExplorerSidebar com o caminho correto
import HeroBanner from '../../components/HeroBanner/HeroBanner.jsx'; // Importe o HeroBanner com o caminho correto
import AIAgentSection from '../../components/AIAgentSection/AIAgentSection.jsx'; // Importe o AIAgentSection com o caminho correto

const Home = () => {
  const [isExploreSidebarOpen, setIsExploreSidebarOpen] = useState(false);

  const handleExploreClick = () => {
    setIsExploreSidebarOpen(!isExploreSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsExploreSidebarOpen(false);
  };

  return (
    <div className="home-page">
      {/* Use o seu componente Header aqui, passando as props necessárias */}
      <Header
        onExploreClick={handleExploreClick}
        isExploreSidebarOpen={isExploreSidebarOpen}
      />

       {/* Renderize a ExplorerSidebar aqui, passando as props */}
      <ExplorerSideBar
        isOpen={isExploreSidebarOpen}
        onClose={handleCloseSidebar}
      />

       {/* Componente HeroBanner aqui */}
      <HeroBanner />

      {/* Renderize o seu novo componente AIAgentSection aqui */}
      <AIAgentSection />

      {/* Outras seções da sua página inicial podem vir aqui */}
      <section className="featured-news-section">
          <h2>Featured News</h2>
          {/* Conteúdo das notícias */}
      </section>
    </div>
  );
};

export default Home;