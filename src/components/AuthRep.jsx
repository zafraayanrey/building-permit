import React, { useContext } from "react";
import RadioButtons from "./RadioButtons";
import { RadioContext } from "../api/radio";
import { barangay } from "../arrays/barangays";

function AuthRep({ register, yes }) {
  return (
    <>
      <span className="sectionHeading RadioButtonsComponent authAdjust">
        Authorized Representative:
        <RadioButtons name="authRepAdd" label="Same as applicant address?" />
      </span>
      <input
        type="text"
        placeholder="First Name"
        {...register("authFname")}
      ></input>
      <input
        type="text"
        placeholder="Middle Name"
        {...register("authMname")}
      ></input>
      <input
        type="text"
        placeholder="Last Name"
        {...register("authLname")}
      ></input>
      <span></span>

      <input
        type="text"
        placeholder="St./Bldg/Purok"
        {...register("authBuilding")}
      ></input>
      <select {...register("authBarangay")}>
        {barangay.map((el, i) => (
          <option key={i}>{el}</option>
        ))}
      </select>
      <input type="text" placeholder="City" {...register("authCity")}></input>
      <span></span>
    </>
  );
}

export default AuthRep;
