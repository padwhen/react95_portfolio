import React from "react";
import { GlobalStyle, ThemeProvider } from "@react95/core";
import { Desktop } from "./components/desktop";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <GlobalStyle />
          <Desktop />
      </ThemeProvider>      
    </div>
  )
}

export default App;