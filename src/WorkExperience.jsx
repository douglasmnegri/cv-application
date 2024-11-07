import Container from "./html_components/Container";

function WorkFields() {
  const educationFields = [
    { label: "Position", type: "text" },
    { label: "Company", type: "text" },
    { label: "Start date of Contract", type: "number" },
    { label: "End date of Contract", type: "number" },
  ];
  return (
    <div className="flex flex-start m-4">
      <div className="flex-col gap-4">
        {educationFields.map((content, index) => (
          <label key={index}>
            {content.label}
            <input
              type={content.type}
              name={content.name}
              className="block w-[300px] mb-4"
            />
          </label>
        ))}{" "}
        <textarea
          id="career-summary"
          placeholder="Describe your career journey..."
          className="border-2 border-gray-300 bg-slate-600 bg-opacity-90 w-[300px] h-[150px] text-white"
        />
      </div>
    </div>
  );
}
function WorkExperience() {
  return (
    <>
      <h1>Work Experience</h1>
      <Container>
        <WorkFields />
      </Container>
    </>
  );
}

export default WorkExperience;
