import React from "react";

function ApplicantName({ register }) {
  return (
    <>
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
        type="number"
        {...register("contNumber")}
        placeholder="Contact Number"
      ></input>
    </>
  );
}

export default ApplicantName;
