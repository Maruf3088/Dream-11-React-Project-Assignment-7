import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToastContainer
      position="top-center"
      draggable
      autoClose={2000}
      theme="colored"
    />
  </StrictMode>
);
