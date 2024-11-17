import Container from "../html_components/Container";

export default function Skills({ field, onChange, onSave }) {
  return (
    <>
      <h1>Skills</h1>
      <Container>
        <div className="flex justify-center m-4 border-b-2">
          <div>
            <label>
              <input
                className=" w-[300px] h-[30px] m-4"
                type="text"
                name="skills"
                value={field}
                placeholder="Javascript"
                onChange={onChange}
              />
            </label>
            <button onClick={onSave} className="bg-green-500">
              Add Experience
            </button>
          </div>
        </div>
        {/* <div className={`m4 ${skills.length < 1 ? "hidden" : "block"}`}>
          <h2>Saved Education</h2>
          <div className="flex flex-wrap justify-center align-middle">
            {skills.map((field, index) => (
              <PrintSkills key={index} field={field} />
            ))}
          </div>
        </div> */}
      </Container>
    </>
  );
}

// function PrintSkills({ field, onDelete }) {
//   return (
//     <div className="relative border-2 border-solid rounded border-white bg-white text-black mb-2 m-4 p-4">
//       <p>{field}</p>
//       <button
//         onClick={onDelete}
//         className="absolute top-[-12px] right-[-12px] text-red-500 font-bold text-xs hover:text-red-700 py-1 px-2"
//       >
//         X
//       </button>
//     </div>
//   );
// }
