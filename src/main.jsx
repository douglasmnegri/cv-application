import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/roboto";
import ToggleComponents from "./html_components/Button";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToggleComponents />
  </StrictMode>
);
