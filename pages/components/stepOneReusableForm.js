import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ReusableForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  buttonText,
  header,
  steps
}) => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl text-black">{header}</h2>
        <p className="text-base text-black">{steps}</p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="w-full max-w-lg">
          <div className="flex flex-wrap mb-6">
            <div className="w-full mb-6">
              <label className="block tracking-wide text-sm font-medium mb-1 relative text-black">
                Job title
                <span className="text-customRed absolute top-[-4px] ml-0.5">
                  *
                </span>
              </label>
              <Field
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-3  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm "
                id="jobTitle"
                name="jobTitle"
                type="text"
                placeholder="ex. UX UI Designer"
              />
              <p className="text-red-500 text-xs italic">
                <ErrorMessage name="jobTitle" />
              </p>
            </div>
            <div className="w-full mb-6">
              <label className="block tracking-wide text-sm mb-1 font-medium relative text-black">
                Company name
                <span className="text-customRed absolute top-[-4px] ml-0.5">
                  *
                </span>
              </label>
              <Field
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-3  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                id="company"
                name="company"
                type="text"
                placeholder="ex. Google"
              />
              <p className="text-red-500 text-xs italic">
                <ErrorMessage name="company" />
              </p>
            </div>
            <div className="w-full mb-6">
              <label className="block tracking-wide text-sm font-medium mb-1 relative text-black">
                Industry
                <span className="text-customRed absolute top-[-4px] ml-0.5">
                  *
                </span>
              </label>
              <Field
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-3  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                id="industry"
                name="industry"
                type="text"
                placeholder="ex. Information Technology"
              />
              <p className="text-red-500 text-xs italic">
                <ErrorMessage name="industry" />
              </p>
            </div>
            <div className="flex w-full justify-between">
              <div className="w-full pr-3 mb-6">
                <label className="block tracking-wide font-medium text-sm mb-1 relative text-black">
                  Location
                </label>
                <Field
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-3  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                  id="location"
                  name="location"
                  type="text"
                  placeholder="ex. Chennai"
                />
              </div>
              <div className="w-full pl-3 mb-6">
                <label className="block tracking-wide text-sm font-medium mb-1 relative text-black">
                  Remote type
                </label>
                <Field
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-3  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                  id="RemoteType"
                  name="RemoteType"
                  type="text"
                  placeholder="ex. In-office"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center mt-24">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white text-base py-1 px-3 rounded-md "
            >
              {buttonText}
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default ReusableForm;
