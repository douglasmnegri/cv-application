import { useState } from "react";
import Container from "./html_components/Container";

function ChooseLanguages() {
  const [language, setLanguage] = useState("");
  const [proficiency, setProficiency] = useState("");

  function handleLanguageChange(e) {
    setLanguage(e.target.value);
  }

  function handleProficiencyChange(e) {
    setProficiency(e.target.value);
    console.log(proficiency);
  }

  return (
    <div>
      <label>
        Language
        <input
          type="text"
          name="language"
          value={language}
          onChange={handleLanguageChange}
          className="block border border-gray-300 p-2 mt-1"
        />
      </label>
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
  );
}

function Languages() {
  return (
    <>
      <h1>Languages</h1>
      <Container>
        <div className="flex flex-col justify-between">
          <ChooseLanguages />
        </div>
      </Container>
    </>
  );
}

export default Languages;
