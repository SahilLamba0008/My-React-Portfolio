import React from "react";
import styled from "styled-components";
import RevealY from "./Transitions/RevealY";
import RevealX from "./Transitions/RevealX";

const StyledContact = styled.section`
  margin-top: 10rem;
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  .contact-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5rem;
    .contact-left {
      .contact-form-heading {
        font-size: 2rem;
      }
      .contact-form-sub-heading {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 1rem;
      }
      .contact-form {
        margin-top: 2rem;
        label {
          font-family: "Roboto", sans-serif;
          font-weight: bold;
          color: ${({ theme }) => theme.colors.textSecondary};
        }
        .form-input {
          display: block;
          width: 100%;
          outline: none;
          border: 2px solid cyan;
          border-radius: 4px;
          padding: 5px;
          margin-bottom: 1rem;
          font-family: "Roboto", sans-serif;
        }
      }
    }
    .contact-right {
      .contact-img {
        height: 40rem;
        transform: scaleX(-1);
      }
    }
    @media (max-width: ${({ theme }) => theme.screens.lg}) {
      justify-content: center;
      .contact-right {
        display: none;
      }
    }
  }
`;

const Contact = () => {
  return (
    <StyledContact id="contact">
      <RevealY>
        <div className="section-heading">Contact</div>
      </RevealY>
      <div className="contact-wrapper max-width">
        <div className="contact-left">
          <RevealX>
            <h1 className="contact-form-heading">
              Contact Me , By Filling this form{" "}
            </h1>
            <h3 className="contact-form-sub-heading">
              / Can Also Mail directly at : sahillamba003@gmail.com{" "}
            </h3>
          </RevealX>
          <form className="contact-form">
            <RevealY>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="form-input"
                autoComplete="on"
              />
            </RevealY>
            <RevealY>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="abc@gmail.com"
                className="form-input"
                autoComplete="on"
              />
            </RevealY>
            <RevealY>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message here"
                className="form-input"
                style={{
                  height: "140px",
                  resize: "none",
                }}
                autoComplete="on"
              ></textarea>
            </RevealY>
            <RevealY>
              <button type="submit" className="btn" style={{ width: "100%" }}>
                Submit
              </button>
            </RevealY>
          </form>
        </div>
        <div className="contact-right">
          <RevealX direction={"from-right"}>
            <img src="/assets/img2.png" alt="contact" className="contact-img" />
          </RevealX>
        </div>
      </div>
    </StyledContact>
  );
};

export default Contact;
