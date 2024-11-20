import CurriculumTemplate from "./html_components/CurriculumTemplate";
import SignUpForm from "./profile_information/ProfileInfo";
import HandleProfileInfo from "./profile_information/HandleProfileInfo";
import Skills from "./skills/Skills";
import HandleSkills from "./skills/HandleSkills";
import Languages from "./languages/Languages";
import HandleLang from "./languages/HandleLang";
import Education from "./education/Education";
import HandleEducation from "./education/HandleEducation";
import WorkExperience from "./work_experience/WorkExperience";
import HandleWorkExperience from "./work_experience/HandleWorkExperience";

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

  const {
    handleInputFields,
    handleEducation,
    deleteEducation,
    educationFields,
    fields,
    savedEducation,
  } = HandleEducation();

  const {
    workFields,
    workedFields,
    savedExperience,
    handleWorkExperience,
    handleWorkFields,
  } = HandleWorkExperience();

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
        savedEducation={savedEducation}
        onChangeFields={handleInputFields}
        handleEducation={handleEducation}
        onDeleteEduc={deleteEducation}
      />
      <WorkExperience
        workFields={workFields}
        workedFields={workedFields}
        handleWorkFields={handleWorkFields}
        handleWorkExperience={handleWorkExperience}
        savedExperience={savedExperience}
      />
      <CurriculumTemplate
        savedData={savedData}
        savedSkills={savedSkills}
        savedLang={savedLanguages}
        savedEducation={savedEducation}
        savedExperience={savedExperience}
      />
    </div>
  );
}

export default App;
