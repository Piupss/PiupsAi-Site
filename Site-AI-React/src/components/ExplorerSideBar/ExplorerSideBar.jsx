import React from 'react';
import { Link } from 'react-router-dom';
import {
  ExploreSidebarContainer,
  ExploreSidebarOverlay,
  SidebarMainContent,
  SidebarNav,
  SidebarNavItem,
  FeaturedArticlesSection,
  FeaturedArticlesTitle,
  ArticlesGrid,
  ArticleCard,
  ArticleImage,
  ArticleReadTime,
  ArticleTitle,
  ArticleMeta,
} from './ExplorerStyle.js';

const ExplorerSideBar = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null; // Não renderiza nada se não estiver aberto
  }

  return (
    // Use o componente estilizado para o overlay
    <ExploreSidebarOverlay onClick={onClose}>
      {/* Use o componente estilizado para a sidebar principal */}
      <ExploreSidebarContainer onClick={(e) => e.stopPropagation()}>

        {/* Novo container flex para a navegação e os artigos */}
        <SidebarMainContent>
          <SidebarNav>
            <SidebarNavItem to="/" onClick={onClose}>Home</SidebarNavItem>
            <SidebarNavItem to="/missions" onClick={onClose}>AI Fundamentals</SidebarNavItem>
            <SidebarNavItem to="/humans-in-space" onClick={onClose}>Breakthroughs & Research</SidebarNavItem>
            <SidebarNavItem to="/earth" onClick={onClose}>AI Applications</SidebarNavItem>
            <SidebarNavItem to="/solar-system" onClick={onClose}>Generative AI</SidebarNavItem>
            <SidebarNavItem to="/universe" onClick={onClose}>Ethics & Society</SidebarNavItem>
            <SidebarNavItem to="/science" onClick={onClose}>Tools & Platforms</SidebarNavItem>
            <SidebarNavItem to="/aeronautics" onClick={onClose}>AI in Business</SidebarNavItem>
            <SidebarNavItem to="/technology" onClick={onClose}>Learning Resources</SidebarNavItem>
            <SidebarNavItem to="/learning-resources" onClick={onClose}>Community</SidebarNavItem>
            <SidebarNavItem to="/about-nasa" onClick={onClose}>About PiupsAi</SidebarNavItem>
          </SidebarNav>
          {/* Renderiza os artigos em destaque ao lado da navegação */}
          <FeaturedArticles />
        </SidebarMainContent>
      </ExploreSidebarContainer>
    </ExploreSidebarOverlay>
  );
};

// Componente para os artigos em destaque (mantido como subcomponente aqui, usando os styled-components)
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
    <FeaturedArticlesSection>
      <FeaturedArticlesTitle>FEATURED</FeaturedArticlesTitle>
      <ArticlesGrid>
        {articles.map((article) => (
          <ArticleCard key={article.id}>
            <ArticleImage src={article.imageUrl} alt={article.title} onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/666666/FFFFFF?text=Image+Error"; }}/>
            <ArticleReadTime>{article.readTime}</ArticleReadTime>
            <ArticleTitle>{article.title}</ArticleTitle>
            <ArticleMeta>{article.type} {article.timeAgo}</ArticleMeta>
          </ArticleCard>
        ))}
      </ArticlesGrid>
    </FeaturedArticlesSection>
  );
};

export default ExplorerSideBar;