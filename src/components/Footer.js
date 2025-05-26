import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  background: linear-gradient(to right, rgb(255, 255, 255), #a1c4fd);
  padding: 20px 40px;
  font-size: 18px;
  color: gray;

  @media (max-width: 768px) {
    padding: 15px 20px;
    font-size: 14px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
    padding: 10px 15px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      © 2025 Anugrah | All Rights Reserved
    </FooterContainer>
  );
};

export default Footer;
