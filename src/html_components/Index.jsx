import Languages from "../Languages";
import WorkExperience from "../WorkExperience";
import Education from "../Education";
import Skills from "../Skills";
import CurriculumTemplate from "./CurriculumTemplate";
import App from "../App";
import { useState } from "react";

const components = [
  App,
  Languages,
  WorkExperience,
  Education,
  Skills,
  CurriculumTemplate,
];
export default function ToggleComponents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    console.log(currentIndex);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1) % components.length);
  };
  const CurrentComponent = components[currentIndex];

  return (
    <div>
      <CurrentComponent />
      <button
        onClick={() =>
          currentIndex === 0 ? console.log("Button Disabled") : handlePrevious()
        }
        className="m-4"
      >
        Previous Component
      </button>
      <button
        onClick={() =>
          currentIndex === components.length - 1
            ? console.log("Button Disabled")
            : handleNext()
        }
        disabled={currentIndex === components.length - 1}
      >
        Next Component
      </button>
    </div>
  );
}
