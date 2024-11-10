import { useState } from "react";
import Container from "./html_components/Container";

function EducationFields() {
  const educationFields = [
    { label: "School / University", type: "text", name: "school" },
    { label: "Start Date", type: "number", name: "startDate" },
    { label: "End Date", type: "number", name: "endDate" },
    { label: "Location", type: "text", name: "location" },
  ];
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
                  className="block border border-gray-300 p-2 mt-1 w-[350px]"
                />
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-end">
        <button className="border p-2 m-2 bg-green-500 text-white rounded">
          Add Language
        </button>
      </div>
    </>
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
