import React, { useState } from "react";

function ZoningAdministrator({ register, focus }) {
  const [zoningRadio, setZoningRadio] = useState(true);
  return (
    <>
      <span className="radios">
        <input
          type="radio"
          name="zoningAdmin"
          value="Yes"
          onClick={() => setZoningRadio(false)}
        ></input>
        <span>Yes</span>
        <input
          type="radio"
          name="zoningAdmin"
          value="No"
          defaultChecked="checked"
          onClick={() => setZoningRadio(true)}
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
        disabled={zoningRadio}
        style={zoningRadio === true ? {} : focus}
        {...register("zonDate")}
      ></input>
      <input
        type="text"
        placeholder="Zoning Administrator who issued the Notices"
        disabled={zoningRadio}
        style={zoningRadio === true ? {} : focus}
        {...register("zonAdmin")}
      ></input>
      <input
        type="text"
        placeholder="Order Requests indicated in the Notice(s)"
        disabled={zoningRadio}
        style={zoningRadio === true ? {} : focus}
        {...register("zonRequest")}
      ></input>
    </>
  );
}

export default ZoningAdministrator;
