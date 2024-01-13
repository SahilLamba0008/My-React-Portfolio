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
import { IoArrowUpOutline } from "react-icons/io5";

const StyledHome = styled.section`
  .home {
    position: relative;
  }
  .scroller {
    opacity: 0.2;
    position: fixed;
    z-index: 10;
    right: 2rem;
    bottom: 4rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    height: 3rem;
    width: 3rem;
    border-radius: 100%;
    padding: 1px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    border: 3px solid rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  .scroller:hover {
    opacity: 1;
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <div className="home" id="home">
        <a href="#home">
          <button className="scroller">
            <IoArrowUpOutline size={30} />
          </button>
        </a>
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
