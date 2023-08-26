import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.get("https://64e74133b0fd9648b78fa111.mockapi.io/dataFromStepForm");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const submitFormData = async (formData) => {
  try {
    const response = await axios.post("https://64e74133b0fd9648b78fa111.mockapi.io/dataFromStepForm", formData);
    console.log("Form submitted successfully.");
    return response.data;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};

export const updateFormData = async (id, formData) => {
    try {
      const response = await axios.put(`https://64e74133b0fd9648b78fa111.mockapi.io/dataFromStepForm/${id}`, formData);
      console.log(response, "Form submitted successfully.");
      return response.data;
    } catch (error) {
      console.error("Error submitting form:", error);
      throw error;
    }
  };

  export const deleteFormData = async (id) => {
    try {
      const response = await axios.delete(`https://64e74133b0fd9648b78fa111.mockapi.io/dataFromStepForm/${id}`);
      console.log(response, "Form deleted successfully.");
      return response.data;
    } catch (error) {
      console.error("Error deleting form:", error);
      throw error;
    }
  };