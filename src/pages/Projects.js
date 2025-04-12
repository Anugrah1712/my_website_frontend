// pages/Projects.js
import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar"; // assuming the same sidebar as in Home.js
import electricityPic from "../assets/electricity.png";
import skinPic from "../assets/SKIN.png";
import HeartPic from "../assets/HEART.png";
import ragPic from "../assets/Rag.png"

const ProjectsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 100vh;
  padding: 40px;
  background: linear-gradient(to right,rgb(255, 255, 255), #a1c4fd);
  animation: fadeIn 0.6s ease-in-out;
`;

const Content = styled.div`
  width: 60%;
  padding: 30px;
  background: white;
  font-size: 18px;
  border-radius: 10px;
  box-shadow: 25px 25px 10px rgba(0, 0, 0, 0.1);
  margin-left: 50px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #888;
  margin-bottom: 30px;
`;

const ProjectCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  display: block;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;


const CardContent = styled.div`
  padding: 20px;
  background-color: #fafafa;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ProjectDate = styled.p`
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 20px;
  line-height: 1.6;
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
          <ProjectImage src={HeartPic} alt="Profile" />
          <CardContent>
            <ProjectTitle>Heart Stroke Prediction</ProjectTitle>
            <ProjectDate>January 2023</ProjectDate>
            <ProjectDescription>
            I developed an Android application using Kotlin 📱 that predicts the likelihood of a stroke 🧠 based on user-provided health metrics. The app integrates a logistic regression model 📊 with Firebase 🔥 for seamless data handling and user authentication. With a focus on accuracy and user experience, the model achieved a 91% predictive accuracy ✅, offering a reliable tool for early stroke risk assessment 🩺.
            </ProjectDescription>
            <ProjectLink href="https://github.com/Anugrah1712/Heart-Stroke-Prediction.git" target="_blank" rel="noopener noreferrer">
              View Project
            </ProjectLink>
          </CardContent>
        </ProjectCard>

        <ProjectCard>
        <ProjectImage src={electricityPic} alt="Profile" />
          <CardContent>
            <ProjectTitle>Electricity Billing System</ProjectTitle>
            <ProjectDate>June 2022</ProjectDate>
            <ProjectDescription>
            I designed an Android-based **electricity billing app** ⚡ using **Java** ☕ and **XML** 🧩. To enhance the overall **UI/UX** 🎨, I implemented **REST APIs** 🌐 for smooth data interaction and integrated **Lottie animations** 🎞️ for a more engaging user experience.
            </ProjectDescription>
            <ProjectLink href="https://github.com/Anugrah1712/Electricity_Billing_System.git" target="_blank" rel="noopener noreferrer">
              View Project
            </ProjectLink>
          </CardContent>
        </ProjectCard>

        <ProjectCard>
        <ProjectImage src={skinPic} alt="Profile" />
          <CardContent>
            <ProjectTitle>Skin Lesion Detection</ProjectTitle>
            <ProjectDate>July 2024</ProjectDate>
            <ProjectDescription>
            This project aims to help detect skin conditions like **Psoriasis**, **Eczema**, **Acne**, **Atopic Dermatitis**, **Hair Loss**, and **Nail Fungus** 🧴 by analyzing images of skin lesions using **AI** 🤖. Leveraging deep learning models like **ResNet-50** 🧠, the platform allows users to **upload skin lesion images** 📸, which are then processed and analyzed to predict the most likely disease with high accuracy. 🚀
            </ProjectDescription>
            <ProjectLink href="https://github.com/Anugrah1712/LesionInsight-AI.git" target="_blank" rel="noopener noreferrer">
              View Project
            </ProjectLink>
          </CardContent>
        </ProjectCard>

        <ProjectCard>
        <ProjectImage src={ragPic} alt="Profile" />
          <CardContent>
            <ProjectTitle>RAG Chatbot</ProjectTitle>
            <ProjectDate>Feburary 2025</ProjectDate>
            <ProjectDescription>
            **RAG Chatbot Website** is an **AI-powered chatbot** 🤖 utilizing **Retrieval-Augmented Generation (RAG)** for efficient **document analysis** 📄. Built with **FastAPI**, **LangChain**, and **Several Vector DBs** ⚙️, it enables seamless information retrieval from **PDFs** 📚. The chatbot leverages **Hugging Face models** 🧠 for accurate and context-aware responses, making it an ideal solution for **research** 🔍 and **customer support** 💬. 🚀
            </ProjectDescription>
          </CardContent>
        </ProjectCard>

      </Content>
    </ProjectsContainer>
  );
}

export default Projects;
