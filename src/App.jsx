import { useState } from "react";

import PersonalDetails from "./ProfileInfo";

function SignUpForm() {
  return (
    <div>
      <h1>Personal Information</h1>
      <div className="border-2 border-gray-300 bg-gray-800 bg-opacity-80 w-[800px] h-[600px] shadow-md">
        <div className="flex justify-around m-2 p-2 gap-2">
          <div className="personal-details">
            <PersonalDetails
              title="Full Name"
              placeholder="Douglas"
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
      </div>
    </div>
  );
}

export default SignUpForm;
