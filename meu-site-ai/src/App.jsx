import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExploreSidebar from './components/ExploreSidebar/ExploreSidebar';

function App() {
  const [isExploreSidebarOpen, setIsExploreSidebarOpen] = useState(false);

  // Função para abrir o sidebar
  const handleExploreClick = () => {
    setIsExploreSidebarOpen(true);
  };

  // Função para fechar o sidebar
  const handleCloseSidebar = () => {
    setIsExploreSidebarOpen(false);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Passa o estado e a função para o Header */}
        <Header
          onExploreClick={handleExploreClick}
          isExploreSidebarOpen={isExploreSidebarOpen}
        />

        {/* O ExploreSidebar é renderizado condicionalmente e já contém seu próprio overlay */}
        <ExploreSidebar
          isOpen={isExploreSidebarOpen}
          onClose={handleCloseSidebar}
        />

        {/* Conteúdo principal da aplicação */}
        <main className="main-content">
          <Routes>
            {/* A rota principal "/" renderiza o componente HomePage */}
            <Route path="/" element={<HomePage />} />
            {/* Adicione outras rotas aqui conforme necessário */}
            <Route path="/missions" element={<div className="text-white">AI Fundamentals</div>} />
            <Route path="/humans-in-space" element={<div className="text-white">Breakthroughs & Research</div>} />
            <Route path="/earth" element={<div className="text-white">AI Applications</div>} />
            <Route path="/solar-system" element={<div className="text-white">Generative AI</div>} />
            <Route path="/universe" element={<div className="text-white">Ethics & Society</div>} />
            <Route path="/science" element={<div className="text-white">Tools & Platforms</div>} />
            <Route path="/aeronautics" element={<div className="text-white">AI in Business</div>} />
            <Route path="/technology" element={<div className="text-white">Learning Resources</div>} />
            <Route path="/learning-resources" element={<div className="text-white">Community</div>} />
            <Route path="/about-nasa" element={<div className="text-white">About PiupsAi Page</div>} />
            <Route path="/espanol" element={<div className="text-white">Español Page</div>} />
            <Route path="/news" element={<div className="text-white">News & Events Page</div>} />
            <Route path="/multimedia" element={<div className="text-white">Multimedia Page</div>} />
            <Route path="/piups-plus" element={<div className="text-white">PiupsAi+ Page</div>} />
            <Route path="/live" element={<div className="text-white">LIVE Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;