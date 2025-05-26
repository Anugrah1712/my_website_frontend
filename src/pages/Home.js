import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 100vh;
  padding: 40px;
  background: linear-gradient(to right, rgb(255, 255, 255), #a1c4fd);
  animation: fadeIn 0.6s ease-in-out;
`;

const Content = styled.div`
  width: 60%;
  padding: 30px;
  background: white;
  font-size: 25px;
  border-radius: 10px;
  box-shadow: 25px 25px 10px rgba(0, 0, 0, 0.1);
  margin-left: 50px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 25px;
  line-height: 1.5;
  color: #666;
`;

const StyledLinks = styled.div`
  margin-top: 20px;
  font-size: 14px;

  a {
    color: #007bff;
    text-decoration: none;
    margin-right: 10px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Sidebar />
      <Content>
        <Title>ABOUT THIS SITE</Title>
        <p>
          A sleek, responsive React app crafted with modern JavaScript for a
          seamless and engaging user experience.
        </p>
        <Description>
          Welcome to my website. Please feel free to read more{" "}
          <Link to="/about">about me</Link>, or check out my{" "}
          <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>, view{" "}
          <Link to="/stats">site statistics</Link>, or{" "}
          <Link to="/contact">contact me</Link>.
        </Description>
        <StyledLinks>
          <p>
            Source available <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">here</a>.
          </p>
        </StyledLinks>
      </Content>
    </HomeContainer>
  );
}

export default Home;
