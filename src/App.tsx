import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Button } from "./assets/Button";
import { defaultTheme } from "./assets/styles/themes/default";
import { GlobalStyle } from "./assets/styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />
      <GlobalStyle />
    </ThemeProvider>
  );
}
