"use strict"
import Image from "next/image";
import React, { useState, useRef } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import EditModal from "./editModal";
import { updateFormData, deleteFormData } from "../api/api";

const ResultTable = ({ getData, error }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const btnRef = useRef();
  const modalRef = useRef();

  const editHandleModalSubmit = (formData) => {
    updateFormData(selectedData.id, formData)
      .then((response) => {
        console.log(response, "Form submitted successfully.");
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });

  };

  const deleteHandleModalSubmit = (data) => {
    const id = data.id
    deleteFormData(id)
      .then((response) => {
        console.log(response, "Form deleted successfully.");
      })
      .catch((error) => {
        console.error("Error deleting form:", error);
      });
  };

  const handelClick = (data) => {
    setSelectedData(data);
    setShowModal(true);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("click", (e) => {
      if (e.target == modalRef.current && e.target !== btnRef.current) {
        setShowModal(false);
      }
    });
  }

 

  return (
    <div className="container my-10">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-center">
        {getData?.map((allData, i) => {
          return (
            <div
              className="w-full md:max-w-830 bg-white py-4 px-6 rounded-md relative"
              key={i}
            >
              <div className="flex justify-between">
                <div className="flex">
                  <div className="relative">
                    <Image src="/img.png" width={48} height={48} alt="img" />
                  </div>
                  <div className="ml-2 w-301">
                    <div className="mb-6">
                      <h2 className="font-normal text-2xl leading-none text-black">
                        {allData.jobTitle}
                      </h2>
                      <p className="text-base text-black">
                        {allData.company} - {allData.industry}
                      </p>
                      {allData.location || allData.RemoteType ? (
                        <p className="text-base text-gray-600">
                          {allData.location} ({allData.RemoteType})
                        </p>
                      ) : null}
                    </div>
                    <div className="mb-6">
                      <p className="text-base text-black mb-2">
                        Part-Time (9.00 am - 5.00 pm IST)
                      </p>
                      {allData.MinimumExperience ||
                      allData.MaximumExperience ? (
                        <p className="text-base text-black mb-2">
                          Experience ({allData.MinimumExperience} -{" "}
                          {allData.MaximumExperience} years)
                        </p>
                      ) : null}
                      {allData.MinimumSalary || allData.MaximumSalary ? (
                        <p className="text-base text-black mb-2">
                          INR (₹){" "}
                          {allData.MinimumSalary.toString().replace(
                            /\B(?=(\d{3})+(?!\d))/g,
                            ","
                          )}{" "}
                          -{" "}
                          {allData.MaximumSalary.toString().replace(
                            /\B(?=(\d{3})+(?!\d))/g,
                            ","
                          )}{" "}
                          / Month
                        </p>
                      ) : null}

                      {allData.TotalEmployee && (
                        <p className="text-base text-black">
                          {allData.TotalEmployee} employees
                        </p>
                      )}
                    </div>
                    {allData.picked ? (
                      <button
                        className={` ${
                          allData.picked === "External apply"
                            ? "bg-white border border-blue-600 text-blue-500 hover:bg-gray-200"
                            : "bg-blue-500 hover:bg-blue-700 text-white"
                        }    py-2 px-4 rounded`}
                      >
                        {allData.picked}
                      </button>
                    ) : null}
                  </div>
                </div>

                <div className="flex justify-end items-center absolute right-4 mr-2">
                  <div
                    className="pl-2 cursor-pointer text-blue-600"
                    onClick={() => handelClick(allData)}
                    ref={btnRef}
                  >
                    <AiFillEdit />
                  </div>
                  <div
                    className="pl-2 cursor-pointer text-red-600"
                    onClick={() => deleteHandleModalSubmit(allData)}
                  >
                    <AiFillDelete />
                  </div>
                </div>
              </div>
              {showModal && (
                <EditModal
                  modalRef={modalRef}
                  setShowModal={setShowModal}
                  selectedData={selectedData}
                  onSubmit={editHandleModalSubmit}
                  error={error}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultTable;
