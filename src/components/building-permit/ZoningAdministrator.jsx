import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDefaultProject,
  setZoningRadio,
} from "../../redux/applicationSlice";
import { date, readOnlyStyle } from "../../utils/customStyling";
// import { date } from "../utils/customStyling";

function ZoningAdministrator({ register, focus }) {
  const zoningRadioVal = useSelector((el) => el.application.zoningRadio);
  const defaultProject = useSelector((el) => el.application.defaultProject);
  const dispatch = useDispatch();

  function handleChange(e) {
    const defProj = { ...defaultProject, [e.target.name]: e.target.value };
    dispatch(setDefaultProject(defProj));
  }

  return (
    <>
      <span className="radios">
        <input
          type="radio"
          name="zoningAdmin"
          value="Yes"
          onClick={() => dispatch(setZoningRadio(false))}
        ></input>
        <span>Yes</span>
        <input
          type="radio"
          name="zoningAdmin"
          value="No"
          defaultChecked="checked"
          onClick={() => dispatch(setZoningRadio(true))}
        ></input>
        <span>No</span>
      </span>
      <span className="longText">{`Is the project applied for the subject of written notice(s) from this
          board and/or its deputized zoning administrator to the effect
          requiring for presentation of locational clearance / certificate of
          zoning compliance (LZ/CZC)`}</span>
      <span className="yes">If yes, Please answer the following</span>
      <input
        type="date"
        style={zoningRadioVal === true ? readOnlyStyle : focus}
        {...register("zonDate")}
        onChange={handleChange}
        value={zoningRadioVal ? date : defaultProject.zonDate}
      ></input>
      <input
        type="text"
        placeholder="Zoning Administrator who issued the Notices"
        style={zoningRadioVal === true ? readOnlyStyle : focus}
        {...register("zonAdmin")}
        onChange={handleChange}
        value={zoningRadioVal ? "N/A" : defaultProject.zonAdmin}
      ></input>
      <input
        type="text"
        placeholder="Order Requests indicated in the Notice(s)"
        style={zoningRadioVal === true ? readOnlyStyle : focus}
        {...register("zonRequest")}
        onChange={handleChange}
        value={zoningRadioVal ? "N/A" : defaultProject.zonRequest}
      ></input>
    </>
  );
}

export default ZoningAdministrator;
