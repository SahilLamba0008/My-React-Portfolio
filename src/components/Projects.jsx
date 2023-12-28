import React from "react";
import styled from "styled-components";
import { projects } from "../constants/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const StyledProjects = styled.section`
  margin-top: 10rem;
  padding: 5rem 0%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  .projects-wrapper {
    .projects-content {
      margin-top: 3rem;
      padding: 0 2rem;

      .project-container {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        background-color: #031d3e;
        max-width: 1024px;
        margin: 2rem auto;
        border-radius: 1rem;
        padding: 1.5rem 2rem;
        .project-left {
          flex: 0.6;
        }
        .project-img {
          height: 20rem;
        }
        .project-right {
          flex: 1;
          /* background-color: #020d32; */
          height: 100%;
          width: 100%;
          .links {
            button {
              margin-right: 1rem;
              margin-bottom: 0.5rem;
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
        }
        .skills-container {
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
    }
  }
`;

const Projects = () => {
  return (
    <StyledProjects>
      <div className="projects-wrapper">
        <div className="section-heading">Projects</div>
        <div className="projects-content">
          <Carousel
            showArrows={false}
            infiniteLoop={true}
            useKeyboardArrows={true}
            showThumbs={false}
            autoPlay={true}
            verticalSwipe={true}
            showStatus={false}
            swipeable={true}
          >
            {projects.map((project, index) => (
              <div
                className="project-container even"
                key={`${project.name} ${index}`}
              >
                <div className="project-left">
                  <img
                    className="project-img"
                    src={project.image}
                    alt={project.name}
                  />
                </div>
                <div className="project-right">
                  <div className="project-title">{project.name}</div>
                  <p className="project-description">{project.description}</p>
                  <div className="skills-container">
                    {project.skills.map((skill, index) => (
                      <span
                        className="skill"
                        key={`${project.name} ${skill} ${index}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="links">
                    <button className="btn">Repo</button>
                    <button className="btn">Video</button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </StyledProjects>
  );
};

export default Projects;
