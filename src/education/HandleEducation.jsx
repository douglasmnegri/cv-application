import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const educationFields = [
  {
    label: "School / University",
    type: "text",
    name: "school",
    placeholder: "UFSC",
  },
  {
    label: "Start Date",
    type: "text",
    name: "startDate",
    placeholder: "2018",
  },
  { label: "End Date", type: "text", name: "endDate", placeholder: "2024" },
  {
    label: "Diploma",
    type: "text",
    name: "diploma",
    placeholder: "Bachelor of Business Administration",
  },
];

export default function useEducation() {
  const [fields, setsFields] = useState({
    school: "",
    diploma: "",
    startDate: "",
    endDate: "",
  });

  const [savedEducation, setSavedEducation] = useState([]);

  function handleInputFields(e) {
    const { name, value } = e.target;
    setsFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  }

  function handleEducation() {
    const newEducation = {
      id: uuidv4(),
      ...fields,
    };

    setSavedEducation((prevEducation) => [...prevEducation, newEducation]);
    setsFields({
      school: "",
      diploma: "",
      startDate: "",
      endDate: "",
    });
  }
  function deleteEducation(id) {
    setSavedEducation((prevEducation) =>
      prevEducation.filter((educ) => educ.id !== id)
    );
  }
  return {
    handleInputFields,
    handleEducation,
    deleteEducation,
    educationFields,
    fields,
    savedEducation,
  };
}
