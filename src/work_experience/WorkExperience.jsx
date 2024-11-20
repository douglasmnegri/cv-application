import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "../html_components/Container";

export default function WorkExperience({
  workFields,
  handleWorkFields,
  handleWorkExperience,
  workedFields,
  savedExperience,
}) {
  return (
    <>
      <Container>
        <h1>Work Experience</h1>
        <div className="flex gap-16">
          <div className="flex m-4">
            <div>
              {workFields.map((content, index) => (
                <label key={index}>
                  {content.label}
                  <input
                    type={content.type}
                    name={content.name}
                    value={workedFields[content.name]}
                    onChange={handleWorkFields}
                    className="block w-[300px] mb-4"
                  />
                </label>
              ))}
              <div className="flex flex-col gap-4">
                <textarea
                  id="career-summary"
                  placeholder="Describe your career journey..."
                  name="careerJourney"
                  value={workedFields.careerJourney}
                  onChange={handleWorkFields}
                  className="border-2 border-gray-300 bg-slate-600 bg-opacity-90 w-[300px] h-[150px] text-white"
                />
                <button onClick={handleWorkExperience} className="bg-green-500">
                  Add Experience
                </button>
              </div>
            </div>
          </div>
          <div
            className={`m4 ${savedExperience.length < 1 ? "hidden" : "block"}`}
          >
            <h2>Saved Experiences</h2>
            {savedExperience.map((field) => (
              <PrintJobs
                key={field.id}
                position={field.position}
                company={field.company}
                employmentDate={
                  field.endDate === ""
                    ? field.startDate + " (Currently Working)"
                    : field.startDate + " - " + field.endDate
                }
                careerJourney={field.careerJourney} // Pass the careerJourney to PrintJobs
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

function PrintJobs({ position, company, employmentDate, careerJourney }) {
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
      <p>
        <strong>Career Journey:</strong> {careerJourney}
      </p>
    </div>
  );
}
