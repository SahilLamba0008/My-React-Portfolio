import React, { useState } from "react";
import styled from "styled-components";
import resume from "./docs/Sahil_Resume.pdf";
import RevealY from "./Transitions/RevealY";
import RevealX from "./Transitions/RevealX";

const StyledHero = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: 2rem;
  .hero-wrapper {
    color: ${({ theme }) => theme.colors.textPrimary};
    width: 100%;
    padding: 0 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .hero-left {
      padding: 0 1rem;
      h1 {
        font-size: 4rem;
        line-height: 5rem;
        span {
          color: ${({ theme }) => theme.colors.secondary};
        }
      }
      p {
        font-size: 1rem;
        margin-top: 1rem;
        color: ${({ theme }) => theme.colors.textSecondary};
      }
      .cta {
        display: flex;
        align-items: center;
        gap: 2rem;
        font-size: 1rem;
        margin-top: 2.5rem;
        white-space: nowrap;
        .btn-cta {
          cursor: pointer;
          text-decoration: underline;
          color: white;
          i {
            margin-left: 0.3rem;
            transition: margin-left 0.3s ease;
          }
          &:hover i {
            margin-left: 0.7rem;
          }
        }
      }
    }
    .hero-right {
      .hero-img {
        height: 35rem;
      }
    }
    @media (max-width: ${({ theme }) => theme.screens.lg}) {
      .hero-right {
        .hero-img {
          height: 25rem;
        }
      }
    }
    @media (max-width: ${({ theme }) => theme.screens.sm}) {
      flex-direction: column;
      .hero-right {
        .hero-img {
          height: 25rem;
        }
      }
    }
    @media (max-width: ${({ theme }) => theme.screens.xs}) {
      padding: 0 1rem;
      .hero-left {
        .cta {
          flex-direction: column;
        }
      }
      .hero-right {
        .hero-img {
          height: 20rem;
        }
      }
    }
  }
`;
const Hero = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(true);

    // After 500 milliseconds, remove the 'clicked' class
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };
  return (
    <StyledHero id="hero">
      <div className="hero-wrapper max-width">
        <div className="hero-left">
          <h1>
            <RevealY>Hi, I'm</RevealY>
          </h1>
          <h1>
            <RevealY>
              <span>Sahil Lamba</span>
            </RevealY>
          </h1>
          <RevealY>
            <p>
              Passionate Full Stack Developer Ready to Craft Digital Experiences
              with a Fresh Perspective.
            </p>
          </RevealY>
          <div className="cta">
            <RevealY width={"fit-content"}>
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                download="Sahil_Resume.pdf"
              >
                <button
                  className={`btn ${isClicked ? "clicked" : ""}`}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                >
                  Download CV <i className="fa-solid fa-arrow-down"></i>
                </button>
              </a>
            </RevealY>
            <RevealY>
              <a href="#about">
                <span className="btn-cta">
                  Know more <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            </RevealY>
          </div>
        </div>
        <div className="hero-right">
          <RevealX direction={"from-right"}>
            <img src="/assets/img1.png" alt="hero" className="hero-img" />
          </RevealX>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
