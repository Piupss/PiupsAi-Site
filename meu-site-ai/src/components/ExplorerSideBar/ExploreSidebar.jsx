import React from 'react';
import { Link } from 'react-router-dom';

const ExploreSidebar = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null; // Não renderiza nada se não estiver aberto
  }

  return (
    <div className="explore-sidebar-overlay" onClick={onClose}> {/* Overlay para fechar ao clicar fora */}
      <aside className="explore-sidebar" onClick={(e) => e.stopPropagation()}> {/* Previne o fechamento ao clicar na sidebar */}
        {/* Botão de fechar posicionado absolutamente dentro do sidebar */}
        <span className="sidebar-close-button" onClick={onClose}>&times;</span>
        
        {/* Novo container flex para a navegação e os artigos */}
        <div className="sidebar-main-content">
          <nav className="sidebar-nav">
            <Link to="/" className="sidebar-nav-item" onClick={onClose}>Home</Link>
            <Link to="/missions" className="sidebar-nav-item" onClick={onClose}>AI Fundamentals</Link>
            <Link to="/humans-in-space" className="sidebar-nav-item" onClick={onClose}>Breakthroughs & Research</Link>
            <Link to="/earth" className="sidebar-nav-item" onClick={onClose}>AI Applications</Link>
            <Link to="/solar-system" className="sidebar-nav-item" onClick={onClose}>Generative AI</Link>
            <Link to="/universe" className="sidebar-nav-item" onClick={onClose}>Ethics & Society</Link>
            <Link to="/science" className="sidebar-nav-item" onClick={onClose}>Tools & Platforms</Link>
            <Link to="/aeronautics" className="sidebar-nav-item" onClick={onClose}>AI in Business</Link>
            <Link to="/technology" className="sidebar-nav-item" onClick={onClose}>Learning Resources</Link>
            <Link to="/learning-resources" className="sidebar-nav-item" onClick={onClose}>Community</Link>
            <Link to="/about-nasa" className="sidebar-nav-item" onClick={onClose}>About PiupsAi</Link>
          </nav>
          {/* Renderiza os artigos em destaque ao lado da navegação */}
          <FeaturedArticles />
        </div>
      </aside>
    </div>
  );
};

// Componente para os artigos em destaque
const FeaturedArticles = () => {
  // Dados mock para os artigos
  const articles = [
    {
      id: 1,
      title: "Apple Introduz IA On-Device em Seu Ecossistema",
      readTime: "2 MIN READ",
      type: "ARTICLE",
      timeAgo: "Maio de 2025",
      imageUrl: "/src/assets/database/featuredimg/Apple Introduz IA.png",
    },
    {
      id: 2,
      title: "Google Lança Gemini 2.5 Pro e Modo de Busca com IA",
      readTime: "2 MIN READ",
      type: "ARTICLE",
      timeAgo: "Maio de 2025",
      imageUrl: "/src/assets/database/featuredimg/Modo de Busca com IA.png",
    },
    {
      id: 3,
      title: "FDA Anuncia Conclusão do Piloto de Revisão Científica Assistida por IA",
      readTime: "3 MIN READ",
      type: "ARTICLE",
      timeAgo: "08 de Maio de 2025",
      imageUrl: "/src/assets/database/featuredimg/Assistida por IA.png",
    },
  ];

  return (
    <div className="featured-articles-section">
      <h2 className="featured-articles-title">FEATURED</h2>
      <div className="articles-grid"> {/* Este container será um grid/flex para os cards */}
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <img src={article.imageUrl} alt={article.title} className="article-image" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/666666/FFFFFF?text=Image+Error"; }}/>
            <p className="article-read-time">{article.readTime}</p>
            <h3 className="article-title">{article.title}</h3>
            <p className="article-meta">{article.type} {article.timeAgo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSidebar;