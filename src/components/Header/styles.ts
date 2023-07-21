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
  }

  ul {
    display: flex;
    align-items: center;
    gap: 9.6rem;

    a {
      font-size: 1.6rem;
      color: ${({theme}) => theme.COLORS.GREY_100};

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
