import React, { useContext } from "react";
import styled from "styled-components";
import { RadioContext } from "../../api/radio";
import { useDispatch } from "react-redux";
import {
  authRepDisable,
  corpAddDisable,
  proInfoDisable,
} from "../../redux/applicationSlice";

const SameAddressDivider = styled.div`
  grid-column: 2/5;
  display: grid;
  grid-template-columns: 4fr 0.5fr 0.5fr 0.5fr 0.5fr;
  text-align: left;
  place-items: center;
  width: 40%;
  /* width: 60%; */
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

const NotApp = styled.span`
  font-size: 10px;
  color: red;
`;

function RadioButtons({ name, label }) {
  const dispatch = useDispatch();

  function handleClick(e) {
    if (e.target.name === "corpAdd") {
      dispatch(corpAddDisable(true));
    }

    if (e.target.name === "authRepAdd") {
      dispatch(authRepDisable(true));
    }

    if (e.target.name === "projInfoAdd") {
      dispatch(proInfoDisable(true));
    }
  }

  function handleEnable(e) {
    if (e.target.name === "corpAdd") {
      dispatch(corpAddDisable(false));
    }

    if (e.target.name === "authRepAdd") {
      dispatch(authRepDisable(false));
    }

    if (e.target.name === "projInfoAdd") {
      dispatch(proInfoDisable(false));
    }
  }

  return (
    <>
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
        {/* <input
        type="radio"
        name={name}
        value="yes"
        defaultChecked
        onClick={handleEnable}
      />
      <span>Not Applicable</span> */}
      </SameAddressDivider>
      <NotApp>*write n/a if not applicable</NotApp>
    </>
  );
}

export default RadioButtons;
