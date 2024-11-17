import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useSkills() {
  const [field, setField] = useState("");
  const [savedSkills, setSavedSkills] = useState([]);

  function handleInputField(e) {
    setField(e.target.value);
  }

  function handleSkills() {
    const newSkill = {
      id: uuidv4(),
      field,
    };
    setSavedSkills((prevSkills) => [...prevSkills, newSkill]);
    setField("");
    console.log(savedSkills);
  }

  function handleDelete(id) {
    setSavedSkills((prevSkills) =>
      prevSkills.filter((skill) => skill.id !== id)
    );
  }
  return { field, savedSkills, handleInputField, handleSkills, handleDelete };
}
