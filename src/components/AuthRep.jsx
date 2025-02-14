import React, { useContext } from "react";
import RadioButtons from "./RadioButtons";
import { RadioContext } from "../api/radio";
import { barangay } from "../arrays/barangays";
import { useSelector } from "react-redux";
import { readOnlyStyle } from "../utils/customStyling";

function AuthRep({ register, yes }) {
  const authRepDisable = useSelector((el) => el.application.disable.authRepAdd);
  const address = useSelector((el) => el.application.address);

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
        placeholder="St./Bldg/Puroks"
        {...register("authBuilding")}
        style={authRepDisable ? readOnlyStyle : null}
        value={authRepDisable ? address.building : ""}
      ></input>
      <select
        {...register("authBarangay")}
        // disabled={authRepDisable}
        value={authRepDisable ? address.barangay : ""}
        style={authRepDisable ? readOnlyStyle : null}
      >
        {barangay.map((el, i) => (
          <option key={i}>{el}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="City"
        {...register("authCity")}
        // disabled={authRepDisable}
        value={authRepDisable ? address.city : ""}
        style={authRepDisable ? readOnlyStyle : null}
      ></input>
      <span></span>
    </>
  );
}

export default AuthRep;
