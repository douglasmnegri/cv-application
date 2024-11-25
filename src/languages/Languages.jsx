import Container from "../html_components/Container";
import Button from "../html_components/DeleteButton";

export default function Languages({
  language,
  proficiency,
  onChangeLang,
  onChangeProficiency,
  onSaveLang,
  savedLang,
  onDeleteLang,
}) {
  return (
    <>
      <Container>
        <h1>Languages</h1>
        <div
          className="flex justify-around border-b-2

 m-4 p-4 items-middle"
        >
          <div className="flex flex-col input-container">
            <label>
              Language
              <input
                type="text"
                name="language"
                value={language}
                placeholder="English"
                onChange={onChangeLang}
                className="block border border-gray-300 w-[100px]"
              />
            </label>
          </div>
          <div className="flex flex-col input-container">
            <label>
              Proficiency
              <select
                name="proficiency"
                value={proficiency}
                onChange={onChangeProficiency}
                className="block border border-gray-300 p-2 mt-1 text-black"
              >
                <option value="">Proficiency</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Fluent">Fluent</option>
              </select>
            </label>
          </div>
          <div className="flex items-center">
            <button className="bg-green-500 text-white" onClick={onSaveLang}>
              Add Language
            </button>
          </div>
        </div>
        <div>
          <h1
            className={`text-white flex justify-center text-center ${
              savedLang.length > 0 ? "block" : "hidden"
            }`}
          >
            Saved Languages
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedLang.map((lang) => (
              <PrintLang
                key={lang.id}
                id={lang.id}
                lang={lang.language}
                proficiency={lang.proficiency}
                del={() => onDeleteLang(lang.id)}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

function PrintLang({ lang, proficiency, del }) {
  return (
    <div className="relative border-2 border-solid rounded border-white bg-gray-500 text-white p-4 m-2 bg-opacity-50">
      <p>
        {lang} ({proficiency})
      </p>

      <Button onClick={del} />
    </div>
  );
}
