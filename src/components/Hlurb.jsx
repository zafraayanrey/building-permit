import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Hlurb({ register, focus }) {
  const [hlurbRadio, setHlurbRadio] = useState(true);

  return (
    <>
      <span className="radios">
        <input
          type="radio"
          name="hlurb"
          value="Yes"
          onClick={() => setHlurbRadio(false)}
        ></input>
        <span>Yes</span>
        <input
          type="radio"
          name="hlurb"
          value="No"
          defaultChecked="checked"
          onClick={() => setHlurbRadio(true)}
        ></input>
        <span>No</span>
      </span>
      <span className="longText">{`Is the project applied for the subject of similar application(s) with
          other offices of the board and / or deputized zoning administrator?`}</span>
      <span className="yes">If yes, Please answer the following</span>
      <input
        type="date"
        disabled={hlurbRadio}
        style={hlurbRadio === true ? {} : focus}
        {...register("hlurbDate")}
      ></input>
      <input
        type="text"
        placeholder="Other HLURB office(s) where similar application(s) was/were filed"
        disabled={hlurbRadio}
        style={hlurbRadio === true ? {} : focus}
        {...register("hlurb")}
      ></input>
      <input
        type="text"
        placeholder="Actions taken by office(s) mentioned in 16a"
        disabled={hlurbRadio}
        style={hlurbRadio === true ? {} : focus}
        {...register("hlurbActions")}
      ></input>
      <input
        type="text"
        placeholder="Mode of Release Decision"
        disabled={hlurbRadio}
        style={hlurbRadio === true ? {} : focus}
        {...register("hlurbMode")}
        title="This is the text of the tooltip"
      ></input>
    </>
  );
}

export default Hlurb;
