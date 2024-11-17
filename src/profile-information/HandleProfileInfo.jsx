import { useState } from "react";

export default function useSignUpForm() {
    const [formData, setFormData] = useState({
      fullName: "",
      jobTitle: "",
      email: "",
      phone: "",
      city: "",
      careerSummary: "",
    });
  
    const [savedData, setSavedData] = useState([formData]);
  
    function handleFormChange(e) {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  
    function handleSave() {
      setSavedData([formData]);
    }
  
    return { formData, savedData, handleFormChange, handleSave };
  }