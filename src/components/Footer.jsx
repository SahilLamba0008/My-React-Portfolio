import React from "react";
import styled from "styled-components";

const StyledFooter = styled.section`
  margin-top: 2rem;
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.primaryAlternate};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  position: relative;
  .footer-heading {
    background-color: ${({ theme }) => theme.colors.primary};
    width: fit-content;
    padding: 15px 25px;
    border-radius: 20px;
    border: 6px solid rgba(22, 220, 250, 1);
    margin: 0 auto 3rem auto;
    font-size: 1rem;
    box-shadow: inset 1px 1px 1px white;
  }
  .contacts {
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    .contact {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      i {
        cursor: pointer;
        margin: 0 1rem;
      }
    }
  }
  .other-media-contacts {
    p {
      color: ${({ theme }) => theme.colors.textSecondary};
    }
    margin: 2rem 0;
    i {
      font-size: 2rem;
      margin: 1rem 0.5rem;
      cursor: pointer;
    }
  }
  .footer-bottom {
    position: absolute;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    padding: 20px;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    .contacts {
      .contact {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.screens.xs}) {
    .contacts {
      .contact {
        font-size: 1rem;
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="section-heading footer-heading">Get in touch</div>
      <p>
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      <div className="contacts">
        <div className="email contact">
          <i className="fa-regular fa-envelope"></i>
          <span>sahillamba003@gmail.com</span>
          <i className="fa-regular fa-copy"></i>
        </div>
        <div className="number contact">
          <i className="fa-solid fa-phone"></i>
          <span>+91 8307141156</span>
          <i className="fa-regular fa-copy"></i>
        </div>
        <div className="other-media-contacts">
          <p>You may also find me on these platforms!</p>
          <i className="fa-brands fa-linkedin-in connection-icons"></i>
          <i className="fa-brands fa-github connection-icons"></i>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 | Designed and coded with ❤️️ by Sahil Lamba</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
