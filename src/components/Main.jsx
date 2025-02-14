import React, { useContext, useState } from "react";
import styled from "styled-components";
import SubmitButton from "../reusable-components/SubmitButton";
import { RadioContext } from "../api/radio";
import { useForm } from "react-hook-form";
import { useCreateItem } from "../database/crud";
import { Toaster } from "react-hot-toast";
import Hlurb from "./Hlurb";
import ZoningAdministrator from "./ZoningAdministrator";
import ProjectInformation from "./ProjectInformation";
import AuthRep from "./AuthRep";
import CorporationAddress from "./CorporationAddress";
import ApplicantAddress from "./ApplicantAddress";
import { useDispatch, useSelector } from "react-redux";
import ApplicantName from "./ApplicantName";

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
  const [addressValues, setAddressValues] = useState({
    corpBuilding: "",
    corpBarangay: "",
    corpCity: "",
    authBuilding: "",
    authBarangay: "",
    authCity: "",
    projBuilding: "",
    projBarangay: "",
    projCity: "",
  });

  //this is from context API
  const { corpAdd, authRepAdd, proInfoAdd, address, setAddress } =
    useContext(RadioContext);

  //react-hook-form-codes
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  //styles
  const focus = {
    border: "solid 2px #e2dd6c",
    // backgroundColor: "#f3f3f3",
    backgroundColor: "#ffffff",
    boxShadow: "0 1px 5px 0 #fffd98",
  };

  const yes = {
    backgroundColor: "#f1f1f1",
  };

  // CRUD FUNCTIONS
  const createMutation = useCreateItem(reset, setAddress);
  // const updateMutation = useUpdateItem();
  // const deleteMutation = useDeleteItem();

  function handleCreate(data) {
    createMutation.mutate(data);
    console.log(data);
  }

  const variable = useSelector((el) => el.application.address);

  return (
    <form onSubmit={handleSubmit(handleCreate)}>
      <Toaster />

      <MainContainer>
        {/* ----------------Application Name------------------------ */}
        <ApplicantName register={register} />

        {/* ----------------Application Address------------------------ */}
        <ApplicantAddress register={register} />

        {/* ----------------Corporation Address------------------------ */}
        <CorporationAddress register={register} />

        {/* ----------------Authorized Representative------------------------ */}
        <AuthRep register={register} />

        {/* ----------------Project Information------------------------ */}
        <ProjectInformation register={register} />

        <Issuance>
          <ZoningAdministrator register={register} focus={focus} />
        </Issuance>

        <Issuance>
          <Hlurb register={register} focus={focus} />
        </Issuance>

        <SubmitButton>SUBMIT</SubmitButton>
      </MainContainer>
    </form>
  );
}

export default Main;
