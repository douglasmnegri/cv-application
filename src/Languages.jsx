import { useState } from "react";
import Container from "./html_components/Container";
import { v4 as uuidv4 } from "uuid";

function ChooseLanguages() {
  const [language, setLanguage] = useState("");
  const [proficiency, setProficiency] = useState("");
  const [saveLang, setSaveLang] = useState([]);
  // const [deleteLang, setDeleteLang] = useState("");

  function handleLanguageChange(e) {
    setLanguage(e.target.value);
  }

  function handleProficiencyChange(e) {
    setProficiency(e.target.value);
  }

  function handleSaveLangagues() {
    const newLang = {
      id: uuidv4(),
      language,
      proficiency,
    };

    setSaveLang((prevSaveLang) => [...prevSaveLang, newLang]);
  }

  return (
    <div className="flex justify-around align-bottom border-2 border-solid m-4 p-4 items-end">
      <div className="flex flex-col">
        <label>
          Language
          <input
            type="text"
            name="language"
            value={language}
            placeholder="English"
            onChange={handleLanguageChange}
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
            onChange={handleProficiencyChange}
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
          onClick={handleSaveLangagues}
        >
          Save
        </button>
        <button className="border p-2 m-2 bg-red-500 text-white rounded">
          Delete
        </button>
      </div>
    </div>
  );
}

function Languages() {
  const [addField, setAddField] = useState([]);

  function handleAddLanguage() {
    setAddField((prevAddField) => [
      ...prevAddField,
      <ChooseLanguages key={prevAddField.length} />,
    ]);
  }
  return (
    <>
      <h1>Languages</h1>
      <Container>
        <ChooseLanguages />
        {addField}
        <div className="flex justify-center align-middle">
          <button
            className="border bg-gray-300 text-black rounded"
            onClick={handleAddLanguage}
          >
            +
          </button>
        </div>
      </Container>
    </>
  );
}

export default Languages;
