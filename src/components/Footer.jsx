import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: 50%;
  place-self: center;
  background-color: #88d359;
  align-content: center;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      Copyright 2025 - City Planning and Development Coordinator
    </FooterContainer>
  );
}

export default Footer;
