import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Button } from "./assets/Button";
import { defaultTheme } from "./assets/styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />
    </ThemeProvider>
  );
}
