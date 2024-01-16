import React from "react";
import styled from "styled-components";
import { skills } from "../constants/data";
import RevealY from "./Transitions/RevealY";

const StyledSkills = styled.section`
  margin-top: 8rem;
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.primaryAlternate};
  color: white;
  .skills-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 1024px;
    margin: 3rem auto 0 auto;
    gap: 2rem;
    padding: 0 2rem;
    .skill-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .skill-img {
        height: 6rem;
      }
      .skill-name {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 1rem;
      }
    }
  }
`;

const Skills = () => {
  return (
    <StyledSkills id="skills">
      <div className="skills-wrapper">
        <RevealY>
          <div className="section-heading">Skills</div>
        </RevealY>
        <div className="skills-content">
          {skills.map((skill, index) => {
            return (
              <div key={index}>
                <RevealY
                  delay={(index + 1) * 0.1}
                  delayOverlay={(index + 1) * 0.12}
                >
                  <div className="skill-wrapper">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="skill-img"
                    />
                    <p className="skill-name">{skill.name}</p>
                  </div>
                </RevealY>
              </div>
            );
          })}
        </div>
      </div>
    </StyledSkills>
  );
};

export default Skills;
