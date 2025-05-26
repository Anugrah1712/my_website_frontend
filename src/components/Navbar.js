import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  background: linear-gradient(to right, rgb(255, 255, 255), #a1c4fd);
  justify-content: space-between;
  padding: 20px 100px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  align-items: center;

  @media (max-width: 768px) {
    padding: 15px 20px;
    flex-direction: column;
    gap: 10px;
  }
`;

const Logo = styled.h1`
  font-size: 20px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>ANUGRAH MISHRA</Logo>
      <NavLinks>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/resume">RESUME</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/stats">STATS</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
