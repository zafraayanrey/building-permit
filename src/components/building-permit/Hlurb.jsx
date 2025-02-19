import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setDefaultHlurb, setHlurbRadio } from "../../redux/applicationSlice";
import { date, readOnlyStyle } from "../../utils/customStyling";

function Hlurb({ register, focus }) {
  // const [hlurbRadio, setHlurbRadio] = useState(true);
  const hlurbRadioVal = useSelector((el) => el.application.hlurbRadio);
  const defaultHlurb = useSelector((el) => el.application.defaultHlurb);
  const dispatch = useDispatch();

  function handleChange(e) {
    const defHlurb = { ...defaultHlurb, [e.target.name]: e.target.value };
    dispatch(setDefaultHlurb(defHlurb));
  }

  return (
    <>
      <span className="radios">
        <input
          type="radio"
          name="hlurb"
          value="Yes"
          onClick={() => dispatch(setHlurbRadio(false))}
        ></input>
        <span>Yes</span>
        <input
          type="radio"
          name="hlurb"
          value="No"
          defaultChecked="checked"
          onClick={() => dispatch(setHlurbRadio(true))}
        ></input>
        <span>No</span>
      </span>
      <span className="longText">{`Is the project applied for the subject of similar application(s) with
          other offices of the board and / or deputized zoning administrator?`}</span>
      <span className="yes">If yes, Please answer the following</span>
      <input
        type="date"
        // disabled={hlurbRadioVal}
        style={hlurbRadioVal ? readOnlyStyle : focus}
        {...register("hlurbDate")}
        onChange={handleChange}
        value={hlurbRadioVal ? date : defaultHlurb.hlurbDate}
      ></input>
      <input
        type="text"
        placeholder="Other HLURB office(s) where similar application(s) was/were filed"
        // disabled={hlurbRadioVal}
        style={hlurbRadioVal ? readOnlyStyle : focus}
        {...register("hlurb")}
        onChange={handleChange}
        value={hlurbRadioVal ? "N/A" : defaultHlurb.hlurb}
      ></input>
      <input
        type="text"
        placeholder="Actions taken by office(s) mentioned in 16a"
        // disabled={hlurbRadioVal}
        style={hlurbRadioVal ? readOnlyStyle : focus}
        {...register("hlurbActions")}
        onChange={handleChange}
        value={hlurbRadioVal ? "N/A" : defaultHlurb.hlurbActions}
      ></input>
      <input
        type="text"
        placeholder="Mode of Release Decision"
        // disabled={hlurbRadioVal}
        style={hlurbRadioVal ? readOnlyStyle : focus}
        {...register("hlurbMode")}
        onChange={handleChange}
        value={hlurbRadioVal ? "N/A" : defaultHlurb.hlurbMode}
        title="This is the text of the tooltip"
      ></input>
    </>
  );
}

export default Hlurb;
