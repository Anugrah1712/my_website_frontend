// pages/Projects.js
import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import electricityPic from "../assets/electricity.png";
import skinPic from "../assets/SKIN.png";
import HeartPic from "../assets/HEART.png";
import ragPic from "../assets/Rag.png";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  min-height: 100vh;
  padding: 40px;
  background: linear-gradient(to right, rgb(255, 255, 255), #a1c4fd);
  animation: fadeIn 0.6s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Content = styled.div`
  width: 60%;
  padding: 30px;
  background: white;
  font-size: 18px;
  border-radius: 10px;
  box-shadow: 25px 25px 10px rgba(0, 0, 0, 0.1);
  margin-left: 50px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 20px;
    box-shadow: none;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #888;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const ProjectCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 20px;
  background-color: #fafafa;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ProjectDate = styled.p`
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 20px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ProjectLink = styled.a`
  color: #007bff;
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

function Projects() {
  return (
    <ProjectsContainer>
      <Sidebar />
      <Content>
        <Title>PROJECTS</Title>
        <Subtitle>A selection of projects that I'm proud of</Subtitle>

        <ProjectCard>
          <ProjectImage src={HeartPic} alt="Heart Stroke Prediction" />
          <CardContent>
            <ProjectTitle>Heart Stroke Prediction</ProjectTitle>
            <ProjectDate>January 2023</ProjectDate>
            <ProjectDescription>
              I developed an Android application using Kotlin 📱 that predicts the likelihood of a stroke 🧠 based on user-provided health metrics. The app integrates a logistic regression model 📊 with Firebase 🔥 for seamless data handling and user authentication. With a focus on accuracy and user experience, the model achieved a 91% predictive accuracy ✅.
            </ProjectDescription>
            <ProjectLink href="https://github.com/Anugrah1712/Heart-Stroke-Prediction.git" target="_blank" rel="noopener noreferrer">
              View Project
            </ProjectLink>
          </CardContent>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={electricityPic} alt="Electricity Billing System" />
          <CardContent>
            <ProjectTitle>Electricity Billing System</ProjectTitle>
            <ProjectDate>June 2022</ProjectDate>
            <ProjectDescription>
              I designed an Android-based electricity billing app ⚡ using Java ☕ and XML 🧩. To enhance UI/UX 🎨, I implemented REST APIs 🌐 and integrated Lottie animations 🎞️.
            </ProjectDescription>
            <ProjectLink href="https://github.com/Anugrah1712/Electricity_Billing_System.git" target="_blank" rel="noopener noreferrer">
              View Project
            </ProjectLink>
          </CardContent>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={skinPic} alt="Skin Lesion Detection" />
          <CardContent>
            <ProjectTitle>Skin Lesion Detection</ProjectTitle>
            <ProjectDate>July 2024</ProjectDate>
            <ProjectDescription>
              This project helps detect skin conditions like Psoriasis, Eczema, Acne, etc., by analyzing lesion images with AI 🤖. It uses deep learning (ResNet-50) and lets users upload images 📸 for accurate predictions.
            </ProjectDescription>
            <ProjectLink href="https://github.com/Anugrah1712/LesionInsight-AI.git" target="_blank" rel="noopener noreferrer">
              View Project
            </ProjectLink>
          </CardContent>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={ragPic} alt="RAG Chatbot" />
          <CardContent>
            <ProjectTitle>RAG Chatbot</ProjectTitle>
            <ProjectDate>February 2025</ProjectDate>
            <ProjectDescription>
              RAG Chatbot Website is an AI-powered chatbot 🤖 using Retrieval-Augmented Generation for document analysis 📄. Built with FastAPI, LangChain, and several vector DBs ⚙️, it supports intelligent PDF-based Q&A. 🚀
            </ProjectDescription>
          </CardContent>
        </ProjectCard>
      </Content>
    </ProjectsContainer>
  );
}

export default Projects;
