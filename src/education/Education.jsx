import { useState } from "react";
import Container from "../html_components/Container";
import Button from "../html_components/DeleteButton";

export default function Education({
  educationFields,
  fields,
  savedEducation,
  onChangeFields,
  handleEducation,
  onDeleteEduc,
}) {
  return (
    <>
      <Container>
        <h1>Education</h1>
        <div>
          <div
            className="grid grid-cols-2 border-b-2

 m-4 p-4 items-end input-container"
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
                    onChange={onChangeFields}
                    className="block border border-gray-300 p-2 mt-1"
                  />
                </label>
              </div>
            ))}
            <div className="col-start-2 flex justify-end">
              <button
                className="border mt-4 bg-green-500 text-white rounded"
                onClick={handleEducation}
              >
                Save School
              </button>
            </div>
          </div>
        </div>
        <div className={`m4 ${savedEducation.length < 1 ? "hidden" : "block"}`}>
          <h2>Saved Education</h2>
          <div className="flex flex-wrap justify-evenly">
            {savedEducation.map((field) => (
              <PrintSchools
                key={field.id}
                school={field.school}
                diploma={field.diploma}
                onDeleteEduc={() => onDeleteEduc(field.id)}
                date={
                  field.endDate == ""
                    ? field.startDate + " (In progress)"
                    : field.startDate + " - " + field.endDate
                }
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

function PrintSchools({ school, date, diploma, onDeleteEduc }) {
  return (
    <div className="relative border-2 border-solid border-white bg-white text-black mb-2  m-4 p-4">
      <p>
        <strong>Institution:</strong> {school}
      </p>
      <p>
        <strong>Diploma:</strong> {diploma}
      </p>
      <p>
        <strong>Date:</strong> {date}
      </p>

      <Button onClick={onDeleteEduc} />
    </div>
  );
}
