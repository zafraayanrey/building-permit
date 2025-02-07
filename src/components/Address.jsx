import React, { useContext, useState } from "react";
import { barangay } from "../arrays/barangays";
import { RadioContext } from "../api/radio";

const addressStyle = {
  backgroundColor: "#ffffff",
};

function Address() {
  const { disable } = useContext(RadioContext);

  return (
    <>
      <input
        type="text"
        style={addressStyle}
        placeholder="St./Bldg/Purok"
        disabled={disable}
      ></input>
      <select disabled={disable} style={addressStyle}>
        {barangay.map((el, i) => (
          <option key={i}>{el}</option>
        ))}
      </select>
      <input
        disabled={disable}
        type="text"
        style={addressStyle}
        placeholder="City"
      ></input>
    </>
  );
}

export default Address;
