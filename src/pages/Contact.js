import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

// Styled Components
const ContactContainer = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 100vh;
  padding: 40px;
  background: linear-gradient(to right, rgb(255, 255, 255), #a1c4fd);
  font-family: 'Segoe UI', sans-serif;
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
  }
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const SubHeading = styled.p`
  font-size: 16px;
  color: #444;
  margin-bottom: 30px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 16px;
  color: #222;

  @media (max-width: 768px) {
    font-size: 14px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Icon = styled.div`
  font-size: 22px;
  margin-right: 15px;
  color: #007bff;

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

const Label = styled.span`
  font-weight: 600;
  margin-right: 8px;
`;

const Socials = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 25px;

  @media (max-width: 768px) {
    gap: 15px;
    justify-content: start;
    flex-wrap: wrap;
  }
`;

const SocialIcon = styled.a`
  font-size: 22px;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Callout = styled.div`
  background-color: #fff9c4;
  color: #333;
  padding: 15px 20px;
  border-left: 5px solid #ffc107;
  border-radius: 8px;
  margin: 30px 0;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 14px;
  }
`;

const MapEmbed = styled.iframe`
  margin-top: 30px;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 250px;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Sidebar />

      <RightColumn>
        <SectionTitle>Let's Collaborate</SectionTitle>
        <SubHeading>
          I'm actively seeking exciting full-time opportunities where I can contribute meaningfully, grow alongside a passionate team, and help build innovative solutions. Let's connect and explore how we can collaborate!
        </SubHeading>

        <InfoItem>
          <Icon><FaPhoneAlt /></Icon>
          <div><Label>Phone:</Label> +91 9918959393</div>
        </InfoItem>

        <InfoItem>
          <Icon><FaEnvelope /></Icon>
          <div><Label>Email:</Label> anugrahmishra15@gmail.com</div>
        </InfoItem>

        <InfoItem>
          <Icon><FaMapMarkerAlt /></Icon>
          <div><Label>Location:</Label> Pune, Maharashtra, India</div>
        </InfoItem>

        <Callout>
          I'm open to opportunities in software development, machine learning, and data engineering. If your team is hiring, I’d love to connect!
        </Callout>

        <Socials>
          <SocialIcon href="https://linkedin.com/in/anugrah-mishra-564270232" target="_blank"><FaLinkedin /></SocialIcon>
          <SocialIcon href="https://github.com/anugrah1712" target="_blank"><FaGithub /></SocialIcon>
          <SocialIcon href="https://instagram.com/i_anugrah1714" target="_blank"><FaInstagram /></SocialIcon>
        </Socials>

        <MapEmbed
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.792329017734!2d73.85674391418616!3d18.520430987404327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c08e8dfd5c89%3A0xa4fc69b7389ff8b4!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1670000000000"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></MapEmbed>
      </RightColumn>
    </ContactContainer>
  );
};

export default Contact;
