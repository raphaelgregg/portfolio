import styled from  'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-self: center;
  justify-content: space-between;

  width: 90%;
  height: 8rem;

  max-width: 980px;

  img {
    width: 20.8rem;
    margin-left: 20px;
    padding: 15px 0;
  }

  div.menu-section {
  }

  nav, ul {
    display: flex;
    align-items: center;
    height:100%;
    width: 100%;
  }
  
  li {
    margin: 0 3rem;
    
    
    a {
      /* background-color: blue; */
      color: ${({theme}) => theme.COLORS.GREY_100};
      font-size: 1.4rem;
      padding: 1rem 2.4rem;
      /* transition: all 250ms linear 0s; */

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      border-radius: 2px;

      transition: 0.3s;

      &:hover {
      border-bottom: 3px solid${({theme}) => theme.COLORS.BLUE_500};     
      }
    }
  }
`;

