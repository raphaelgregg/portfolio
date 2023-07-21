import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    /* a cada 1rem será considerado 10px */
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.GREEN_800};
    color: #f5f5f5;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style-type: none;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0 ${({theme}) => theme.COLORS.GREY_900};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.COLORS.BLUE_500};
    border-radius: 10px;
  }

  /** Media queries */
  @media (max-width: 768px) {
    html {
      font-size: 50%;
    }
  }
`;
