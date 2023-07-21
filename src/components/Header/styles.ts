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

   > section { display: flex;
    gap: 2rem;

    &:last-child {
      gap: 1rem;
    }

    > img {
      width: 230px;

      @media(max-width: 500px) {
        width: 120px;
      }
    }
    > nav {
      display: flex;
      gap: 1rem;

      a {
        font-size: 20px;
        position: relative;

        &:before {
          content: '';
          border-radius: 50px;
          bottom: 0px;
          position: absolute;
          width: 0%;
          height: 2px;
          background: #3CA63A;
          transition: .3s;
        }

        &:hover {
          &:before {
            width: 100%;
          }
        }
      }
    }

    .mobile {
      display: none;
    }

    
  }
`;

/* nav, ul {
    display: flex;
    align-items: center;
    height:100%;
    width: 100%;
  }
  
  li {
    margin: 0 3rem;
    
    
    a {
      /* background-color: blue; */
      /* color: ${({theme}) => theme.COLORS.GREY_100};
      font-size: 1.4rem;
      padding: 1rem 2.4rem; */
      /* transition: all 250ms linear 0s; */

      /* border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      border-radius: 2px;

      transition: 0.3s;

      &:hover {
      border-bottom: 3px solid${({theme}) => theme.COLORS.BLUE_500};     
      }
    } */
  /* }  */


