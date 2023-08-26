"use strict";
import React, { useState } from "react";
import StapeOneForm from "./stepOneForm";
import StapeTwoForm from "./stepTwoForm";

const Modal = ({ modalRef, onSubmit, error }) => {
  const [data, setData] = useState({
    jobTitle: "",
    company: "",
    industry: "",
    location: "",
    RemoteType: "",
    MinimumExperience: "",
    MaximumExperience: "",
    MinimumSalary: "",
    MaximumSalary: "",
    TotalEmployee: "",
    picked: "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handelNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      onSubmit(newData);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };
  const step = [
    <StapeOneForm next={handelNextStep} data={data} />,
    <StapeTwoForm next={handelNextStep} data={data} />,
  ];

  return (
    <div className="fixed inset-0 z-20 overflow-y-auto bg-gray-500 bg-opacity-95">
      <div
        className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        ref={modalRef}
      >
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg z-20 md:w-custom-modal p-8">
          {step[currentStep]}
          {error}
        </div>
      </div>
    </div>
  );
};

export default Modal;
