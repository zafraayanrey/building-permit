import React, { useContext } from "react";
import RadioButtons from "./RadioButtons";
import { barangay } from "../arrays/barangays";
import { RadioContext } from "../api/radio";
import { useSelector } from "react-redux";
import { readOnlyStyle } from "../utils/customStyling";

function ProjectInformation({ register, yes }) {
  const projInfoDisable = useSelector(
    (el) => el.application.disable.proInfoAdd
  );
  const address = useSelector((el) => el.application.address);

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
        value={projInfoDisable ? address.building : ""}
      ></input>
      <select
        {...register("projBarangay")}
        style={projInfoDisable ? readOnlyStyle : null}
        value={projInfoDisable ? address.barangay : ""}
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
        value={projInfoDisable ? address.city : ""}
      ></input>
      <span></span>
    </>
  );
}

export default ProjectInformation;
