import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SubmitButton from "../reusable-components/SubmitButton";
import Address from "./Address";
import RadioButtons from "./RadioButtons";
import { barangay } from "../arrays/barangays";
import { RadioContext } from "../api/radio";
import { useForm } from "react-hook-form";
import { supabase } from "../database/supabase";
import { useCreateItem, useItems } from "../database/crud";
import { Toaster } from "react-hot-toast";

const MainContainer = styled.div`
  display: grid;
  height: 750px;
  overflow-y: scroll;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  gap: 10px;
  padding: 0px 20px 0px 20px;

  h1 {
    grid-column: 1/5;
    color: #00928b;
  }

  input,
  select {
    text-align: center;
    font-family: "Montserrat";
    font-weight: 400;
    width: 100%;
    height: 35px;
    background-color: #ffffff;
    border: solid 1px #e2dd6c;
    color: #2f4858;
    font-size: 12px;
    border-radius: 5px;
    padding: 5px;
  }

  .zaf {
    grid-column: 1/5;
    width: 24.3%;
  }

  .sectionHeading {
    grid-column: 1/2;
    text-align: left;
    font-weight: 500;
    /* background-color: orange; */
    place-content: center;
  }

  .radios {
    /* grid-column: 1/2; */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    place-items: center;
    /* margin-left: 10px; */
    /* text-align: left; */
  }

  .longText {
    grid-column: 2/5;
    padding-right: 250px;
    padding-left: 20px;
    text-align: justify;
    font-size: 12px;
  }

  .spacer {
    grid-column: 2/5;
    /* background-color: orange; */
  }

  .RadioButtonsComponent {
    grid-column: 1/5;
    display: grid;
    grid-template-columns: 3fr 10fr;
    align-items: center;
  }

  .sameAddAdjust {
    padding-right: 300px;
  }

  .authAdjust {
    padding-right: 80px;
  }
`;

const Issuance = styled.div`
  height: 150px;
  grid-column: 1/5;
  display: grid;
  grid-template-columns: 2fr 10fr;
  grid-template-rows: 1fr 1fr;
  /* grid-row: 1/3; */
  /* border: solid 1px black; */
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 5px 5px 5px #cccccc;
  gap: 10px;
  place-items: center;

  .input {
    font-size: 12px;
  }

  input {
    background-color: #f1f1f1;
  }

  .yes {
    grid-column: 1/5;
    text-align: left;
    width: 100%;
    font-size: 12px;
    font-style: italic;
  }
`;

function Main() {
  //variables
  const [zoningRadio, setZoningRadio] = useState(true);
  const [hlurbRadio, setHlurbRadio] = useState(true);

  //this is from context API
  const { corpAdd, authRepAdd, proInfoAdd } = useContext(RadioContext);

  //react-hook-form-codes
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //supabase

  const focus = {
    border: "solid 2px #e2dd6c",
    // backgroundColor: "#f3f3f3",
    backgroundColor: "#ffffff",
    boxShadow: "0 1px 5px 0 #fffd98",
  };

  // CRUD FUNCTIONS
  const { data, isLoading, isError, error } = useItems();
  const createMutation = useCreateItem();
  // const updateMutation = useUpdateItem();
  // const deleteMutation = useDeleteItem();

  function handleCreate(data) {
    console.log(data.firstName);
    // createMutation.mutate(data);
  }

  return (
    <form onSubmit={handleSubmit(handleCreate)}>
      <Toaster />
      {/* <form onSubmit={handleSubmit(handleClick)}></form> */}
      <MainContainer>
        <h1>Title Goes Here!</h1>

        <span className="sectionHeading">Date</span>
        <input type="date" {...register("date")} className="zaf"></input>

        <span className="sectionHeading">Applicant Name:</span>
        <span className="spacer"></span>
        <input
          type="text"
          {...register("firstName")}
          placeholder="First Name"
        ></input>
        <input
          type="text"
          {...register("middleName")}
          placeholder="Middle Name"
        ></input>
        <input
          type="text"
          {...register("lastName")}
          placeholder="Last Name"
        ></input>
        <input
          type="text"
          {...register("corpName")}
          placeholder="Name of Corporation"
        ></input>
        <input
          type="text"
          {...register("contNumber")}
          placeholder="Contact Number"
        ></input>

        <span className="sectionHeading">Applicant Address:</span>
        <span className="spacer"></span>
        <input
          type="text"
          placeholder="St./Bldg/Purok"
          disabled={corpAdd}
          {...register("appBuilding")}
        ></input>
        <select disabled={corpAdd} {...register("appBarangay")}>
          {barangay.map((el, i) => (
            <option key={i}>{el}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="City"
          disabled={corpAdd}
          {...register("appCity")}
        ></input>

        <span className="sectionHeading RadioButtonsComponent sameAddAdjust">
          Corporation Address:
          <RadioButtons name="corpAdd" label="Same as applicant address?" />
        </span>
        <input
          type="text"
          placeholder="St./Bldg/Purok"
          disabled={corpAdd}
          {...register("corpBuilding")}
        ></input>
        <select disabled={corpAdd} {...register("corpBarangay")}>
          {barangay.map((el, i) => (
            <option key={i}>{el}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="City"
          disabled={corpAdd}
          {...register("corpCity")}
        ></input>
        <span></span>

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
          placeholder="St./Bldg/Purok"
          disabled={authRepAdd}
          {...register("authBuilding")}
        ></input>
        <select disabled={authRepAdd} {...register("authBarangay")}>
          {barangay.map((el, i) => (
            <option key={i}>{el}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="City"
          disabled={authRepAdd}
          {...register("authCity")}
        ></input>
        <span></span>

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
          disabled={proInfoAdd}
          {...register("projBuilding")}
        ></input>
        <select disabled={proInfoAdd} {...register("projBarangay")}>
          {barangay.map((el, i) => (
            <option key={i}>{el}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="City"
          disabled={proInfoAdd}
          {...register("projCity")}
        ></input>
        <span></span>

        <Issuance>
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
        </Issuance>

        <Issuance>
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
        </Issuance>

        <SubmitButton>SUBMIT</SubmitButton>
      </MainContainer>
    </form>
  );
}

export default Main;
