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

  nav, ul, li {
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
     text-align: center;
     margin: 4.4rem;
    }

    #home img {
      order: -1;
      width: 280px;
    }
  }
  
  @media (max-width: 540px) {
    nav {
      display: none;
    }
    
    .one,
    .two,
    .three {
      background-color: #fff;
      height: 5px;
      width: 100%;
      margin: 6px auto;
      
      transition-duration: 0.3s;
    }
    
    .menu-toggle {
      width: 40px;
      height: 30px;
      margin-right: 20px;
    }
    
    /* fullscreen */
    .menu-section.on {
      position: absolute;
      top: 0;
      left: 0;
      
      width: 100vw;
      height: 100vh;
      
      z-index: 10;
         
    }
    
    .menu-section.on nav {
      display: block;
    }
    
    .menu-section.on .menu-toggle {
      position: absolute;
      right: 0;
      top: 15px;
    }

    .menu-section.on .menu-toggle .one{
      transform: rotate(45deg) translate(7px, 7px);
    }

    .menu-section.on .menu-toggle .two{
      opacity: 0;
    }

    .menu-section.on .menu-toggle .three{
      transform: rotate(-45deg) translate(7px, -10px);
    }

    .menu-section.on nav ul{
      text-align: center;
      display: flex;
      flex-direction: column;

      justify-content: center;

      background-color: ${({theme}) => theme.COLORS.GREEN_500};
    }

    .menu-section.on nav ul a{
      transition: 0.5s;
      font-size: 3rem;
      line-height: 4rem;
      display: block;
    }
  }
`;
