import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(NavLink)`
  color: white;
  margin: 0 15px;
  text-decoration: none;
  &.active {
    border-bottom: 1px solid white;
  }

  &:hover {
    color: #ccc;
  }
`;


const Navbar = () => (
    <Nav>
        <StyledLink to="/" end>Главная</StyledLink>
        <StyledLink to="/animals">Животные</StyledLink>
    </Nav>
);

export default Navbar;
