"use strict";
import React from "react";
import * as Yup from "yup";
import StepTwoReusableForm from "./stepTwoReusableform";

const StapeTwoForm = (props) => {
  const handelSubmit = (values) => {
    props.next(values, true);
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
        header = "Create a job"
        steps = "Step 2"
        buttonText = "Save"
      />
    </>
  );
};

export default StapeTwoForm;
