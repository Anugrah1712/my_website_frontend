import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  padding: 40px;
  background: linear-gradient(to right, rgb(255, 255, 255), #a1c4fd);
  animation: fadeIn 0.6s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;


const Header = styled.div`
  padding: 10px 0;
  font-size: 16px;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 14px;
  }
`;

const Nav = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
  text-transform: uppercase;
  color: black;
  cursor: pointer;
  justify-content: flex-end;

  a {
    text-decoration: none;
    color: #000;
  }

  a:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    font-size: 12px;
    gap: 10px;
  }
`;

const Content = styled.div`
  width: 65%;
  padding: 40px;
  font-size: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  margin-left: 50px;
  font-family: 'Segoe UI', sans-serif;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 20px;
    font-size: 16px;
  }
`;


const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const SkillBarWrapper = styled.div`
  margin-bottom: 10px;
`;

const SkillLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SkillBar = styled.div`
  background: #ddd;
  border-radius: 5px;
  height: 18px;
  width: 100%;
  position: relative;
  margin-bottom: 10px;

  &::after {
    content: "";
    display: block;
    height: 100%;
    border-radius: 5px;
    background: ${(props) => {
      if (props.rating >= 9) return "red";
      if (props.rating >= 8) return "blue";
      return "orange";
    }};
    width: ${(props) => (props.rating / 10) * 100}%;
  }
`;

const Resume = () => {
  const skills = [
    { label: "Java", rating: 9 },
    { label: "Kotlin", rating: 8 },
    { label: "Python", rating: 9.5 },
    { label: "C, C++", rating: 7 },
    { label: "HTML/CSS", rating: 9 },
    { label: "VS Code", rating: 9 },
    { label: "Git & GitHub", rating: 9 },
    { label: "Android Studio", rating: 8 },
    { label: "Gradle", rating: 8 },
    { label: "SQL", rating: 8 },
    { label: "Firebase", rating: 7 },
    { label: "MVVM", rating: 7 },
    { label: "Jetpack Compose", rating: 7 },
    { label: "View Binding", rating: 7 },
    { label: "Matplotlib", rating: 9 },
    { label: "NumPy", rating: 9 },
    { label: "Pandas", rating: 9 },
    { label: "SciPy", rating: 9 },
    { label: "Seaborn", rating: 8 },
  ];

  return (
    <ResumeContainer>
      <Sidebar />
      {/* <Header>Resume</Header>
      <Nav>
        <a href="#objective">Objective</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#courses">Courses</a>
      </Nav> */}


      <Content>
        <h1 style={{ textAlign: "center", width: "100%" }}>ANUGRAH MISHRA</h1>
        <p style={{ textAlign: "center", width: "100%" }}>
          📞 9918959393 | ✉️ anugrahmishra15@gmail.com | 🔗{" "}
          <a href="https://www.linkedin.com/in/anugrah-mishra">LinkedIn</a> | 💻{" "}
          <a href="https://github.com/Anugrah1712">GitHub</a>
        </p>

        <SectionTitle id="objective">Objective</SectionTitle>
        <p>
          A passionate and versatile software developer with strong technical
          expertise in various domains, including software development, data
          science, and AI/ML. Seeking to leverage my skills and creativity to
          contribute to innovative projects in a dynamic and growth-oriented
          environment, while further expanding my knowledge in different fields
          like full-stack development, security, and cloud computing.
        </p>

        <SectionTitle id="education">Education</SectionTitle>
        <p>
          <strong>Symbiosis Institute of Technology, Pune</strong>
          <br />
          B.Tech in Computer Science Engineering, Specialization in AIML (2021 - 2025)
        </p>

        <SectionTitle id="experience">Experience</SectionTitle>
        <p>
          <strong>Bajaj Finserv | Bajaj Finance Limited</strong> (Feb 2025 - Present)
          <br />
          Data Science Intern, Digital Department
        </p>
        <ul>
          <li>
            Developing machine learning models to optimize financial risk assessment.
          </li>
          <li>
            Analyzing large datasets to extract meaningful insights for business
            decision-making.
          </li>
        </ul>

        <SectionTitle id="skills">Technical Skills</SectionTitle>
        {skills.map((skill, idx) => (
          <SkillBarWrapper key={idx}>
            <SkillLabel>
              <span>{skill.label}</span>
              <span>{skill.rating}/10</span>
            </SkillLabel>
            <SkillBar rating={skill.rating} />
          </SkillBarWrapper>
        ))}

        <SectionTitle id="projects">Projects</SectionTitle>
        <ul>
          <li>
            <strong>Heart Stroke Prediction</strong> – Kotlin + Firebase based mobile app for predicting heart stroke risk. {" "}
            <a href="https://github.com/Anugrah1712/Heart-Stroke-Prediction.git">GitHub</a>
          </li>
          <li>
            <strong>Electricity Billing System</strong> – Android app with REST API and Lottie animations. {" "}
            <a href="https://github.com/Anugrah1712/Electricity_Billing_System.git">GitHub</a>
          </li>
          <li>
            <strong>Skin Lesion Detection</strong> – CNN-based model using Keras, TensorFlow, OpenCV. {" "}
            <a href="https://github.com/Anugrah1712/LesionInsight-AI.git">GitHub</a>
          </li>
        </ul>

        <SectionTitle id="courses">Courses</SectionTitle>
        <ul>
          <li><strong>What is Data Science?</strong> – IBM, Coursera (2023)</li>
          <li><strong>Agile Project Management</strong> – Google, Coursera (2023)</li>
          <li><strong>Foundations of UX Design</strong> – Google, Coursera (2023)</li>
        </ul>
      </Content>
    </ResumeContainer>
  );
};

export default Resume;
