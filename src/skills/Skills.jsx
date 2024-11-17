import Container from "../html_components/Container";

export default function Skills({ field, onSave, onChange, onDelete, skills }) {
  return (
    <>
      <h1>Skills</h1>
      <Container>
        <div className="flex justify-center m-4 border-b-2">
          <div>
            <label>
              <input
                className="w-[300px] h-[30px] m-4"
                type="text"
                name="skills"
                value={field}
                placeholder="JavaScript"
                onChange={onChange}
              />
            </label>
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
      <button
        onClick={del} // Call the `del` function (which includes the `id`)
        className="absolute top-[-12px] right-[-12px] text-red-500 font-bold text-xs hover:text-red-700 py-1 px-2"
      >
        X
      </button>
    </div>
  );
}
