import React, { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "src/theme";

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
