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
    deleteWorkExperience
  } = HandleWorkExperience();

  return (
    <div className="grid grid-cols-2 m-4 p-4">
      <div className="col-span-1 flex flex-col gap-4">
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
          onDeleteWork={deleteWorkExperience}
        />
      </div>
      <div className="col-span-1">
        <div className="sticky top-0">
          <CurriculumTemplate
            savedData={savedData}
            savedSkills={savedSkills}
            savedLang={savedLanguages}
            savedEducation={savedEducation}
            savedExperience={savedExperience}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
