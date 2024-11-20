import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const workFields = [
  { label: "Position", type: "text", name: "position" },
  { label: "Company", type: "text", name: "company" },
  { label: "Start date of Contract", type: "number", name: "startDate" },
  { label: "End date of Contract", type: "number", name: "endDate" },
];

export default function useWorkExperience() {
    const [workedFields, setWorkedFields] = useState({
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      careerJourney: "", // Add careerJourney to state
    });
  
    const [savedExperience, setSavedExperience] = useState([]);
  
    function handleWorkExperience() {
      const newWorkedFields = {
        id: uuidv4(),
        ...workedFields,
      };
      setSavedExperience((prevExperience) => [
        ...prevExperience,
        newWorkedFields,
      ]);
      setWorkedFields({
        position: "",
        company: "",
        startDate: "",
        endDate: "",
        careerJourney: "", // Clear careerJourney after saving
      });
    }
  
    function handleWorkFields(e) {
      const { name, value } = e.target;
      setWorkedFields((prevFields) => ({
        ...prevFields,
        [name]: value,
      }));
    }
  
    return {
      workFields: [
        { label: "Position", type: "text", name: "position" },
        { label: "Company", type: "text", name: "company" },
        { label: "Start date of Contract", type: "number", name: "startDate" },
        { label: "End date of Contract", type: "number", name: "endDate" },
      ],
      workedFields,
      savedExperience,
      handleWorkExperience,
      handleWorkFields,
    };
  }