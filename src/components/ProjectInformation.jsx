import React, { useContext } from "react";
import RadioButtons from "./RadioButtons";
import { barangay } from "../arrays/barangays";
import { RadioContext } from "../api/radio";

function ProjectInformation({ register, yes }) {
  return (
    <>
      <span className="sectionHeading RadioButtonsComponent sameAddAdjust">
        Project Information:
        <RadioButtons name="projInfoAdd" label="Same as applicant address?" />
      </span>
      <input
        type="text"
        placeholder="Project Type"
        {...register("projType")}
      ></input>
      <input
        type="text"
        placeholder="Project Nature"
        {...register("projNature")}
      ></input>
      <input
        type="number"
        placeholder="Project Area in sqm"
        {...register("projArea")}
      ></input>
      <span></span>
      <input
        type="text"
        placeholder="St./Bldg/Purok"
        {...register("projBuilding")}
      ></input>
      <select {...register("projBarangay")}>
        {barangay.map((el, i) => (
          <option key={i}>{el}</option>
        ))}
      </select>
      <input type="text" placeholder="City" {...register("projCity")}></input>
      <span></span>
    </>
  );
}

export default ProjectInformation;
