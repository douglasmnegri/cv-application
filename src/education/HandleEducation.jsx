import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const educationFields = [
  {
    label: "School / University",
    type: "text",
    name: "school",
    placeholder: "Federal University of Santa Catarina",
  },
  {
    label: "Start Date",
    type: "number",
    name: "startDate",
    placeholder: "2018",
  },
  { label: "End Date", type: "number", name: "endDate", placeholder: "2024" },
  {
    label: "Location",
    type: "text",
    name: "location",
    placeholder: "Florianópolis",
  },
];

export default function useEducation() {
    const [fields, setsFields] = useState({
        school: "",
        startDate: "",
        endDate: "",
        location: "",
      });
    
      const [saveEducation, setSaveEducation] = useState([
        {
          school: "UFSC",
          startDate: "2018",
          endDate: "2024",
          location: "Florianópolis",
        },
      ]);
    
      function handleInputFields(e) {
        const { name, value } = e.target;
        setsFields((prevFields) => ({
          ...prevFields,
          [name]: value,
        }));
      }
    
      function handleEducation() {
        setSaveEducation((prevEducation) => [...prevEducation, fields]);
        setsFields({
          school: "",
          startDate: "",
          endDate: "",
          location: "",
        });
        console.log(saveEducation);
      }

      return {
        handleInputFields,
        handleEducation,
        educationFields,
        fields,
        saveEducation
      }
}
