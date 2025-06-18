// src/components/HeroBanner/HeroBanner.jsx
import React from 'react';
import {
  HeroBannerContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
  HeroBottomLinks,
  LinkCard,
  Category,
  TitleLink,
  MediaControls,
  PlayPauseButton,
  ProgressBarContainer,
  ProgressBar,
  TimeDisplay
} from './HeroStyle.js';

// Assumindo que bannerBackground é uma imagem importada ou uma URL
const bannerBackground = 'src/assets/BannerBackGround/Banner.png';

const HeroBanner = () => {
  return (
    <HeroBannerContainer style={{ backgroundImage: `url(${bannerBackground})` }}>
      <HeroContent>
        <HeroTitle>Helping American Communities</HeroTitle>
        <HeroSubtitle>
          With the Atlantic hurricane season underway, NASA is gearing up to produce cutting-edge
          research that strengthens the nation's ability to prepare for and respond to severe weather.
        </HeroSubtitle>
        <HeroButton className="skywatching-button">NASA's Hurricane Science</HeroButton>
      </HeroContent>

      <HeroBottomLinks>
        <LinkCard>
          <Category>EMST INSTRUMENT</Category>
          <TitleLink href="#">Wastewater Detection</TitleLink>
        </LinkCard>
        <LinkCard>
          <Category>DEED MISSION</Category>
          <TitleLink href="#">Radio-Disrupting Clouds</TitleLink>
        </LinkCard>
        <LinkCard>
          <Category>NISAR MISSION</Category>
          <TitleLink href="#">Managing Natural Resources</TitleLink>
        </LinkCard>
        <MediaControls>
          <PlayPauseButton>
            {/* Ícone de Play */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" fill="white"/>
            </svg>
          </PlayPauseButton>
          <ProgressBarContainer>
            <ProgressBar style={{ width: '30%' }} /> {/* Exemplo de progresso */}
          </ProgressBarContainer>
          <TimeDisplay>1:45 / 3:20</TimeDisplay> {/* Exemplo de tempo */}
          <PlayPauseButton>
            {/* Ícone de Pause */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" fill="white"/>
            </svg>
          </PlayPauseButton>
        </MediaControls>
      </HeroBottomLinks>
    </HeroBannerContainer>
  );
};

export default HeroBanner;