import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: whitesmoke;
  text-align: center;
  padding: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const Icon = styled.a`
  margin: 0 10px;
  display: inline-block;

  &:hover {
    color: #ddd; 
  }
`;

const Footer = () => (
    <FooterContainer>
        <SocialIcons>
            <Icon href="https://about.meta.com/" target="_blank" rel="noopener noreferrer">
                <img src="/img/meta.svg" alt="Meta" />
            </Icon>
            <Icon href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <img src="/img/x.svg" alt="Twitter" />
            </Icon>
            <Icon href="https:/github.com" target="_blank" rel="noopener noreferrer">
                <img src="/img/git.svg" alt="GitHub" />
            </Icon>
        </SocialIcons>
        <p>&copy; {new Date().getFullYear()} Все права защищены.</p>
    </FooterContainer>
);

export default Footer;
