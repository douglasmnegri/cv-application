import CurriculumTemplate from "./html_components/CurriculumTemplate";
import SignUpForm from "./profile-information/ProfileInfo";
import HandleProfileInfo from "./profile-information/HandleProfileInfo";
import Skills from "./skills/Skills";
import HandleSkills from "./skills/HandleSkills";
import Languages from "./languages/Languages";
import HandleLang from "./languages/HandleLang";
import Education from "./education/Education";
import HandleEducation from "./education/HandleEducation";

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
    handleDeleteLang,
  } = HandleLang();

  const { field, savedSkills, handleInputField, handleSkills, handleDelete } =
    HandleSkills();

  const { handleInputFields, handleEducation, educationFields, fields, saveEducation } =
    HandleEducation();

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
      <Education
        educationFields={educationFields}
        fields={fields}
        saveEducation={saveEducation}
        onChangeFields={handleInputFields}
        handleEducation={handleEducation}
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
