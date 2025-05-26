// components/Sidebar.js
import React from "react";
import styled from "styled-components";
import profilePic from "../assets/image.png";
import { useNavigate } from "react-router-dom";

const SidebarContainer = styled.div`
  width: 25%;
  padding: 20px;
  background: white;
  font-size: 20px;
  border-radius: 10px;
  box-shadow: 25px 25px 10px rgba(0, 0, 0, 0.1);
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
    box-shadow: none;
  }
`;

const ProfileImage = styled.img`
  width: 275px;
  height: 275px;
  border-radius: 40%;
  display: block;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin: 0 auto 15px auto;
  }
`;

const StyledName = styled.h2`
  color: black;
  margin: 10px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const StyledEmail = styled.p`
  color: black;
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const StyledHeading = styled.h3`
  color: black;
  margin-top: 20px;
  font-size: 22px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const StyledParagraph = styled.p`
  color: black;
  font-size: 18px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;


const Sidebar = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/about");
  };

  return (
    <SidebarContainer>
      <ProfileImage src={profilePic} alt="Profile" />
      <StyledName>Anugrah Mishra</StyledName>
      <StyledEmail>anugrahmishra15@gmail.com</StyledEmail>
      <StyledHeading>ABOUT</StyledHeading>
      <StyledParagraph>
        Hi, I'm Anugrah. I'm a Computer Science and AIML major at Symbiosis Institute of Technology and currently a Data Science Intern at Bajaj Finserv. 
        I bring a strong foundation in software development and AI/ML, with experience spanning Android, Python, and full-stack technologies.
      </StyledParagraph>
      <Button onClick={handleLearnMoreClick}>LEARN MORE</Button>
    </SidebarContainer>
  );
};


export default Sidebar;
