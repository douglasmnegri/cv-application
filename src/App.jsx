import { useState } from "react";
import SignUpForm from "./ProfileInfo";
import Skills from "./Skills";
import Languages from "./Languages";
import CurriculumTemplate from "./html_components/CurriculumTemplate";
import { v4 as uuidv4 } from "uuid";

function useLanguages() {
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

  return {
    language,
    proficiency,
    savedLanguages,
    handleLanguageChange,
    handleProficiencyChange,
    handleSaveLanguages,
  };
}
function useSignUpForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    city: "",
    careerSummary: "",
  });

  const [savedData, setSavedData] = useState([formData]);

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSave() {
    setSavedData([formData]);
  }

  return { formData, savedData, handleFormChange, handleSave };
}

function App() {
  const { formData, savedData, handleFormChange, handleSave } = useSignUpForm();
  const {
    language,
    proficiency,
    savedLanguages,
    handleLanguageChange,
    handleProficiencyChange,
    handleSaveLanguages,
  } = useLanguages();

  const [field, setField] = useState("");
  const [savedSkills, setSavedSkills] = useState([]);

  function handleInputField(e) {
    setField(e.target.value);
  }

  function handleSkills() {
    setSavedSkills((prevSkills) => [...prevSkills, field]);
    setField("");
  }

  return (
    <div>
      <SignUpForm
        formData={formData}
        onChange={handleFormChange}
        onSave={handleSave}
      />
      <Skills field={field} onChange={handleInputField} onSave={handleSkills} />
      <Languages
        language={language}
        proficiency={proficiency}
        onChangeLang={handleLanguageChange}
        onChangeProficiency={handleProficiencyChange}
        onSaveLang={handleSaveLanguages}
      />
      <CurriculumTemplate
        savedData={savedData}
        savedSkills={savedSkills}
        savedLang={savedLanguages}
      />
    </div>
  );
}

export default App;

// function handleDeleteLanguage(id) {
//   setSavedLanguages((prevSavedLanguages) =>
//     prevSavedLanguages.filter((lang) => lang.id !== id)
//   );
// }
