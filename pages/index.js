import React, { useEffect, useRef, useState } from "react";
import Modal from "./components/modal";
import ResultTable from "./components/resultTable";
import { fetchData, submitFormData } from "./api/api"; 

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const btnRef = useRef();
  const modalRef = useRef();
  const [getData, setGetData] = useState([]);
  const [error, setError] = useState(null);

  const handleModalSubmit = async (formData) => {
    try {
      await submitFormData(formData);
      setShowModal(false);
      setError(null); 
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An error occurred while submitting the form."); 
    }
  }; 

  const handelClick = () => {
    setShowModal(true);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("click", (e) => {
      if (e.target == modalRef.current && e.target !== btnRef.current) {
        setShowModal(false);
      }
    });
  }

  useEffect(() => {
    const fetchDataInterval = setInterval(async () => {
      try {
        const data = await fetchData();
        setGetData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, 2000);

    return () => {
      clearInterval(fetchDataInterval);
    };
  }, []);

  return (
    <div className="container mx-auto h-auto p-5">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handelClick}
        ref={btnRef}
      >
        Create Job
      </button>
      <ResultTable getData={getData} error={error} />
      {showModal && (
        <Modal
          modalRef={modalRef}
          setShowModal={setShowModal}
          onSubmit={handleModalSubmit}
          error={error}
        />
      )}
    </div>
  );
}
