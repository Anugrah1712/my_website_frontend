import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  background: linear-gradient(to right,rgb(255, 255, 255), #a1c4fd);
  justify-content: space-between;
  padding: 20px 100px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
`;

const Logo = styled.h1`
  font-size: 20px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
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
