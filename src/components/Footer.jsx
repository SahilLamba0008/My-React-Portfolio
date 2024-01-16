import React, { useState } from "react";
import styled from "styled-components";
import RevealOpacity from "./Transitions/RevealOpacity";
import RevealY from "./Transitions/RevealY";
import { Zoom, toast } from "react-toastify";
import { Link } from "react-router-dom";

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
        transition: color 0.3s ease-in;
      }
      i.fa-copy:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
  .other-media-contacts {
    p {
      color: ${({ theme }) => theme.colors.textSecondary};
    }
    margin: 2rem 0;
    i {
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: 2rem;
      margin: 1rem 0.5rem;
      cursor: pointer;
      transition: color 0.3s ease-in;
    }
    i:hover {
      color: ${({ theme }) => theme.colors.secondary};
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
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = (value) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(value)
        .then(() => {
          handleCopySuccess(value); // Pass the 'value' parameter here
        })
        .catch((error) => {
          handleCopyError(error);
        });
    } else {
      handleFallbackCopy(value);
    }
  };

  const handleFallbackCopy = (value) => {
    const textArea = document.createElement("textarea");
    textArea.value = value;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        handleCopySuccess(value); // Pass the 'value' parameter here
      } else {
        handleCopyError("Fallback copy failed");
      }
    } catch (err) {
      handleCopyError(err);
    }

    document.body.removeChild(textArea);
  };

  const handleCopySuccess = (value) => {
    console.log(value);
    setIsCopied(true);
    console.log("Text copied:", value);
    toast("Text Copied! 💙", {
      transition: Zoom,
      theme: "colored",
      position: "top-right",
    });

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  const handleCopyError = (error) => {
    console.error("Copy failed:", error);
    toast("Failed to copy text. Please try manually.");
  };
  console.log(isCopied);

  return (
    <StyledFooter>
      <RevealOpacity>
        <div className="section-heading footer-heading">Get in touch</div>
      </RevealOpacity>
      <RevealOpacity>
        <p>
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </RevealOpacity>
      <div className="contacts">
        <RevealY>
          <div className="email contact">
            <i className="fa-regular fa-envelope"></i>
            <span>sahillamba003@gmail.com</span>
            <i
              className="fa-regular fa-copy"
              onClick={() => handleCopyClick("sahillamba003@gmail.com")}
            ></i>
          </div>
        </RevealY>
        <RevealY>
          <div className="number contact">
            <i className="fa-solid fa-phone"></i>
            <span>+91 8307141156</span>
            <i
              className="fa-regular fa-copy"
              onClick={() => handleCopyClick("+91 8307141156")}
            ></i>
          </div>
        </RevealY>
        <RevealY>
          <div className="other-media-contacts">
            <p>You may also find me on these platforms!</p>
            <Link
              to="https://www.linkedin.com/in/sahillamba0008/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in connection-icons"></i>
            </Link>
            <Link to="https://github.com/SahilLamba0008" target="_blank">
              <i className="fa-brands fa-github connection-icons"></i>
            </Link>
          </div>
        </RevealY>
      </div>
      <div className="footer-bottom">
        <RevealY>
          <p>&copy; 2023 | Designed and coded with ❤️️ by Sahil Lamba</p>
        </RevealY>
      </div>
    </StyledFooter>
  );
};

export default Footer;
