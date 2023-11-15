import React from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  color: #3a3a3a;
  
`;

const Content = styled.div`
  margin-top: 20px;
`;


const AnimalPage = () => (
    <Container>
        <Title>Информация о животных</Title>
        <Content>
            <ImageSlider/>
        </Content>
    </Container>
);

export default AnimalPage;

