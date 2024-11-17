
import Container from "./html_components/Container";

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
      </Container>
    </>
  );
}
