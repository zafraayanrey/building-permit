import React, { useContext } from "react";
import RadioButtons from "./RadioButtons";
import { RadioContext } from "../api/radio";
import { barangay } from "../arrays/barangays";

function CorporationAddress({ register, addressVal, setAddressVal, yes }) {
  return (
    <>
      <span className="sectionHeading RadioButtonsComponent sameAddAdjust">
        Corporation Address:
        <RadioButtons name="corpAdd" label="Same as applicant address?" />
      </span>
      <input
        {...register("corpBuilding")}
        type="text"
        placeholder="St./Bldg/Purok"
      />
      <select {...register("corpBarangay")}>
        {barangay.map((el, i) => (
          <option key={i}>{el}</option>
        ))}
      </select>
      <input type="text" placeholder="City" {...register("corpCity")}></input>
      <span></span>
    </>
  );
}

export default CorporationAddress;
