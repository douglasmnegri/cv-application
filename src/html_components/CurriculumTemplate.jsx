import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { WorkComponent } from "./CurriculumComponents";
import { EducationComponent } from "./CurriculumComponents";
import { useRef } from "react";
import html2pdf from "html2pdf.js/dist/html2pdf.bundle.min.js";

function CurriculumTemplate({
  savedData,
  savedSkills,
  savedLang,
  savedEducation,
  savedExperience,
}) {
  const { fullName, jobTitle, email, phone, city, careerSummary } =
    savedData[0];

  const cvRef = useRef();

  const handleDownload = () => {
    const options = {
      margin: 0,
      filename: `${fullName || "John_M_Doe"}_CV.pdf`,
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 3, scrollX: 0, scrollY: 0 },
      jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(cvRef.current).save();
  };

  return (
    <div className="flex flex-col">
      <div className="shadow-lg border border-gray-200 bg-white" ref={cvRef}>
        <div className="grid grid-rows-4 h-auto">
          <div className="bg-pale-yellow text-black p-6 row-span-1 flex justify-between items-center">
            <div className="mr-14">
              <h1 className="text-5xl font-bold text-black	leading-snug text-center">
                {!fullName ? "John M. Doe" : fullName}
                {/* John M. Doe */}
              </h1>
              <h2 className="text-black italic">
                {!jobTitle ? "Software Engineer" : jobTitle}
                {/* Software Engineer */}
              </h2>
            </div>
            <div className="text-sm text-center w-8/12">
              <h2 className="text-black font-bold uppercase text-center">
                Profile
              </h2>
              <p className="mt-4">
                {!careerSummary
                  ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia necessitatibus aut accusamus! Adipisci voluptas cumque deserunt delectus repellat temporibus voluptates nam vel nisi sequi doloribus sit alias illo, illum officia."
                  : careerSummary}
                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
                deleniti perferendis, quaerat, blanditiis tempore aperiam
                necessitatibus officiis numquam molestias voluptatum architecto,
                quam incidunt eaque optio quo eum facere sunt? Non! */}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 bg-light-yellow px-6 py-12 text-black row-span-4">
            <div className="space-y-4 text-md col-span-1">
              <div className="font-bold uppercase border-brown-500 border-b-4">
                Languages
              </div>
              <ul className="list-disc pl-4 p-8">
                {savedLang.length > 0 ? (
                  <HandleLang savedLang={savedLang} />
                ) : (
                  <>
                    <li>English</li>
                    <li>Portuguese</li>
                    <li>Spanish</li>
                  </>
                )}
              </ul>

              <div className="font-bold uppercase mt-8 border-brown-500 border-b-4">
                Key Skills
              </div>
              <ul className="list-disc pl-4">
                {savedSkills.length > 0 ? (
                  <HandleSkills savedSkills={savedSkills} />
                ) : (
                  <>
                    <li>Excellent listener</li>
                    <li>Friendly & courteous</li>
                    <li>Poised under pressure</li>
                    <li>Staff training & coaching</li>
                    <li>Recruiting & hiring talent</li>
                    <li>Quality assurance</li>
                    <li>Verbal communicator</li>
                  </>
                )}
              </ul>
            </div>

            <div className="col-span-2 ml-14">
              <div className="font-bold uppercase border-solid border-brown-500 border-b-4">
                Work Experience
              </div>
              <div className="mt-4 space-y-6">
                {savedExperience.length == 0 ? (
                  <WorkComponent />
                ) : (
                  <HandleWorkExperience savedExperience={savedExperience} />
                )}
              </div>

              <div>
                <div className="text-md font-bold uppercase mt-8">
                  Education
                </div>

                {savedEducation.length == 0 ? (
                  <EducationComponent />
                ) : (
                  <HandleEducation savedEducation={savedEducation} />
                )}
              </div>
            </div>
          </div>
          <div className=" bg-pale-yellow text-black pt-4 pb-4">
            <div className="flex justify-around">
              <Contact
                IconComponent={CiPhone}
                label={!phone ? "555-555-22" : phone}
                // label={"555-555-22"}
              />
              <Contact
                IconComponent={CiMail}
                label={!email ? "john_doe@gmail.com" : email}
                // label={"john_doe@gmail.com"}
              />
              <Contact
                IconComponent={CiLocationOn}
                label={!city ? "New York" : city}
                // label={"New York"}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handleDownload}
        className="mt-6 px-4 py-2 border  bg-green-500 text-white rounded"
      >
        Download PDF
      </button>
    </div>
  );
}

function Contact({ IconComponent, label }) {
  return (
    <>
      <div className="flex items-center text-lg gap-1">
        <IconComponent />
        <p>{label}</p>
      </div>
    </>
  );
}

function HandleSkills({ savedSkills }) {
  return (
    <>
      {savedSkills.map((skill) => (
        <li key={skill.id}>{skill.field}</li>
      ))}
    </>
  );
}

function HandleLang({ savedLang }) {
  return (
    <>
      {savedLang.map((lang) => (
        <li key={lang.id}>
          {lang.language} ({lang.proficiency})
        </li>
      ))}
    </>
  );
}

function HandleEducation({ savedEducation }) {
  return (
    <>
      {savedEducation.map((educ) => (
        <div key={educ.id}>
          <p className="mt-4">
            {educ.diploma}
            <br />
            {educ.school},{" "}
            {educ.endDate == ""
              ? educ.startDate + " (In progress)"
              : educ.startDate + " - " + educ.endDate}
          </p>
        </div>
      ))}
    </>
  );
}
function HandleWorkExperience({ savedExperience }) {
  console.log(savedExperience);
  return (
    <>
      {savedExperience.map((work) => (
        <div key={work.id}>
          <div className="font-semibold">{work.position}</div>
          <div>{work.company}</div>
          <div>
            {work.endDate === ""
              ? work.startDate + " (In progress)"
              : work.startDate + " - " + work.endDate}
          </div>
          <p className="mt-2">{work.careerJourney}</p>
        </div>
      ))}
    </>
  );
}

export default CurriculumTemplate;
