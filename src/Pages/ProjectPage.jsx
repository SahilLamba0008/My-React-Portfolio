import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../constants/data";
import styled from "styled-components";
import { RiArrowGoBackLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { PiVideoFill } from "react-icons/pi";
import RevealY from "../components/Transitions/RevealY";
import KeyPoints from "../components/KeyPoints";

const StyledProjectPage = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  .back-btn {
    top: 1rem;
    right: 1rem;
    opacity: 0.7;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 3rem;
    transition: opacity 0.3s ease-in;
    z-index: 10;
  }
  .back-btn:hover {
    opacity: 1;
  }
  .conatiner-1 {
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 70%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  .project-img-container {
    width: 100%;
    height: 70vh;
    position: relative;
    .project-img {
      opacity: 0.5;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .project-cover-text {
      position: absolute;
      font-size: 7rem;
      color: ${({ theme }) => theme.colors.secondary};
      bottom: 3rem;
      left: 3rem;
      font-weight: bold;
      line-height: 0.9;
      opacity: 1;
      margin-right: 1rem;
    }
  .btn-container,
  .btn-project-description {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .project-hero {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 2rem;
  }

  h1 > span#project {
    color: ${({ theme }) => theme.colors.secondary};
    border-bottom: 4px solid ${({ theme }) => theme.colors.secondary};
  }
  h1#project-description {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.4);
    margin-top: 0.5rem;
    margin-right: 8rem;
    font-weight: normal;
  }
  .section-heading{
    margin-top: 3rem;
  }
  .skills-container-2 {
    margin: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    
    .skill-2 {
      border-radius: 30px;
      color: black;
      background-color: cyan;
      padding: 1rem 2rem;
      border-radius: 30px;
      font-weight: bold;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    }
    .skill-wrapper{
      padding: 0.1rem;
      background-color: #fff;
      border-radius: 0.8rem;
      /* box-shadow: -5px -5px 9px #ffffff73, 5px 5px 7px #5e687949; */
    }
    .skill-img{
      aspect-ratio: 4/3;
      object-fit: contain;
      width: 6rem;
      height: 100%;
      padding: 0.7rem;
      border-radius: 0.8rem;
      background-color: #fff;
      box-shadow: inset -5px -5px 9px #ffffff73, inset 5px 5px 7px #5e687949;
    }
  }

  .project-video-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 4rem;
    .project-video {
      width: 75%;
      aspect-ratio: 16/9;
      object-fit: contain;
      border-radius: 0.8rem;
      outline: none;
      border: none;
      margin: 0 auto;
    }
  }
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    .project-cover-text {
      font-size: 5rem;
      left: 1rem;
    }
    .project-img-container {
      height: 40vh;
    }
    .project-hero {
      flex-direction: column;
    }
    h1#project-description {
      margin-right: 0;
    }
    .project-video-container {
      .project-video {
        width: 90%;
      }
    }
    .back-btn{
      opacity: 1;
    }
  }
`;

const ProjectPage = () => {
  const { projectId } = useParams();
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (projectId) {
      const project = projects.find((project) => project.id === projectId);
      if (project) {
        setProjectData(project);
      } else {
        console.log("Project not found");
      }
    }
  }, [projectId]);

  console.log("Project found", projectData);

  const coverName = projectData.name;
  const coverNameArray = coverName?.split(" ").join("<br>");
  console.log(coverNameArray);

  return (
    <StyledProjectPage>
      <Link to={"/#projects"}>
        <button className="btn back-btn">
          <div>
            <RiArrowGoBackLine size={27} />
          </div>
        </button>
      </Link>
      <div className="container-1">
        <div className="project-img-container">
          <div
            className="project-cover-text"
            dangerouslySetInnerHTML={{ __html: coverNameArray }}
          ></div>
          <img
            src={projectData.coverImage}
            alt="project"
            className="project-img"
          />
        </div>
      </div>
      <div className="container-2">
        <div className="project-hero max-width">
          <div>
            <h1 id="project-description">{projectData.description}</h1>
          </div>
          <div className="btn-container">
            {projectData.LiveLink && (
              <Link
                to={projectData.LiveLink}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <button className="btn btn-project-description">
                  Live <FaGithub size={20} />
                </button>
              </Link>
            )}
            <Link
              to={projectData.RepoLink}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <button className="btn btn-project-description">
                Github <FaGithub size={20} />
              </button>
            </Link>
            {!projectData.LiveLink && (
              <Link to={projectData.VideoLink}
              style={{ textDecoration: "none" }}>
                <button className="btn btn-project-description">
                  Video <PiVideoFill size={23} />
                </button>
              </Link>
            )}
          </div>
        </div>
        <div className="section-heading section-heading-skills">
          <RevealY>Skills</RevealY>
        </div>
        <div className="skills-container-2">
          {projectData.skillsSvg?.map((skill, index) => (
            <div key={`${projectData.name} ${skill} ${index}`} className="skill-wrapper">
              <RevealY
                delay={(index + 1) * 0.2}
                delayOverlay={(index + 1) * 0.15}
              >
                <img src={skill} alt={skill} className="skill-img"/>
                {/* <div className="skill-2">{skill}</div> */}
              </RevealY>
            </div>
          ))}
        </div>
        <div className="project-key-points">
          <div className="section-heading">
            <RevealY>Key Points</RevealY>
            <KeyPoints keyPoints={projectData.keyPoints} />
          </div>
        </div>
        <div className="project-video">
          <div className="section-heading">
            <RevealY>Video</RevealY>
            <div></div>
          </div>
          <div className="project-video-container">
            <iframe
              id="project-video"
              title="project-video"
              src={projectData.VideoLink}
              allowFullScreen
              className="project-video"
            />
          </div>
        </div>
      </div>
    </StyledProjectPage>
  );
};

export default ProjectPage;
