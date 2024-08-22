import React from "react";

import Layout from "./layouts/Layout";
import { useThemeToggle } from "./contexts/ThemeToggleProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";

export default function App() {
  const { theme } = useThemeToggle();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <h1>Hello </h1>
          <span>Niche</span>
          <span>Niche2</span>
          <span>Niche3</span>
        </Layout>
      </ThemeProvider>
    </>
  );
}
