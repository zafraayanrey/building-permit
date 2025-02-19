import React, { useContext, useRef, useState } from "react";
import RadioButtons from "./RadioButtons";
import { RadioContext } from "../../api/radio";
import { barangay } from "../../arrays/barangays";
import { useDispatch, useSelector } from "react-redux";
import { readOnlyStyle } from "../../utils/customStyling";
import { setLocalAddress } from "../../redux/applicationSlice";
import ErrorComponent from "../../reusable-components/ErrorComponent";

function CorporationAddress({
  register,
  errors,
  addressVal,
  setAddressVal,
  yes,
}) {
  const corpAddDisable = useSelector((el) => el.application.disable.corpAdd);
  const address = useSelector((el) => el.application.address);
  const localAddress = useSelector((el) => el.application.localAddress);
  const dispatch = useDispatch();

  function handleChange(e) {
    const locAdd = { ...localAddress, [e.target.name]: e.target.value };
    dispatch(setLocalAddress(locAdd));
  }

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
        style={corpAddDisable ? readOnlyStyle : null}
        onChange={handleChange}
        value={corpAddDisable ? address.building : localAddress.corpBuilding}
      />

      <select
        style={corpAddDisable ? readOnlyStyle : null}
        {...register("corpBarangay")}
        onChange={handleChange}
        value={corpAddDisable ? address.barangay : localAddress.corpBarangay}
      >
        {barangay.map((el, i) => (
          <option key={i}>{el}</option>
        ))}
      </select>
      <input
        style={corpAddDisable ? readOnlyStyle : null}
        type="text"
        placeholder="City"
        {...register("corpCity")}
        onChange={handleChange}
        value={corpAddDisable ? address.city : localAddress.corpCity}
      ></input>
      <span></span>
      {/* {errors.corpBuilding && <ErrorComponent />} */}
      {/* <span></span> */}
      {/* {errors.corpCity && <ErrorComponent />} */}
      {/* <span></span> */}
    </>
  );
}

export default CorporationAddress;
