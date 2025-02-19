import React, { useContext, useState } from "react";
import RadioButtons from "./RadioButtons";
import { barangay } from "../../arrays/barangays";
import { RadioContext } from "../../api/radio";
import { useDispatch, useSelector } from "react-redux";
import { readOnlyStyle } from "../../utils/customStyling";
import { setLocalAddress } from "../../redux/applicationSlice";

function ProjectInformation({ register, yes }) {
  const projInfoDisable = useSelector(
    (el) => el.application.disable.proInfoAdd
  );
  const address = useSelector((el) => el.application.address);
  const localAddress = useSelector((el) => el.application.localAddress);
  const defaultProject = useSelector((el) => el.application.defaultHlurb);
  const dispatch = useDispatch();

  function handleChange(e) {
    // const locAdd = { ...localAddress, [e.target.name]: e.target.value };
    const defProject = { ...defaultProject, [e.target.name]: e.target.value };
    dispatch(setLocalAddress(defProject));
  }

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
        style={projInfoDisable ? readOnlyStyle : null}
        onChange={handleChange}
        value={projInfoDisable ? address.building : localAddress.projBuilding}
      ></input>
      <select
        {...register("projBarangay")}
        style={projInfoDisable ? readOnlyStyle : null}
        onChange={handleChange}
        value={projInfoDisable ? address.barangay : localAddress.projBarangay}
      >
        {barangay.map((el, i) => (
          <option key={i}>{el}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="City"
        {...register("projCity")}
        style={projInfoDisable ? readOnlyStyle : null}
        onChange={handleChange}
        value={projInfoDisable ? address.city : localAddress.projCity}
      ></input>
      <span></span>
    </>
  );
}

export default ProjectInformation;
