import React from "react";
import styled from "styled-components";


const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  font-size: 14px;
  color: gray;
  margin-top: 50px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      © 2025 Anugrah | All Rights Reserved
    </FooterContainer>
  );
};

export default Footer;
