import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./assets/styles/themes/default";
import { GlobalStyle } from "./assets/styles/global";
import { CyclesContextProvider } from "../src/Context/CyclesContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
