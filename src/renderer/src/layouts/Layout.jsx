import React from "react";
import TopNav from "../components/topNav/TopNav";
import { Box, Container, useTheme } from "@mui/material";
import ThemeToggleButton from "../components/themeToggleButton/ThemeToggleButton";

export default function Layout({ children }) {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          gap: "10px",
        }}
      >
        <TopNav />
        {children.map((element, key) => (
          <Box
            key={key}
            sx={{
              border: `1px solid ${theme.palette.divider}`,
              boxShadow: `${theme.shadows[5]}`,
              borderRadius: "5px",
              margin: "0 10px",
              padding: "10px 10px",
            }}
          >
            {element}
          </Box>
        ))}
      </Box>
    </>
  );
}
