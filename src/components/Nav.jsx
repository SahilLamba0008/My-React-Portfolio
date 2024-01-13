import React, { useEffect, useState } from "react";
import { navLinks } from "../constants/data";
import styled from "styled-components";
import RevealX from "./Transitions/RevealX";
import RevealY from "./Transitions/RevealY";

const Navbar = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(225, 225, 225, 0.1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.4);

  .nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 3rem;
    padding: 1.5rem 0;
    .nav-left {
      #logo {
        height: 35px;
      }
    }
    .nav-right {
      ul {
        display: flex;
        list-style: none;
        gap: 1.5rem;
        font-size: 1rem;
        a {
          color: inherit;
          text-decoration: none;
        }
        li {
          cursor: pointer;
          transition: color 0.3s ease-in;
          &:hover {
            color: ${({ theme }) => theme.colors.secondary};
          }
        }
      }
    }
    i {
      display: none;
      font-size: 1.3rem;
      cursor: pointer;
    }

    @media (max-width: ${({ theme }) => theme.screens.sm}) {
      .nav-wrapper {
        flex-direction: row;
        align-items: flex-start;
        position: relative;
      }
      .nav-right ul {
        display: none;
        left: -100%;
        transition: left 0.5s ease, opacity 0.5s ease;
      }
      .nav-right ul.active {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0%;
        background-color: ${({ theme }) => theme.colors.primary};
        font-size: 1.5rem;
        opacity: 1;
      }
      i {
        display: block;
        position: absolute;
        z-index: 999;
        right: 3rem;
      }
    }
  }
`;

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);

  return (
    <Navbar>
      <div className="nav-wrapper">
        <div className="nav-left">
          <RevealX>
            <img
              src="/assets/logoS.png"
              alt="logoS"
              id="logo"
              style={{ cursor: "pointer" }}
            />
          </RevealX>
        </div>
        <div className="nav-right">
          <ul className={openMenu ? "active" : ""}>
            {navLinks.map((link, index) => (
              <RevealY direction={"from-top"} delay={(index + 1) * 0.2}>
                <a
                  href={link.linkId}
                  key={index}
                  onClick={() => setOpenMenu(false)}
                >
                  <li>{link.name}</li>
                </a>
              </RevealY>
            ))}
          </ul>
        </div>
        <i
          className={openMenu ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          onClick={() => setOpenMenu((prev) => !prev)}
        ></i>
      </div>
    </Navbar>
  );
};

export default Nav;
