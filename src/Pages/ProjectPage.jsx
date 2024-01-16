import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../constants/data";
import styled from "styled-components";
import { RiArrowGoBackLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { PiVideoFill } from "react-icons/pi";
import RevealY from "../components/Transitions/RevealY";

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
  .project-img-container {
    width: 100%;
    height: 70vh;
    position: relative;
    .project-cover-text {
      position: absolute;
      font-size: 7rem;
      color: ${({ theme }) => theme.colors.secondary};
      bottom: 3rem;
      left: 3rem;
      font-weight: bold;
      line-height: 0.9;
      opacity: 1;
    }
    .project-img {
      opacity: 0.3;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.4);
    margin-top: 0.5rem;
    margin-right: 10rem;
    font-weight: normal;
  }
  .project-video-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 4rem;
    .project-video {
      width: 70%;
      border-radius: 0.8rem;
      margin: 0 auto;
    }
  }
  /* position: relative;
  .container-1 {
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .container-2 {
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 5rem 0;
    z-index: 2;
  } */
`;

const ProjectPage = () => {
  const { projectId } = useParams();
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
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
      <Link to={"/"}>
        <button className="btn back-btn">
          {/* Go Back{" "} */}
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
            {/* <h1
            style={{ color: "white", fontSize: "3rem", whiteSpace: "nowrap" }}
          >
            {projectData.name}
          </h1> */}
            {/* <h1
            style={{
              color: "white",
              fontSize: "3rem",
              opacity: "0.4",
              marginTop: "-4.2rem",
              textDecoration: "underline",
              textDecorationColor: "cyan",
              textDecorationThickness: "6px",
              whiteSpace: "nowrap",
            }}
          >
            {projectData.name}
          </h1> */}
            <h1 id="project-description">{projectData.description}</h1>
          </div>
          <div className="btn-container">
            {projectData.LiveLink && (
              <Link to={projectData.LiveLink} target="_blank">
                <button className="btn btn-project-description">
                  Live <FaGithub size={20} />
                </button>
              </Link>
            )}
            <Link to={projectData.RepoLink} target="_blank">
              <button className="btn btn-project-description">
                Github <FaGithub size={20} />
              </button>
            </Link>
            {!projectData.LiveLink && (
              <Link to={projectData.VideoLink} target="_blank">
                <button className="btn btn-project-description">
                  Video <PiVideoFill size={23} />
                </button>
              </Link>
            )}
          </div>
        </div>
        <div className="project-key-points">
          <div className="section-heading">
            <RevealY>Key Points</RevealY>
          </div>
          <p>{projectData.keyPoints}Kuch Bhi</p>
        </div>
        <div className="project-video">
          <div className="section-heading">
            <RevealY>Video</RevealY>
            <div></div>
          </div>
          <div className="project-video-container">
            <video src="path/to/video.mp4" controls className="project-video" />
          </div>
        </div>
      </div>
    </StyledProjectPage>
  );
};

export default ProjectPage;
