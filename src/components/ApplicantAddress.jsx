import React from "react";
import { barangay } from "../arrays/barangays";
import { useDispatch, useSelector } from "react-redux";
import { updateAddress } from "../redux/applicationSlice";

function ApplicantAddress({ register, yes }) {
  const addressVar = useSelector((el) => el.application.address);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name: names, value: value } = e.target;
    const zaf = { ...addressVar, [names]: e.target.value };
    dispatch(updateAddress(zaf));
  }

  return (
    <>
      <span className="sectionHeading">Applicant Address:</span>
      <span className="spacer"></span>
      <input
        // name="building"
        {...register("building")}
        type="text"
        placeholder="St./Bldg/Purok"
        onChange={handleChange}
      ></input>
      <select
        // name="barangay"
        {...register("barangay")}
        onChange={handleChange}
      >
        {barangay.map((el, i) => (
          <option key={i}>{el}</option>
        ))}
      </select>
      <input
        // name="city"
        {...register("city")}
        type="text"
        placeholder="City"
        onChange={handleChange}
      ></input>
    </>
  );
}

export default ApplicantAddress;
