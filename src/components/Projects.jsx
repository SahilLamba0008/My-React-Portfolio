import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../constants/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import RevealY from "./Transitions/RevealY";
import RevealOpacity from "./Transitions/RevealOpacity";
import { BsStars } from "react-icons/bs";
import RevealX from "./Transitions/RevealX";
import { Link } from "react-router-dom";

const StyledProjects = styled.section`
  margin-top: 10rem;
  padding: 5rem 0%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  .projects-wrapper {
    .projects-content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-top: 3rem;
      padding: 0 10rem;
      .project-card {
        margin: 0 1rem;
      }
      .project-container {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        /* background-color: #031d3e; */
        max-width: 1024px;
        margin: 2rem auto;
        margin-bottom: 4rem;
        border-radius: 1rem;
        .project-left {
          width: 100%;
        }
        .project-img-container {
          position: relative;
          border-radius: 1rem;
          height: 15rem;
          width: 100%;
          background-color: #fff;
        }
        .project-img-container:hover .project-img {
          cursor: pointer;
          top: 48%;
          left: 52%;
          transform: translate(-50%, -11%) rotate(3deg);
          scale: 1.08;
        }
        .project-img {
          /* height: 100%; */
          width: 80%;
          margin: 0 auto;
          object-fit: contain;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -10%) rotate(1deg);
          /* transform: rotate(1deg); */
          z-index: 0;
          padding: 0.5rem;
          border-radius: 0.8rem;
          background-color: #000;
          transition: all 0.2s ease-in-out;
        }
        .project-right {
          flex: 1;
          /* background-color: #020d32; */
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          padding: 1rem 0rem;
          .links {
            align-self: flex-start;
            button {
              margin: 1rem 0.5rem 0 0;
            }
          }
        }
        .project-title {
          font-weight: bold;
          font-size: 1.8rem;
        }
        .project-description {
          color: ${({ theme }) => theme.colors.textSecondary};
          font-size: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-align: left;
        }
        /* .skills-container {
          margin: 1rem 0;
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;

          .skill {
            background-color: cyan;
            padding: 0.5rem 1rem;
            border-radius: 30px;
            color: black;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
          }
        } */
        .skills-container-2 {
          margin: 1rem 0;
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;

          .skill-2 {
            border-radius: 30px;
            color: black;
            background-color: cyan;
            padding: 0.2rem 0.8rem;
            border-radius: 30px;
            font-weight: bold;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
          }
        }
        @media (max-width: ${({ theme }) => theme.screens.sm}) {
          flex-direction: column;
        }
        @media (max-width: ${({ theme }) => theme.screens.xs}) {
          .project-img {
            height: 15rem;
          }
        }
      }
      @media (max-width: ${({ theme }) => theme.screens.sm}) {
        grid-template-columns: repeat(1, 1fr);
        padding: 0 5rem;
      }
      @media (max-width: ${({ theme }) => theme.screens.ss}) {
        padding: 0 1rem;
      }
    }
  }
`;

const Projects = () => {
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
    <StyledProjects id="projects">
      <div className="projects-wrapper">
        <RevealY>
          <div className="section-heading">Projects</div>
        </RevealY>
        <RevealOpacity delay={0.2}>
          <div className="projects-content">
            {/* <Carousel
              showArrows={false}
              infiniteLoop={true}
              useKeyboardArrows={true}
              showThumbs={false}
              autoPlay={true}
              verticalSwipe={true}
              showStatus={false}
              swipeable={true}
            > */}
            {projects.map((project, index) => (
              <div key={`${project.name} ${index}`} className="project-card">
                <div className="project-container">
                  <div className="project-left">
                    <RevealX>
                      <div className="project-img-container">
                        <img
                          className="project-img"
                          src={project.image}
                          alt={project.name}
                        />
                      </div>
                    </RevealX>
                  </div>
                  <div className="project-right">
                    <RevealY>
                      <div className="project-title">{project.name}</div>
                    </RevealY>
                    <div className="skills-container-2">
                      {project.skills.map((skill, index) => (
                        <div key={`${project.name} ${skill} ${index}`}>
                          <RevealY
                            delay={(index + 1) * 0.1}
                            delayOverlay={(index + 1) * 0.12}
                          >
                            <div className="skill-2">
                              {skill}
                              {/* {index < project.skills.length - 1 && ", "} */}
                            </div>
                          </RevealY>
                        </div>
                      ))}
                    </div>
                    <RevealY>
                      <p className="project-description">
                        {project.description}
                      </p>
                    </RevealY>
                    {/* <div className="skills-container">
                      {project.skills.map((skill, index) => (
                        <div key={`${project.name} ${skill} ${index}`}>
                          <RevealY
                            delay={(index + 1) * 0.1}
                            delayOverlay={(index + 1) * 0.12}
                          >
                            <div className="skill">{skill}</div>
                          </RevealY>
                        </div>
                      ))}
                    </div> */}

                    <div className="links">
                      <RevealY>
                        <Link to={project.Link}>
                          <button
                            className={`btn ${isClicked ? "clicked" : ""}`}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                          >
                            Show More
                            <BsStars />
                          </button>
                        </Link>
                      </RevealY>
                      {/* <button className="btn">Repo</button> */}
                      {/* <button className="btn">Video</button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* </Carousel> */}
          </div>
        </RevealOpacity>
      </div>
    </StyledProjects>
  );
};

export default Projects;
