import { useState } from "react";

export default function PersonalDetails({ title, placeholder, type, width }) {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="mb-4">
    <label className="text-l">
      {title}
      <input
        type={type}
        value={input}
        onChange={handleChange}
        placeholder={placeholder}
        className={`border-solid border-white border-2 block p-2 ${width || "w-[350px]"}`}
        />
    </label>
    </div>
  );
}
