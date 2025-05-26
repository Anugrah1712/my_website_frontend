// pages/About.js
import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const AboutContainer = styled.div`
  display: flex;
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
  width: 65%;
  padding: 40px;
  font-size: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  margin-left: 50px;
  font-family: 'Segoe UI', sans-serif;

  @media (max-width: 1024px) {
    width: 80%;
    margin-left: 30px;
    padding: 30px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 20px;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 15px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #1e1e1e;
  margin-bottom: 20px;
  border-bottom: 3px solid #4a90e2;
  padding-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const SubTitle = styled.h3`
  font-size: 24px;
  color: #333;
  margin-top: 30px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 25px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: #444;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const BulletList = styled.ul`
  list-style: square;
  margin-left: 25px;
  margin-bottom: 20px;
  color: #444;

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

const ListItem = styled.li`
  margin-bottom: 8px;
`;

const Quote = styled.blockquote`
  margin-top: 30px;
  font-style: italic;
  color: #555;
  border-left: 5px solid #4a90e2;
  padding-left: 15px;

  @media (max-width: 480px) {
    font-size: 14px;
    padding-left: 10px;
  }
`;

function About() {
  return (
    <AboutContainer>
      <Sidebar />
      <Content>
        <Title>About Me</Title>
        <Paragraph>
          Hey, I’m <strong>"Anugrah Mishra"</strong> — an AI/ML enthusiast, builder, and curious human who finds joy in creating meaningful tech experiences that can make lives better. Currently pursuing my B.Tech in Computer Science Engineering with a specialization in AI & ML at Symbiosis Institute of Technology, Pune (2021–2025).
        </Paragraph>
        <Paragraph>
          I'm deeply passionate about bridging the gap between research and real-world application—whether it's detecting skin diseases using deep learning, predicting plant health from images, or exploring the endless possibilities of cloud architecture. 
        </Paragraph>
        <Paragraph>
          I've worked with technologies ranging from TensorFlow, PyTorch, and Keras, to Apache Spark, Hive, Snowflake, and Firebase. My projects often combine data science, cloud computing, and full-stack development to solve practical problems in health tech, fintech, and sustainability.
        </Paragraph>
        <Paragraph>
          Outside of projects, I enjoy digging deep into problem-solving interviews, mentoring juniors, and building clean, aesthetic UIs for my applications. I’m currently building <strong>LesionInsight AI</strong>, a web platform for skin disease detection using CNNs—one of many steps toward making intelligent healthcare accessible.
        </Paragraph>

        <SubTitle>Some History</SubTitle>
        <BulletList>
          <ListItem>At 5, I used my dad’s old Nokia to play Snake and got curious how tiny dots on a screen could be so fun.</ListItem>
          <ListItem>At 10, I started opening gadgets just to see what made them tick—sometimes they didn’t go back together.</ListItem>
          <ListItem>By 13, I was learning HTML/CSS to make small tweaks on blog themes and Android custom ROM pages.</ListItem>
          <ListItem>At 15, I built my first full-fledged Android app for school announcements. It crashed a lot—but it worked.</ListItem>
          <ListItem>At 17, I topped my school’s computer science project fair with a Java-based electricity billing system.</ListItem>
          <ListItem>In college, I began exploring ML, UI design, and cloud tools. Then came Kotlin, Firebase, CNNs, and more.</ListItem>
          <ListItem>By 20, I led the development of a CNN-based deep learning pipeline for skin lesion detection and deployed it.</ListItem>
          <ListItem>I built a data lake architecture using AWS S3 and ran comparisons between lakes and warehouses end-to-end.</ListItem>
        </BulletList>

        <SubTitle>Projects I'm Proud Of</SubTitle>
        <BulletList>
          <ListItem><strong>LesionInsight AI:</strong> Web-based AI tool to detect skin diseases using deep learning.</ListItem>
          <ListItem><strong>Heart Stroke Prediction App:</strong> Android app using real-time Firebase integration and Kotlin.</ListItem>
          <ListItem><strong>Electricity Billing System:</strong> Java-based desktop system for automating bill generation.</ListItem>
          <ListItem><strong>Plant Disease Predictor:</strong> Comparison of CNN vs DNN models for plant health detection using image data.</ListItem>
        </BulletList>

        <SubTitle>Tools, Tech & Toys I Love</SubTitle>
        <BulletList>
          <ListItem><strong>Languages:</strong> Python, Java, Kotlin, SQL, C++</ListItem>
          <ListItem><strong>Frameworks:</strong> TensorFlow, PyTorch, OpenCV, Scikit-Learn</ListItem>
          <ListItem><strong>Cloud & Big Data:</strong> Spark, Hive, Databricks, AWS S3, Snowflake</ListItem>
          <ListItem><strong>Web:</strong> HTML/CSS, JavaScript, Flask</ListItem>
          <ListItem><strong>Dev Tools:</strong> VS Code, Git/GitHub, Android Studio</ListItem>
          <ListItem><strong>Design:</strong> Figma, Canva, and a clean UI with purpose</ListItem>
        </BulletList>

        <SubTitle>I Like</SubTitle>
        <BulletList>
          <ListItem>Building things that work beautifully and help people</ListItem>
          <ListItem>Exploring AI—from GANs to NLP transformers</ListItem>
          <ListItem>Fixing bugs at 2 AM and the joy of that green checkmark</ListItem>
          <ListItem>Open-source collaboration and contribution</ListItem>
          <ListItem>Podcasts like Lex Fridman, The AI Alignment Podcast, and Planet Money</ListItem>
          <ListItem>Reading: Yuval Noah Harari, Cal Newport, and the occasional sci-fi thrillers</ListItem>
          <ListItem>Sketching UI ideas in notebooks with colored pens</ListItem>
          <ListItem>Nature walks and stargazing as creative reset rituals</ListItem>
        </BulletList>

        <SubTitle>Fun Facts</SubTitle>
        <BulletList>
          <ListItem>I once built a skin disease model with over 90% test accuracy and designed the UI myself.</ListItem>
          <ListItem>I collect quirky startup names for fun. One day I’ll name mine after a mathematical function.</ListItem>
          <ListItem>I believe design should be minimal yet powerful—dark themes, soft corners, clean typography.</ListItem>
          <ListItem>I keep a sketchpad filled with random app ideas, UI layouts, and product doodles.</ListItem>
          <ListItem>I low-key judge websites by their navbars and loading animations.</ListItem>
          <ListItem>I write commit messages that sometimes read like tweets.</ListItem>
          <ListItem>I’ve binge-watched crash courses in mathematics just for the dopamine hit of understanding something new.</ListItem>
        </BulletList>

        <SubTitle>I Dream Of</SubTitle>
        <BulletList>
          <ListItem>Creating products that genuinely help people—especially in healthcare, education, and the environment.</ListItem>
          <ListItem>Leading a startup that’s both ethical and scalable.</ListItem>
          <ListItem>Working with teams who are curious, kind, and driven by impact.</ListItem>
          <ListItem>Always staying a student of life, embracing failure and growth.</ListItem>
          <ListItem>Giving back—whether by mentoring, teaching, or building open tools.</ListItem>
        </BulletList>

        <SubTitle>Let’s Connect</SubTitle>
        <Paragraph>
          If you’re building something exciting in AI, healthcare, or edtech—or just have a crazy idea and want a techie co-conspirator—I’d love to talk.
        </Paragraph>
        <Paragraph>You can find me on <strong>GitHub</strong>, <strong>LinkedIn</strong>, or drop me an email.</Paragraph>

        <Quote>
          “The best way to predict the future is to build it.” – Alan Kay
        </Quote>
      </Content>
    </AboutContainer>
  );
}

export default About;
