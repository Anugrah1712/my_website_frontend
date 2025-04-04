// pages/Home.js
import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar"; // Import the shared sidebar

const HomeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 100vh;
  padding: 40px;
  background-color: #eeeeee;
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

const Links = styled.div`
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
        <p>A sleek, responsive React app crafted with modern JavaScript for a seamless and engaging user experience.</p>
        <Description>
          Welcome to my website. Please feel free to read more <a href="#">about me</a>, or check out my 
          <a href="#"> resume</a>, <a href="#">projects</a>, view <a href="#">site statistics</a>, or 
          <a href="#"> contact me</a>.
        </Description>
        <Links>
          <p>Source available <a href="#">here</a>.</p>
        </Links>
      </Content>
    </HomeContainer>
  );
}

export default Home;
