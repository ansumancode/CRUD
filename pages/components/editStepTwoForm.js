"use strict";
import React from "react";
import StepTwoReusableForm from "./stepTwoReusableform";
import * as Yup from "yup";

const EditStapeTwoForm = (props) => {
  const handelSubmit = (values) => {
    props.next(values, true);
  };
  const preprocessValue = (value) => {
    return value.replace(/[-,.]/g, "");
  };
  const stepTwoValidation = Yup.object({
    MinimumExperience: Yup.number().typeError("Please Enter a Number"),
    MaximumExperience: Yup.number().typeError("Please Enter a Number"),
    MinimumSalary: Yup.number().typeError("Please Enter a Number"),
    MaximumSalary: Yup.number().typeError("Please Enter a Number"),
    picked: Yup.string()
      .oneOf(["Quick apply", "External apply"], "Please select the job type")
      .required("Job type is required"),
  });
  return (
    <>
      
      <StepTwoReusableForm
        validationSchema={stepTwoValidation}
        initialValues={props.data}
        onSubmit={handelSubmit}
        header = "Edit Create a job"
        steps = "Step 2"
        buttonText = "Save Edit"
      />
    </>
  );
};

export default EditStapeTwoForm;
