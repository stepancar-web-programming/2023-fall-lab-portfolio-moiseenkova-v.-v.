import React from 'react';
import styled from 'styled-components';
import YouTubeVideo from './YouTubeVideo';

const Container = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  color: white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/img/kenguru.jpeg');
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    z-index: -1;
  }
`;

const CenteredBlock = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  color: rgba(52, 50, 50, 0.8);
`;

const Description = styled.p`
  color: rgba(52, 50, 50, 0.8);
`;

const VideoContainer = styled.div`
  margin-top: 20px;
  align-self: center;
`;

const videoId = 'bQmzk05I3nw';

const HomePage = () => {
    return (
        <>
            <Container>
                <Title>Добро пожаловать на сайт об австралийских животных</Title>
                <Description>Исследуйте удивительный мир австралийской фауны.</Description>
            </Container>
            <CenteredBlock>
                <h2>Австралия: Страна контрастов</h2>
                <p>
                    От красивых прибрежных пейзажей до уникальной фауны и флоры, Австралия — страна,
                    где сливаются воедино потрясающая природа и современная культура. Погрузитесь в
                    удивительные виды и узнайте больше о фасцинирующем мире Австралии с нашим видео.
                </p>
                <VideoContainer>
                    <YouTubeVideo videoId={videoId} />
                </VideoContainer>
            </CenteredBlock>
        </>
    );
};

export default HomePage;
