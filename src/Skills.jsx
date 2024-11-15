import { useState } from "react";
import Container from "./html_components/Container";

function SkillsFields() {
  const [field, setField] = useState("");
  const [savedSkills, setSavedSkills] = useState([
    "Javascript",
    "HTML",
    "CSS",
    "PostgresSQL",
  ]);

  function handleInputField(e) {
    setField(e.target.value);
  }

  function handleSkills() {
    setSavedSkills((prevSkills) => [...prevSkills, field]);
    setField("");
    console.log(field);
  }
  return (
    <>
      <div className="flex justify-center m-4 border-b-2">
        <div>
          <label>
            <input
              className=" w-[300px] h-[30px] m-4"
              type="text"
              name="skills"
              value={field}
              placeholder="Javascript"
              onChange={handleInputField}
            />
          </label>
          <button onClick={handleSkills} className="bg-green-500">Add Experience</button>
        </div>
      </div>
      <div className={`m4 ${savedSkills.length < 1 ? "hidden" : "block"}`}>
        <h2>Saved Education</h2>
        <div className="flex flex-wrap justify-center align-middle">
          {savedSkills.map((field, index) => (
            <PrintSkills key={index} skill={field} />
          ))}
        </div>
      </div>
    </>
  );
}

function PrintSkills({ skill }) {
  return (
    <div className="border-2 border-solid rounded border-white bg-white text-black mb-2  m-4 p-4">
      <p>{skill}</p>
    </div>
  );
}

function Skills() {
  return (
    <>
      <h1>Skills</h1>
      <Container>
        <SkillsFields />
      </Container>
    </>
  );
}

export default Skills;
