import React from "react";
import styled from "styled-components";

const BtnSubmit = styled.button`
  width: 250px;
  margin: auto;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  background-color: #fff985;
  border-radius: 10px;
  color: #00928b;
  border: none;
  grid-column: 1/5;
  margin-top: 10px;

  &:hover {
    background-color: #fff866;
    border: solid 1px #e2dd6c;
    color: #16b57c;
    cursor: pointer;
  }
`;

function SubmitButton({ children }) {
  return <BtnSubmit>{children}</BtnSubmit>;
}

export default SubmitButton;
