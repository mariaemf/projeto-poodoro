import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./assets/styles/themes/default";
import { GlobalStyle } from "./assets/styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
