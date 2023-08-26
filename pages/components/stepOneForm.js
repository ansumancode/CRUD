import React from "react";
import * as Yup from "yup";
import StepOneReusableForm from "./stepOneReusableForm";

const StapeOneForm = (props) => {
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
        buttonText="Next"
        header="Create a job"
        steps="Step 1"
      />
    </>
  );
};

export default StapeOneForm;
