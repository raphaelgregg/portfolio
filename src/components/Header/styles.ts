import styled from  'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 7rem;

  img {
    width: 12rem;
  }

  nav {
    display: flex;
    gap: 6rem;

    a {
      width: 100%;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 1.2rem;
      color: ${({theme}) => theme.COLORS.GREY_100};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      border-radius: 2px;

      &:hover {
      border-bottom: 3px solid${({theme}) => theme.COLORS.BLUE_500};        
      }
    }
  }
`;