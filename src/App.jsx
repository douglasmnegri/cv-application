import Container from "./html_components/Container";
import PersonalDetails from "./ProfileInfo";

function SignUpForm() {
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
              width="w-[350px]"
            />
            <PersonalDetails
              title="Job Title"
              placeholder="Software Engineer"
              type="text"
            />
          </div>
          <div className="personal-details">
            <PersonalDetails
              title="Email"
              placeholder="johndoe@mail.com"
              type="email"
            />
            <PersonalDetails
              title="Phone"
              placeholder="456 956 232"
              type="tel"
            />
          </div>
        </div>
        <div className="flex justify-start ml-5 p-2 gap-2">
          <PersonalDetails
            title="City"
            placeholder="New York"
            type="text"
            width="w-[740px]"
          />
        </div>
        <div className="flex flex-col justify-center align-middle m-8">
          <label htmlFor="career-summary" className="text-white">
            Describe your professional experience
          </label>
          <textarea
            id="career-summary"
            placeholder="Describe your career journey..."
            className="border-2 border-gray-300 bg-slate-600 bg-opacity-90 h-[150px] p-2 text-white"
          />
        </div>
      </Container>
    </div>
  );
}

export default SignUpForm;
