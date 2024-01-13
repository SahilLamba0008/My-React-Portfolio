import React from "react";
import {
  About,
  Contact,
  Footer,
  Hero,
  Nav,
  Projects,
  Skills,
} from "../components";
import styled from "styled-components";

const StyledHome = styled.section``;

const Home = () => {
  return (
    <StyledHome>
      <div className="home">
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </StyledHome>
  );
};

export default Home;
