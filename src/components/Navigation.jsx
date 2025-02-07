import React from "react";
import styled from "styled-components";
import { navigation } from "../arrays/nav";

export const MenuWrapper = styled.div`
  grid-template-rows: 7fr 3fr;
  padding: 10px;
  color: #00928b;
  font-weight: bold;
  font-size: 18px;
`;

export const NavItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  width: 100%;
  height: 10%;
  background-color: #fff985;
  border: solid 1px #e2dd6c;

  &:hover {
    background-color: #fff866;
    border: solid 1px #e2dd6c;
    color: #16b57c;
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  height: 100%;
  width: 100%;
  place-content: center;
  text-align: right;
  padding-right: 5px;
`;

export const NavLink = styled.div`
  height: 100%;
  width: 100%;
  place-content: center;
  text-align: left;
`;

const SettingsContainer = styled.div`
  height: 60%;
  place-content: end;
`;

const SettingItems = styled(NavItem)`
  height: 16%;
`;

function Navigation() {
  return (
    <MenuWrapper>
      {navigation.map(
        (el, i) =>
          i < 4 && (
            <NavItem key={i}>
              <Icon>{el.icons}</Icon>
              <NavLink>{el.title}</NavLink>
            </NavItem>
          )
      )}
      <SettingsContainer>
        {navigation.map(
          (el, i) =>
            i > 3 && (
              <SettingItems key={i}>
                <Icon>{el.icons}</Icon>
                <NavLink>{el.title}</NavLink>
              </SettingItems>
            )
        )}
      </SettingsContainer>
    </MenuWrapper>
  );
}

export default Navigation;
