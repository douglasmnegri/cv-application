import SignUpForm from "./profile-information/ProfileInfo";
import Skills from "./skills/Skills";
import Languages from "./languages/Languages";
import CurriculumTemplate from "./html_components/CurriculumTemplate";
import HandleLang from "./languages/HandleLang";
import HandleProfileInfo from "./profile-information/HandleProfileInfo";
import HandleSkills from "./skills/HandleSkills";

function App() {
  const { formData, savedData, handleFormChange, handleSave } =
    HandleProfileInfo();
  const {
    language,
    proficiency,
    savedLanguages,
    handleLanguageChange,
    handleProficiencyChange,
    handleSaveLanguages,
    handleDeleteLang
  } = HandleLang();

  const { field, savedSkills, handleInputField, handleSkills, handleDelete } =
    HandleSkills();

  return (
    <div>
      <SignUpForm
        formData={formData}
        onChange={handleFormChange}
        onSave={handleSave}
      />
      <Skills
        field={field}
        onChange={handleInputField}
        onSave={handleSkills}
        onDelete={handleDelete}
        skills={savedSkills}
      />

      <Languages
        language={language}
        proficiency={proficiency}
        onChangeLang={handleLanguageChange}
        onChangeProficiency={handleProficiencyChange}
        onSaveLang={handleSaveLanguages}
        savedLang={savedLanguages}
        onDeleteLang={handleDeleteLang}
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
