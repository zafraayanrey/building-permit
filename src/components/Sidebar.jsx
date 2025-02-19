import React from "react";
import "../index.css";
import styled from "styled-components";
import cpdclogo from "../assets/cpdclogo.jpg";
import talisaylogo from "../assets/talisaylogo.png";
import Navigation, {
  Icon,
  MenuWrapper,
  NavItem,
  NavLink,
} from "./building-permit/Navigation";
import { navigation } from "../arrays/nav";

const SidebarWrapper = styled.div`
  display: grid;
  grid-template-rows: 2fr 10fr;
  width: 303px;
  height: 100dvh;
  background-color: var(--sidebar);
`;

const Sblogo = styled.div`
  grid-template-rows: 1fr 1fr;
  place-self: center;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;

  img {
    width: 105px;
    border-radius: 50%;
    padding-bottom: 10px;
  }

  h1 {
    font-size: 32px;
    font-weight: bold;
    color: var(--text);
  }

  p {
    font-size: 12px;
  }
`;

const Sbsettings = styled.div`
  padding: 10px;
`;

function Sidebar() {
  return (
    <SidebarWrapper>
      <Sblogo>
        <>
          <img src={cpdclogo} />
          <img src={talisaylogo} />
        </>
        <>
          <h1>PermitFlow</h1>
          <p>Developed by: ZafTech</p>
        </>
      </Sblogo>
      <Navigation />
    </SidebarWrapper>
  );
}

export default Sidebar;
