import React, { useContext, useState } from "react";
import RadioButtons from "./RadioButtons";
import { RadioContext } from "../api/radio";
import { barangay } from "../arrays/barangays";
import { useSelector } from "react-redux";
import { readOnlyStyle } from "../utils/customStyling";

function CorporationAddress({ register, addressVal, setAddressVal, yes }) {
  const corpAddDisable = useSelector((el) => el.application.disable.corpAdd);
  const address = useSelector((el) => el.application.address);
  const [finalAddress, setFinalAddress] = useState({
    building: "",
    city: "",
    barangay: "",
  });

  const localAddress = {
    corpBuilding: "",
    corpBarangay: "",
    corpCity: "",
  };

  function handleChange(e) {
    setFinalAddress({ ...localAddress, [e.target.name]: e.target.value });
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
        value={
          corpAddDisable ? address.building || "" : finalAddress.building || ""
        }
      />
      <select
        style={corpAddDisable ? readOnlyStyle : null}
        {...register("corpBarangay")}
        onChange={handleChange}
        value={corpAddDisable ? address.barangay : finalAddress.barangay}
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
        value={corpAddDisable ? address.city : finalAddress.city}
      ></input>
      <span></span>
    </>
  );
}

export default CorporationAddress;
