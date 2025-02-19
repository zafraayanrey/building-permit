import React from "react";
import Header from "./building-permit/Header";
import Footer from "./building-permit/Footer";
import styled from "styled-components";
import BuildingPermit from "./building-permit/BuildingPermit";

const RightContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 10fr 1fr;
  padding: 10px;
`;

function RightContent() {
  return (
    <RightContentWrapper>
      <Header />
      <BuildingPermit />
      <Footer />
    </RightContentWrapper>
  );
}

export default RightContent;
