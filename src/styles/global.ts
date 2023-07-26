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

  h1{

  }

  h2 {
    font-size: 3.6rem;
    line-height: 4.6rem;
  }

  h3 {
    font-size: 2.8rem;
    line-height: 3.8rem;
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

  @media (max-width: 630px) {
    #home {
     flex-direction: column;
     justify-content: space-evenly;
     text-align: center;
     height: 100vh;
    }

    #home img {
      order: -1;
      width: 280px;
    }
  }
  
  /* @media (max-width: 540px) {
    
  } */

  @media(max-width: 730px) {      
      nav.desktop {
        display: none !important;
      }

      #about {
        > div {
          grid-template-columns: 1fr;
          justify-items: center;

        }
      }

      #contact {
        div {
          grid-template-columns: 1fr;

        }
      }
    }

    @media(max-width: 425px) {
      #home {
        justify-content: flex-start;

        height:100%;
        max-height: 100vh;

        > img {
          margin: 10rem auto;
          margin-bottom: 10rem;
        }
      }
    }

    @media(min-width: 730px) {
      .mobile {
        display: none;
      }
    }
`;
