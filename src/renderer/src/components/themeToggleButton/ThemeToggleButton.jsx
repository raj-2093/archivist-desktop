import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useThemeToggle } from "../../contexts/ThemeToggleProvider";
import { lightTheme } from "../../theme/theme";

export default function ThemeToggleButton() {
  const { theme, themeToggle } = useThemeToggle();
  return (
    <>
      <IconButton onClick={() => themeToggle()}>
        {theme == lightTheme ? <DarkModeRounded /> : <LightModeRounded />}
      </IconButton>
    </>
  );
}
