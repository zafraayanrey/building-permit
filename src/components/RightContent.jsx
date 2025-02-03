import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styled from "styled-components";

const RightContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 10fr 1fr;
  padding: 10px;
`;

function RightContent() {
  return (
    <RightContentWrapper>
      <Header />
      <Main />
      <Footer />
    </RightContentWrapper>
  );
}

export default RightContent;
