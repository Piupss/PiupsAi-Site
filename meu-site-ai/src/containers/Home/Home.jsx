// src/pages/Home.jsx
import React from 'react';
import Main from '../../Main.jsx'
import Header from '../../components/Header/Header.jsx';

const Home = () => {
  return (
    <div className="home-page">
      {/* Se o Header for global em App.jsx, você pode removê-lo daqui.
        Caso contrário, ele viria aqui:
      */}
      {/* <Header /> */}

      {/* Seção do Banner Principal (Hero) - Mantida aqui por ser o destaque da home */}
      <section
        className="hero-banner"
        style={{ backgroundImage: `url(${bannerBackground})` }}
      >
        <div className="hero-content">
          <h1>The Wonders of Space</h1>
          <p>
            In June, skywatchers can observe Saturn and Venus in the eastern sky; the bright
            central core of the Milky Way galaxy; and, for those north of the equator, the summer
            solstice.
          </p>
          <button className="skywatching-button">Skywatching Highlights</button>
        </div>
        {/* Seção dos cards inferiores - pode ser um componente separado depois */}
        <div className="hero-bottom-links">
            <div className="link-card">
                <span className="category">SKYWATCHING</span>
                <a href="#" className="title">Tips and Guides</a>
            </div>
            <div className="link-card">
                <span className="category">SKYWATCHING</span>
                <a href="#" className="title">Frequently Asked Questions</a>
            </div>
            <div className="link-card">
                <span className="category">SKYWATCHING</span>
                <a href="#" className="title">Night Sky Network</a>
            </div>
            {/* Controles de Play/Pause - por enquanto um placeholder */}
            <div className="media-controls">
                {/* Ícones aqui */}
            </div>
        </div>
      </section>

      {/* Aqui é onde o seu componente Main será renderizado.
        O SlideBanner será adicionado DENTRO do Main.jsx.
      */}
      <Main />

      {/* Outras seções da sua página inicial podem vir aqui, se não estiverem dentro do Main */}
      <section className="featured-news-section">
          <h2>Featured News</h2>
          {/* Conteúdo das notícias */}
      </section>
    </div>
  );
};

export default Home;