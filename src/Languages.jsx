import { useState } from "react";
import Container from "./html_components/Container";
import { v4 as uuidv4 } from "uuid";

function ChooseLanguages({ onSave }) {
  const [language, setLanguage] = useState("");
  const [proficiency, setProficiency] = useState("");

  function handleLanguageChange(e) {
    setLanguage(e.target.value);
  }

  function handleProficiencyChange(e) {
    setProficiency(e.target.value);
  }

  function handleSaveLanguages() {
    if (language && proficiency) {
      const newLang = {
        id: uuidv4(),
        language,
        proficiency,
      };
      onSave(newLang);
      setLanguage("");
      setProficiency("");
    }
  }

  return (
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
          onClick={handleSaveLanguages}
        >
          Add Language
        </button>
      </div>
    </div>
  );
}

function SavedLanguage({ language, proficiency, id, onDelete }) {
  return (
    <>
      <div className="flex justify-start align-bottom m-12 items-end">
        <div className="flex flex-col mr-4 w-[250px]">
          <p>
            <strong>Language:</strong> {language}
          </p>
          <p>
            <strong>Proficiency:</strong> {proficiency}
          </p>
        </div>
        <div>
          <button
            className="border p-2 m-2 bg-red-500 text-white rounded"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

function Languages() {
  const [savedLanguages, setSavedLanguages] = useState([]);

  function handleSaveLanguage(newLang) {
    setSavedLanguages((prevSavedLanguages) => [...prevSavedLanguages, newLang]);
  }

  function handleDeleteLanguage(id) {
    setSavedLanguages((prevSavedLanguages) =>
      prevSavedLanguages.filter((lang) => lang.id !== id)
    );
  }

  return (
    <>
      <h1>Languages</h1>
      <Container>
        <ChooseLanguages onSave={handleSaveLanguage} />
        {savedLanguages.map(({ id, language, proficiency }) => (
          <SavedLanguage
            key={id}
            id={id}
            language={language}
            proficiency={proficiency}
            onDelete={handleDeleteLanguage}
          />
        ))}
      </Container>
    </>
  );
}

export default Languages;
