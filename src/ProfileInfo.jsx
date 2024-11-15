import { useState } from "react";
import Container from "./html_components/Container.jsx";

function PersonalDetails({ title, placeholder, type, width, name, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="text-l">
        {title}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`border-solid border-white border-2 block p-2 ${width || "w-[350px]"}`}
        />
      </label>
    </div>
  );
}

function SignUpForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    city: "",
    careerSummary: ""
  });
  const [savedData, setSavedData] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function handleSave() {
    setSavedData((prevData) => [...prevData, formData]);
    console.log(savedData); 
    setFormData({ fullName: "", jobTitle: "", email: "", phone: "", city: "", careerSummary: "" });
  }

  return (
    <div>
      <h1>Personal Information</h1>
      <Container>
        <div className="flex justify-around m-2 p-2 gap-2">
          <div className="personal-details">
            <PersonalDetails
              title="Full Name"
              placeholder="John Doe"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            <PersonalDetails
              title="Job Title"
              placeholder="Software Engineer"
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </div>
          <div className="personal-details">
            <PersonalDetails
              title="Email"
              placeholder="johndoe@mail.com"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <PersonalDetails
              title="Phone"
              placeholder="456 956 232"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-start ml-5 p-2 gap-2">
          <PersonalDetails
            title="City"
            placeholder="New York"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            width="w-[740px]"
          />
        </div>
        <div className="flex flex-col justify-center align-middle m-8">
          <label htmlFor="career-summary" className="text-white">
            Describe your professional experience
          </label>
          <textarea
            id="career-summary"
            name="careerSummary"
            value={formData.careerSummary}
            onChange={handleChange}
            placeholder="Describe your career journey..."
            className="border-2 border-gray-300 bg-slate-600 bg-opacity-90 h-[150px] p-2 text-white"
          />
        </div>
        <div className="flex justify-end mr-6">
          <button onClick={handleSave} className="flex bg-green-500 p-2 text-white">
            SAVE INFORMATION
          </button>
        </div>
      </Container>
    </div>
  );
}

export default SignUpForm;
