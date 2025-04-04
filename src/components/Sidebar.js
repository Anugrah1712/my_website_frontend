// components/Sidebar.js
import React from "react";
import styled from "styled-components";
import profilePic from "../assets/image.png";

const SidebarContainer = styled.div`
  width: 25%;
  height: 50%;
  padding: 20px;
  background: white;
  font-size: 25px;
  border-radius: 10px;
  box-shadow: 25px 25px 10px rgba(0, 0, 0, 0.1);
  margin: 0;
  text-align: left;
`;

const ProfileImage = styled.img`
  width: 275px;
  height: 275px;
  border-radius: 40%;
  display: block;
  margin-bottom: 15px;
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
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <ProfileImage src={profilePic} alt="Profile" />
      <h2>Anugrah Mishra</h2>
      <p>anugrahmishra15@gmail.com</p>
      <h3>ABOUT</h3>
      <p>
        Hi, I'm Anugrah. I'm a Computer Science and AIML major at Symbiosis Institute of Technology and currently a Data Science Intern at Bajaj Finserv. 
        I bring a strong foundation in software development and AI/ML, with experience spanning Android, Python, and full-stack technologies.
      </p>
      <Button>LEARN MORE</Button>
    </SidebarContainer>
  );
};

export default Sidebar;
