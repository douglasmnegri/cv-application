import Container from "./html_components/Container";

function EducationFields() {
  const educationFields = [
    { label: "Position", type: "text" },
    { label: "Company", type: "text" },
    { label: "Start date of Contract", type: "number" },
    { label: "End date of Contract", type: "number" },
  ];
  return (
    <div className="flex flex-col m-4 p-4 gap-4">
        {educationFields.map((content, index) => (
            <label key={index}>
            {content.label}
            <input type={content.type} name={content.name} className="block" />
          </label>
        ))}
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
