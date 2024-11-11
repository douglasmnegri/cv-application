import { useState } from "react";
import Container from "./html_components/Container";

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

function EducationFields() {
  // We're able to refactor the functions below to become reusable in multiple files

  const [fields, setsFields] = useState({
    school: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const [saveEducation, setSaveEducation] = useState([]);

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
  return (
    <>
      <div>
        <div
          className="grid grid-cols-2 border-b-2

 m-4 p-4 items-end"
        >
          {educationFields.map((content, index) => (
            <div className="" key={index}>
              <label>
                {content.label}
                <input
                  type={content.type}
                  name={content.name}
                  value={fields[content.name]}
                  placeholder={content.placeholder}
                  onChange={handleInputFields}
                  className="block border border-gray-300 p-2 mt-1 w-[350px]"
                />
              </label>
            </div>
          ))}
          <div className="col-start-2 w-[350px] flex justify-end">
            <button
              className="border mt-2 bg-green-500 text-white rounded"
              onClick={handleEducation}
            >
              Save School
            </button>
          </div>
        </div>

        <div className={`m4 ${saveEducation.length < 1 ? "hidden" : "block"}`}>
          <h2>Saved Education</h2>
          <div className="flex flex-wrap justify-evenly">
            {saveEducation.map((field, index) => (
              <PrintSchools
                key={index}
                school={field.school}
                location={field.location}
                date={
                  field.endDate == ""
                    ? field.startDate + " (In progress)"
                    : field.startDate + " - " + field.endDate
                }
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function PrintSchools({ school, date, location }) {
  return (
    <div className="border-2 border-solid border-white bg-white text-black mb-2  m-4 p-4">
      <p>
        <strong>Institution:</strong> {school}
      </p>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
    </div>
  );
}

function Education() {
  return (
    <>
      <h1>Education</h1>
      <Container>
        <EducationFields />
      </Container>
    </>
  );
}

export default Education;