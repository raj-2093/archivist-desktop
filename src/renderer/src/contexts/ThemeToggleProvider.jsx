import { createContext, useContext, useState } from "react";

const ThemeToggleContext = createContext();

import React from "react";
import { darkTheme, lightTheme } from "../theme/theme";

export default function ThemeToggleProvider(props) {
  const [theme, setTheme] = useState(lightTheme);

  const themeToggle = () => {
    setTheme(theme == lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeToggleContext.Provider value={{ theme, themeToggle }}>
      {props.children}
    </ThemeToggleContext.Provider>
  );
}

export const useThemeToggle = () => useContext(ThemeToggleContext);
