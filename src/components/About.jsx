import React from "react";
import styled from "styled-components";

const StyledAbout = styled.section`
  margin-top: 10rem;
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.primaryAlternate};
  color: white;
  .about-wrapper {
    padding: 0 5rem;
    .about-content {
      margin-top: 4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .about-left {
        .about-img {
          height: 30rem;
        }
      }
      .about-right {
        text-align: center;
        /* flex: 0.8; */
        padding: 0 2rem;
        h1 {
          font-size: 2rem;
          text-align: left;
        }
        p {
          font-size: 1rem;
          color: ${({ theme }) => theme.colors.textSecondary};
          line-height: 1.5rem;
          text-align: left;
          margin-top: 1rem;
        }
        .connection-links {
          display: flex;
          flex-wrap: wrap;
          padding: 0 1rem;
          margin: 2rem 0;
          gap: 4rem;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          font-size: 2rem;
          div {
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
          }
          span {
            font-size: 1rem;
            text-align: center;
            color: ${({ theme }) => theme.colors.textSecondary};
          }
          .connection-icons {
            background-color: ${({ theme }) => theme.colors.secondary};
            height: 60px;
            width: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: black;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            border: 3px solid rgba(0, 0, 0, 0.5);
            cursor: pointer;
          }
        }
      }
    }
    @media (max-width: ${({ theme }) => theme.screens.lg}) {
      .about-content {
        .about-left {
          .about-img {
            height: 25rem;
          }
        }
      }
    }
    @media (max-width: ${({ theme }) => theme.screens.sm}) {
      padding: 0 3rem;
      .about-content {
        flex-direction: column-reverse;
      }
    }
    @media (max-width: ${({ theme }) => theme.screens.xs}) {
      padding: 0;
      .about-content {
        .about-left {
          .about-img {
            height: 20rem;
          }
        }
      }
    }
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <div className="about-wrapper">
        <div className="section-heading">About</div>
        <div className="about-content max-width">
          <div className="about-left">
            <img src="/assets/img3.png" alt="about" className="about-img" />
          </div>
          <div className="about-right">
            <h1>Curious about me? Here you have it :</h1>
            <p>
              I'm Sahil, a passionate self-proclaimed developer specializing in
              full-stack development. My journey as a web developer began in
              2019 during my college years, and my interest in web development
              has since grown. I've explored a range of modern web technologies,
              including JavaScript, React, Express, Node, MongoDB, MySQL,
              Bootstrap, and HTML/CSS. This journey has led me to master
              JavaScript frameworks and other cutting-edge technologies. Over
              time, I've honed my problem-solving skills through coding
              challenges, tackling multiple problems on platforms like LeetCode.
              Simultaneously, I'm particularly passionate about translating
              designs into interactive, pixel-perfect user interfaces.
            </p>
            <p>
              My academic background includes a B.E. in Computer Engineering,
              pursued from Chandigarh University, Mohali. I'm currently actively
              seeking opportunities to contribute my skills and enthusiasm to a
              forward-thinking company.
            </p>
            <p>
              On a final note, Don't hesitate to reach out and say hello. I
              promise, I don't bite 😉
            </p>
            <div className="connection-links">
              <div className="linkedin">
                <i className="fa-brands fa-linkedin-in connection-icons"></i>
                <span>Linkedin</span>
              </div>
              <div className="github">
                <i className="fa-brands fa-github connection-icons"></i>
                <span>Github</span>
              </div>
              <div className="leetcode">
                <i className="fa-solid fa-laptop-code connection-icons"></i>
                <span>LeetCode</span>
              </div>
              <div className="gmail">
                <i className="fa-solid fa-envelope connection-icons"></i>
                <span>Gmail</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
