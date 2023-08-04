import styled from  'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-self: center;
  justify-content: space-between;
  
  width: 90%;
  max-width: 980px;

  margin: auto;
  padding: 4rem 0;
  
  > section { 
    display: flex;
    align-items: center;
    gap: 3.2rem;
    
    > img {
      width: 20rem;
      margin-left: 1.6rem;

      @media(max-width: 500px) {
        width: 120px;
      }
    }
    > nav {
      display: flex;
      gap: 1.6rem;
      
      > ul {
        display: flex;
        gap: 4.6rem;
        
        &:last-child {
          gap: 6rem;
        }
      }
      
      a {
        font-size: 1.6rem;
        position: relative;
        color: ${({theme}) => theme.COLORS.GREY_100};
        
        &:before {
          content: '';
          border-radius: 50px;
          bottom: 0px;
          position: absolute;
          width: 0%;
          height: 2px;
          background: ${({theme}) => theme.COLORS.BLUE_500};
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
      width: 1.6rem;
      height: 1.6rem;
    }    
  }
`;