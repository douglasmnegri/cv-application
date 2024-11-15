import Container from "./html_components/Container";
import { useState } from "react";

const workFields = [
  { label: "Position", type: "text", name: "position" },
  { label: "Company", type: "text", name: "company" },
  { label: "Start date of Contract", type: "number", name: "startDate" },
  { label: "End date of Contract", type: "number", name: "endDate" },
];

function WorkFields() {
  const [fields, setFields] = useState({
    position: "",
    company: "",
    startDate: "",
    endDate: "",
  });

  const [saveExperience, setSaveExperience] = useState([
    {
      position: "Software Engineer",
      company: "Google",
      startDate: "2024",
      endDate: "",
    },
  ]);

  function handleWorkExperience() {
    // Add the current fields to saveExperience
    setSaveExperience((prevExperience) => [...prevExperience, fields]);

    // Clear the input fields
    setFields({
      position: "",
      company: "",
      startDate: "",
      endDate: "",
    });
  }

  function handleInputFields(e) {
    const { name, value } = e.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  }

  return (
    <div className="flex gap-16">
      <div className="flex m-4">
        <div>
          {workFields.map((content, index) => (
            <label key={index}>
              {content.label}
              <input
                type={content.type}
                name={content.name}
                value={fields[content.name]}
                onChange={handleInputFields}
                className="block w-[300px] mb-4"
              />
            </label>
          ))}
          <div className="flex flex-col gap-4">
            <textarea
              id="career-summary"
              placeholder="Describe your career journey..."
              className="border-2 border-gray-300 bg-slate-600 bg-opacity-90 w-[300px] h-[150px] text-white"
            />
            <button onClick={handleWorkExperience} className="bg-green-500">Add Experience</button>
          </div>
        </div>
      </div>

      {/* Render saved experiences */}
      <div className={`m4 ${saveExperience.length < 1 ? "hidden" : "block"}`}>
        <h2>Saved Experiences</h2>
        {saveExperience.map((field, index) => (
          <PrintJobs
            key={index}
            position={field.position}
            company={field.company}
            employmentDate={
              field.endDate == ""
                ? field.startDate + " (Currently Working)"
                : field.startDate + " - " + field.endDate
            }
          />
        ))}
      </div>
    </div>
  );
}

function PrintJobs({ position, company, employmentDate }) {
  return (
    <div className="border-2 border-solid border-white bg-white text-black p-2 mb-2">
      <p>
        <strong>Position:</strong> {position}
      </p>
      <p>
        <strong>Company:</strong> {company}
      </p>
      <p>
        <strong>Period of Employment:</strong> {employmentDate}
      </p>
    </div>
  );
}

function WorkExperience() {
  return (
    <>
      <h1>Work Experience</h1>
      <Container>
        <div className="flex">
          <WorkFields />
        </div>
      </Container>
    </>
  );
}

export default WorkExperience;
