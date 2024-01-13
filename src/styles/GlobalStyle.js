import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 100%;
    }

    body {
    background-color: ${({ theme }) => theme.colors.primary};
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    p{
        ${"" /* font-family: 'Comfortaa', sans-serif; */}
        font-family: 'Roboto', sans-serif;
    }
    
    .max-width{
        max-width: 1700px;
        margin: 0 auto;
    }
    
    .btn {
      padding: 1rem 2rem;
      font-size: 1rem;
      font-weight: bold;
      background-color: ${({ theme }) => theme.colors.secondary};
      border-radius: 1rem;
      border: 4px solid rgba(0, 0, 0, 0.5);
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      cursor: pointer;
      white-space: nowrap;
      color: ${({ theme }) => theme.colors.primaryAlternate};
      overflow: hidden;
      position: relative;
      transition: all 0.5s ease-in-out;
    }

    .btn::before,
    .btn::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      background: linear-gradient(45deg, ${({ theme }) =>
        theme.colors.primaryAlternate}, ${({ theme }) => theme.colors.primary});
      transition: all 0.5s ease-in-out;
      z-index: 0;
    }

    .btn::before {
      top: 0;
      left: 0;
      border-radius: 0 0 0.8rem 0;
      height: 20%;
      width: 20%;
    }

    .btn::after {
      bottom: 0;
      right: 0;
      border-radius: 0.8rem 0 0 0;
      height: 20%;
      width: 20%;
    }

    .btn:hover::before,
    .btn:hover::after {
      height: 30%;
      width: 30%;
    }

    .btn.clicked::before,
    .btn.clicked::after {
      height: 100%;
      width: 100%;
    }

    .section-heading{
        font-size: 2rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.secondary};
        text-align: center;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.secondary};
        border-radius: 12px;
    }

    ::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.colors.primary};
    width: 10px;
    }

    @media (max-width: ${({ theme }) => theme.screens.lg}) {
      html{
        font-size: 80%;
      }
    }
    @media (max-width: ${({ theme }) => theme.screens.sm}) {
      html{
        font-size: 75%;
      }
    }
    
`;
