import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoArrowUpOutline } from "react-icons/io5";
import styled from "styled-components";
import { About, Contact, Hero, Nav, Projects, Skills } from "../components";

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
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1px;
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    border: 3px solid rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    @media (max-width: ${({ theme }) => theme.screens.sm}) {
      display: none;
  }
  }
  .scroller:hover {
    opacity: 1;
  }
`;

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeInAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 0.2, transition: { duration: 2 } },
  };

  return (
    <StyledHome>
      <div className="home" id="home">
        <div>
          {scrollY > 0 && (
            <motion.a href="#home">
              <motion.button
                className="scroller"
                whileHover={{ scale: 1.1, opacity: 1 }} // Set opacity to 1 during hover
                whileTap={{ scale: 0.1 }}
                {...fadeInAnimation}
              >
                <IoArrowUpOutline size={35} />
              </motion.button>
            </motion.a>
          )}
        </div>
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        {/* <Footer /> */}
      </div>
    </StyledHome>
  );
};

export default Home;
