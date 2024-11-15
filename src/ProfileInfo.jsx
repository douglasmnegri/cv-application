import Container from "./html_components/Container.jsx";

function PersonalDetails({
  title,
  placeholder,
  type,
  width,
  name,
  value,
  onChange,
}) {
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
          className={`border-solid border-white border-2 block p-2 ${
            width || "w-[350px]"
          }`}
        />
      </label>
    </div>
  );
}

export default function SignUpForm({ formData, onChange, onSave }) {
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
              onChange={onChange}
            />
            <PersonalDetails
              title="Job Title"
              placeholder="Software Engineer"
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={onChange}
            />
          </div>
          <div className="personal-details">
            <PersonalDetails
              title="Email"
              placeholder="johndoe@mail.com"
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
            />
            <PersonalDetails
              title="Phone"
              placeholder="456 956 232"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
            placeholder="Describe your career journey..."
            className="border-2 border-gray-300 bg-slate-600 bg-opacity-90 h-[150px] p-2 text-white"
          />
        </div>
        <div className="flex justify-end mr-6">
          <button onClick={onSave} className="flex bg-green-500 p-2 text-white">
            SAVE INFORMATION
          </button>
        </div>
      </Container>
    </div>
  );
}
