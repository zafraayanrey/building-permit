import React, { useContext } from "react";
import styled from "styled-components";
import { RadioContext } from "../api/radio";

const SameAddressDivider = styled.div`
  grid-column: 2/5;
  display: grid;
  grid-template-columns: 4fr 0.5fr 0.5fr 0.5fr 0.5fr;
  text-align: left;
  place-items: center;
  width: 40%;
  gap: 5px;
  font-size: 9px;
  padding: 3px;
  border: solid 1px gray;
  background-color: #fffcf5;
  border-radius: 10px;
  height: 30px;
  font-style: italic;

  input {
    width: 15px !important;
    height: 15px !important;
  }
`;

function RadioButtons({ name, label }) {
  const { setCorpAdd, setAuthRepAdd, setProInfoAdd } = useContext(RadioContext);

  function handleClick(e) {
    if (e.target.name === "corpAdd") {
      setCorpAdd(true);
    }

    if (e.target.name === "authRepAdd") {
      setAuthRepAdd(true);
    }

    if (e.target.name === "projInfoAdd") {
      setProInfoAdd(true);
    }
  }

  function handleEnable(e) {
    if (e.target.name === "corpAdd") {
      setCorpAdd(false);
    }

    if (e.target.name === "authRepAdd") {
      setAuthRepAdd(false);
    }

    if (e.target.name === "projInfoAdd") {
      setProInfoAdd(false);
    }
  }

  return (
    <SameAddressDivider>
      <span>{label}</span>
      <input type="radio" name={name} value="yes" onClick={handleClick} />
      <span>Yes</span>
      <input
        type="radio"
        name={name}
        value="no"
        defaultChecked
        onClick={handleEnable}
      />
      <span>No</span>
    </SameAddressDivider>
  );
}

export default RadioButtons;
