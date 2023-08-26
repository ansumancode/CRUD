"use strict";
import React from "react";
import * as Yup from "yup";
import StepOneReusableForm from "./stepOneReusableForm";

const EditStapeOneForm = (props) => {
  const handelSubmit = (values) => {
    props.next(values);
  };

  const setpOneValidation = Yup.object({
    jobTitle: Yup.string().required("Please Enter Job Title"),
    company: Yup.string().required("Please Enter Company Name"),
    industry: Yup.string().required("Please Enter Industry"),
  });

  return (
    <>
      <StepOneReusableForm
        validationSchema={setpOneValidation}
        initialValues={props.data}
        onSubmit={handelSubmit}
        buttonText="Edit Next"
        header="Edit Create a job"
        steps="Step 1"
      />
    </>
  );
};

export default EditStapeOneForm;
