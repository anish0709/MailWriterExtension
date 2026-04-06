import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// create root container
const root = document.createElement("div");
root.id = "ai-extension-root";
document.body.appendChild(root);

// render React
ReactDOM.createRoot(root).render(<App />);