import React from "react";
import { barangay } from "../arrays/barangays";

function ApplicantAddress({ register, yes }) {
  return (
    <>
      <span className="sectionHeading">Applicant Address:</span>
      <span className="spacer"></span>
      <input
        {...register("appBuilding")}
        type="text"
        placeholder="St./Bldg/Purok"
      ></input>
      <select {...register("appBarangay")}>
        {barangay.map((el, i) => (
          <option key={i}>{el}</option>
        ))}
      </select>
      <input {...register("appCity")} type="text" placeholder="City"></input>
    </>
  );
}

export default ApplicantAddress;
