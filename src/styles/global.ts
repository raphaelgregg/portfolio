import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.GREEN_900};
    color: #f5f5f5;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
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
`;