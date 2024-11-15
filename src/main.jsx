import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CurriculumTemplate from "./html_components/CurriculumTemplate";
import "./index.css";
import "@fontsource/roboto";
import ToggleComponents from "./html_components/Index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToggleComponents />
  </StrictMode>
);
