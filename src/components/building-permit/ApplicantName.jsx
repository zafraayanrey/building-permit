import React from "react";
import { CiViewTable } from "react-icons/ci";
import { FaEdit, FaTable } from "react-icons/fa";
import { FaTableCellsLarge } from "react-icons/fa6";
import { FiPrinter } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import styled from "styled-components";

const ApplicantHeading = styled.div`
  display: grid;
  grid-column: 1/5;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
`;

const Icon = styled.div`
  place-self: center;
  width: auto;
  text-align: center;
  background-color: #faefb3;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  justify-content: right;
  color: #00928b;
  font-size: 16px;
  padding: 5px;

  span {
    padding: 10px;
  }

  span:hover {
    color: white;
    background-color: green;
    border: 5px;
  }
`;

function ApplicantName({ register }) {
  return (
    <>
      <ApplicantHeading>
        <h1>Building Permit Application</h1>
        <Icon>
          <span>
            <FaTableCellsLarge />
          </span>
          <span>
            <FaEdit />
          </span>
          <span>
            <RiDeleteBin6Line />
          </span>
          <span>
            <FiPrinter />
          </span>
        </Icon>
      </ApplicantHeading>

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
        type="number"
        {...register("contNumber")}
        placeholder="Contact Number"
      ></input>
    </>
  );
}

export default ApplicantName;
