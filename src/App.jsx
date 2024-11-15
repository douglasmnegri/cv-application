import { useState } from "react";
import SignUpForm from "./ProfileInfo";
import CurriculumTemplate from "./html_components/CurriculumTemplate";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    city: "",
    careerSummary: "",
  });

  const [savedData, setSavedData] = useState([]);

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

  return (
    <div>
      <SignUpForm
        formData={formData}
        onChange={handleFormChange}
        onSave={handleSave}
      />
      <CurriculumTemplate savedData={savedData} />
    </div>
  );
}

export default App;
