import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectPage from "./Pages/ProjectPage";
import { Footer } from "./components";
// import { Nav } from "./components";

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
      {/* <Nav /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
        </Routes>
        <GlobalStyles />
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          style={{ width: "200px", textAlign: "center" }}
        />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
