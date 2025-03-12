import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Make sure the DOM is fully loaded before trying to render
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");

  // Check if the container exists
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error("Failed to find the root element");
  }
});
