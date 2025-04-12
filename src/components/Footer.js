import React from "react";
import styled from "styled-components";


const FooterContainer = styled.footer`
  text-align: center;
  background: linear-gradient(to right,rgb(255, 255, 255), #a1c4fd);
  padding: 20px;
  font-size: 18px;
  color: gray;
  
`;

const Footer = () => {
  return (
    <FooterContainer>
      © 2025 Anugrah | All Rights Reserved
    </FooterContainer>
  );
};

export default Footer;
