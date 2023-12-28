import React from "react";
import {
  About,
  Contact,
  Footer,
  Hero,
  Nav,
  Projects,
  Skills,
} from "./components/index";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyle";

const theme = {
  colors: {
    primary: "#00040f",
    primaryAlternate: "#011420",
    secondary: "#00f6ff",
    textPrimary: "rgba(255, 255, 255, 1)",
    textSecondary: "rgba(225, 255, 255, 0.5)",
  },
  screens: {
    xs: "426px",
    ss: "620px",
    sm: "768px",
    lg: "1024px",
    xl: "1700px",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
