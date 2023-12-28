import React from "react";
import styled from "styled-components";

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
  return (
    <StyledHero>
      <div className="hero-wrapper max-width">
        <div className="hero-left">
          <h1>
            Hi, I'm
            <br />
            <span>Sahil Lamba</span>
          </h1>
          <p>
            Passionate Full Stack Developer Ready to Craft Digital Experiences
            with a Fresh Perspective.
          </p>
          <div className="cta">
            <button className="btn">
              Download CV <i className="fa-solid fa-arrow-down"></i>
            </button>
            <span className="btn-cta">
              Know more <i className="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </div>
        <div className="hero-right">
          <img src="/assets/img1.png" alt="hero" className="hero-img" />
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
