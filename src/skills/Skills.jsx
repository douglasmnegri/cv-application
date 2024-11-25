import Container from "../html_components/Container";
import Button from "../html_components/DeleteButton";

export default function Skills({ field, onSave, onChange, onDelete, skills }) {
  return (
    <>
      <Container>
        <h1>Skills</h1>
        <div className="flex justify-center border-b-2 input-container">
          <div>
            <label>
              <input
                className="block border border-gray-300 mt-1 m-4"
                type="text"
                name="skills"
                value={field}
                placeholder="JavaScript"
                onChange={onChange}
              />
            </label>
          </div>
          <div className="flex items-center">
            <button onClick={onSave} className="bg-green-500">
              Add Skill
            </button>
          </div>
        </div>
        <div className={`m4 ${skills.length < 1 ? "hidden" : "block"}`}>
          <h2>Saved Skills</h2>
          <div className="flex flex-wrap justify-center align-middle">
            {skills.map((skill) => (
              <PrintSkills
                key={skill.id}
                id={skill.id}
                skill={skill.field}
                del={() => onDelete(skill.id)} // Pass `id` to `onDelete`
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

function PrintSkills({ skill, del }) {
  return (
    <div className="relative border-2 border-solid rounded border-white bg-white text-black mb-2 m-4 p-4">
      <p>{skill}</p>
      <Button onClick={del} />
    </div>
  );
}
