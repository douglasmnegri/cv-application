import Container from "./html_components/Container";

export default function Languages({
  language,
  proficiency,
  onChangeLang,
  onChangeProficiency,
  onSaveLang,
}) {
  return (
    <>
      <h1>Languages</h1>
      <Container>
        <div
          className="flex justify-around align-bottom border-b-2

 m-4 p-4 items-end"
        >
          <div className="flex flex-col">
            <label>
              Language
              <input
                type="text"
                name="language"
                value={language}
                placeholder="English"
                onChange={onChangeLang}
                className="block border border-gray-300 p-2 mt-1"
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label>
              Proficiency
              <select
                name="proficiency"
                value={proficiency}
                onChange={onChangeProficiency}
                className="block border border-gray-300 p-2 mt-1 text-black"
              >
                <option value="">Select Proficiency</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Fluent">Fluent</option>
              </select>
            </label>
          </div>
          <div className="flex items-end">
            <button
              className="border p-2 m-2 bg-green-500 text-white rounded"
              onClick={onSaveLang}
            >
              Add Language
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
