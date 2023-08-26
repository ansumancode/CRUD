import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ReusableStepTwoForm = ({ validationSchema, initialValues, onSubmit, header, steps, buttonText  }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl text-black">{header}</h2>
        <p className="text-base text-black">{steps}</p>
      </div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form className="w-full max-w-lg">
          <div className="flex flex-wrap mb-6">
            <div className="flex w-full justify-between">
              <label className="block tracking-wide font-medium text-sm mb-1 relative text-black">
                Experience
              </label>
            </div>
            <div className="flex w-full justify-between">
              <div className="w-full pr-3">
                <Field
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-3  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                  id="MinimumExperience"
                  name="MinimumExperience"
                  type="text"
                  placeholder="Minimum"
                />
                <p className="text-red-500 text-xs italic">
                  <ErrorMessage name="MinimumExperience" />
                </p>
              </div>
              <div className="w-full pl-3">
                <Field
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-3  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                  id="MaximumExperience"
                  name="MaximumExperience"
                  type="text"
                  placeholder="Maximum"
                />
                <p className="text-red-500 text-xs italic">
                  <ErrorMessage name="MaximumExperience" />
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="flex w-full justify-between">
              <label className="block tracking-wide font-medium text-sm mb-1 relative text-black">
                Salary
              </label>
            </div>
            <div className="flex w-full justify-between">
              <div className="w-full pr-3 ">
                <Field
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-3  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                  id="MinimumSalary"
                  name="MinimumSalary"
                  type="text"
                  placeholder="Minimum"
                />
                <p className="text-red-500 text-xs italic">
                  <ErrorMessage name="MinimumSalary" />
                </p>
              </div>
              <div className="w-full pl-3">
                <Field
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-3  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
                  id="MaximumSalary"
                  name="MaximumSalary"
                  type="text"
                  placeholder="Maximum"
                />
                <p className="text-red-500 text-xs italic">
                  <ErrorMessage name="MaximumSalary" />
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mb-6">
            <label className="block tracking-wide text-sm mb-1 font-medium relative text-black">
              Total employee
            </label>
            <Field
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-3  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm"
              id="TotalEmployee"
              name="TotalEmployee"
              type="text"
              placeholder="ex. 100"
            />
            <p className="text-red-500 text-xs italic">
              <ErrorMessage name="TotalEmployee" />
            </p>
          </div>
          <div className="w-full mb-6">
            <label className="block tracking-wide text-sm mb-1 font-medium relative text-black">
              Apply type
            </label>
            <div className="flex items-center ">
              <div className="flex items-center mr-4">
                <Field
                  id="QuickApply"
                  type="radio"
                  value="Quick apply"
                  name="picked"
                  className="w-5 h-5 rounded-full text-blue-600 bg-white border-gray-300 cursor-pointer"
                />
                <label className="w-full ml-1 text-sm font-medium text-gray-400 dark:text-gray-300">
                  Quick apply
                </label>
              </div>
              <div className="flex items-center mr-4">
                <Field
                  id="ExternalApply"
                  type="radio"
                  value="External apply"
                  name="picked"
                  className="w-5 h-5 rounded-full text-blue-600 bg-white border-gray-300 cursor-pointer"
                />
                <label className="w-full  ml-1 text-sm font-medium text-gray-400 dark:text-gray-300">
                  External apply
                </label>
              </div>
            </div>
            <p className="text-red-500 text-xs italic">
              <ErrorMessage name="picked" />
            </p>
          </div>
          <div className="flex justify-end items-center mt-24">
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-base py-1 px-3 rounded-md ">
              {buttonText}
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default ReusableStepTwoForm;
