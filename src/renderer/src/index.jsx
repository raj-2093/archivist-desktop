import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import ThemeToggleProvider from "./contexts/ThemeToggleProvider";
import { CssBaseline } from "@mui/material";

const root = createRoot(document.getElementById("root"));

root.render(
  <ThemeToggleProvider>
    <CssBaseline />
    <App />
  </ThemeToggleProvider>
);
