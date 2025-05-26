import React, { useEffect, useState, useMemo } from 'react'; 

import styled from 'styled-components';
import Sidebar from "../components/Sidebar"; 
import { FaReact, FaNode, FaPython, FaDatabase, FaAws, FaLaptopCode, FaTrophy } from 'react-icons/fa';
import { SiMongodb, SiKubernetes, SiFirebase, SiTensorflow } from 'react-icons/si';
import { GiAchievement } from 'react-icons/gi';
import CountUp from 'react-countup';

// Styled Components
const StatsContainer = styled.div`
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


const RightColumn = styled.div`
  flex: 2;
  background: white;
  backdrop-filter: blur(12px);
  padding: 60px 80px;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  margin-left: 50px;
  animation: fadeIn 0.6s ease-in-out;

  @media (max-width: 768px) {
    padding: 30px 20px;
    margin-left: 0;
    margin-top: 20px;
    border-radius: 12px;
  }
`;


const SectionTitle = styled.h3`
  font-size: 28px;
  margin-bottom: 20px;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;

  @media (max-width: 500px) {
    font-size: 22px;
  }
`;
const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #f1f1f1;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`;

const Label = styled.span`
  font-weight: 500;
  color: #555;
  display: flex;
  align-items: center;
`;

const Value = styled.span`
  color: #111;
`;

// Skill Bars
const SkillBar = styled.div`
  margin: 10px 0;
`;

const SkillLabel = styled.div`
  font-weight: 500;
  margin-bottom: 5px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background: #ddd;
  border-radius: 5px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background: #007bff;
  width: ${props => props.level || 0}%;
`;

// Icon Grid
const IconGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  font-size: 30px;
  color: #333;

  @media (max-width: 500px) {
    gap: 12px;
    font-size: 26px;
    justify-content: center;
  }
`;

// Fun Fact Box
const FunFact = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #fefefe;
  border-left: 4px solid #007bff;
  font-style: italic;
  color: #555;

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 15px;
  }
`;

const Stats = () => {
  const [age, setAge] = useState(0);
  const [quote, setQuote] = useState("");

  const birthDate = useMemo(() => new Date('2002-12-17T21:55:00'), []);
  
  const quotes = useMemo(() => [
    "Code is like humor. When you have to explain it, it’s bad.",
    "Experience is the name everyone gives to their mistakes.",
    "First, solve the problem. Then, write the code.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Simplicity is the soul of efficiency."
  ], []);

  useEffect(() => {
    const updateAge = () => {
      const now = new Date();
      const ageInMilliseconds = now - birthDate;
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
      setAge(ageInYears);
    };

    const interval = setInterval(updateAge, 10);
    return () => clearInterval(interval);
  }, [birthDate]);

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, [quotes]);

  return (
    <StatsContainer>
      <Sidebar />

      <RightColumn>
        <SectionTitle>STATS</SectionTitle>
        <StatRow>
          <Label>Current Age</Label>
          <Value>{age.toFixed(9)}</Value>
        </StatRow>
        <StatRow>
          <Label>Countries Visited</Label>
          <Value>3</Value>
        </StatRow>
        <StatRow>
          <Label>Projects Completed</Label>
          <Value>6</Value>
        </StatRow>
        <StatRow>
          <Label>Lines of Code</Label>
          <Value><CountUp end={38000} duration={2} separator="," />+</Value>
        </StatRow>
        <StatRow>
          <Label>Favorite Stack</Label>
          <Value>MERN</Value>
        </StatRow>

        {/* Skills Section */}
        <SectionTitle>Skills</SectionTitle>
        <SkillBar>
          <SkillLabel>React</SkillLabel>
          <ProgressBar><Progress level={85} /></ProgressBar>
        </SkillBar>
        <SkillBar>
          <SkillLabel>Node.js</SkillLabel>
          <ProgressBar><Progress level={80} /></ProgressBar>
        </SkillBar>
        <SkillBar>
          <SkillLabel>Python</SkillLabel>
          <ProgressBar><Progress level={90} /></ProgressBar>
        </SkillBar>
        <SkillBar>
          <SkillLabel>MongoDB</SkillLabel>
          <ProgressBar><Progress level={75} /></ProgressBar>
        </SkillBar>

        {/* Tools and Technologies */}
        <SectionTitle>Tools & Technologies</SectionTitle>
        <IconGrid>
          <FaReact title="React" />
          <FaNode title="Node.js" />
          <FaPython title="Python" />
          <SiMongodb title="MongoDB" />
          <FaDatabase title="SQL" />
          <FaAws title="AWS" />
          <SiFirebase title="Firebase" />
          <SiKubernetes title="Kubernetes" />
          <SiTensorflow title="TensorFlow" />
        </IconGrid>

        {/* Dev Quote */}
        <SectionTitle>Dev Quote of the Day</SectionTitle>
        <FunFact>{quote}</FunFact>

        {/* Achievements */}
        <SectionTitle>Achievements</SectionTitle>
        
        <StatRow>
          <Label>Certifications Earned</Label>
          <Value>7</Value>
        </StatRow>
        <StatRow>
          <Label>Hackathons Participated</Label>
          <Value>4</Value>
        </StatRow>

        {/* Daily Coding Tracker */}
        <SectionTitle>Daily Coding Hours</SectionTitle>
        <StatRow>
          <Label>Today’s Coding Time</Label>
          <Value>8 hours</Value>
        </StatRow>

        {/* Milestones */}
        <SectionTitle>Milestones</SectionTitle>
        <StatRow>
          <Label><FaLaptopCode style={{ marginRight: '8px' }} /> First Android App</Label>
          <Value>2022</Value>
        </StatRow>
        <StatRow>
          <Label><FaTrophy style={{ marginRight: '8px' }} /> AI Skin Detection Launch</Label>
          <Value>2024</Value>
        </StatRow>
        <StatRow>
          <Label><GiAchievement style={{ marginRight: '8px' }} /> First Open Source Contribution</Label>
          <Value>2023</Value>
        </StatRow>

        {/* Experience Section */}
        <SectionTitle>Experience</SectionTitle>
        <StatRow>
          <Label>Internships</Label>
          <Value>2</Value>
        </StatRow>
        <StatRow>
          <Label>Freelance Projects</Label>
          <Value>5</Value>
        </StatRow>
        <StatRow>
          <Label>GitHub Repos</Label>
          <Value><CountUp end={15} duration={1.5} /></Value>
        </StatRow>
      </RightColumn>
    </StatsContainer>
  );
};

export default Stats;
