import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <div>
    <div className="bg-slate-600 h-screen text-white p-4">
      <StrictMode>
        <App />
      </StrictMode>
    </div>
  </div>
);
