import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/app/App";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
