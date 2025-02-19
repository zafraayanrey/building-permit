import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  place-self: center;
  color: #00928b;
`;

function Header() {
  return (
    <HeaderContainer>
      <h1>Service Is For Leadership NOT For Power</h1>
    </HeaderContainer>
  );
}

export default Header;
