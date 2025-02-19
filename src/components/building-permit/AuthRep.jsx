import React, { useContext, useState } from "react";
import RadioButtons from "./RadioButtons";
import { RadioContext } from "../../api/radio";
import { barangay } from "../../arrays/barangays";
import { useDispatch, useSelector } from "react-redux";
import { readOnlyStyle } from "../../utils/customStyling";
import { setLocalAddress } from "../../redux/applicationSlice";

function AuthRep({ register, yes }) {
  const authRepDisable = useSelector((el) => el.application.disable.authRepAdd);
  const address = useSelector((el) => el.application.address);
  const localAddress = useSelector((el) => el.application.localAddress);
  const dispatch = useDispatch();

  function handleChange(e) {
    const locAdd = { ...localAddress, [e.target.name]: e.target.value };
    dispatch(setLocalAddress(locAdd));
  }

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
        onChange={handleChange}
        value={authRepDisable ? address.building : localAddress.authBuilding}
      ></input>
      <select
        {...register("authBarangay")}
        // disabled={authRepDisable}
        onChange={handleChange}
        value={authRepDisable ? address.barangay : localAddress.authBarangay}
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
        onChange={handleChange}
        value={authRepDisable ? address.city : localAddress.authCity}
        style={authRepDisable ? readOnlyStyle : null}
      ></input>
      <span></span>
    </>
  );
}

export default AuthRep;
