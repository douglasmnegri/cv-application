import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useLanguages() {
  const [language, setLanguage] = useState("");
  const [proficiency, setProficiency] = useState("");
  const [savedLanguages, setSavedLanguages] = useState([]);

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
      setSavedLanguages((prevLang) => [...prevLang, newLang]);
      setLanguage("");
      setProficiency("");
      console.log(savedLanguages);
    }
  }

  function handleDeleteLang(id) {
    setSavedLanguages((prevLang) => prevLang.filter((lang) => lang.id !== id));
  }

  return {
    language,
    proficiency,
    savedLanguages,
    handleLanguageChange,
    handleProficiencyChange,
    handleSaveLanguages,
    handleDeleteLang,
  };
}
