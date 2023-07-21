import styled from "styled-components";

export const ContainerLaboratoryCard = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  max-width: 34.8rem;
  min-height: 30rem;
  height: auto;

  background-color: ${({theme}) => theme.COLORS.GREEN_500};

  border-radius: 8px;


  h4 {
    margin-bottom: 1.6rem;
    font-size: 1.8rem;
    font-weight: 500;
  }

  p {
    margin-bottom: 1.6rem;
    font-size: 1.6rem;
    color: ${({theme}) => theme.COLORS.GREY_100};
  }

  div {
    margin-bottom: 3.2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: .8rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      
      font-size: 1.2rem;
      padding: 4px 8px;

      width: fit-content;
      max-width: 100%;
      
      border: solid 2px ${({theme}) => theme.COLORS.BLUE_500};
      border-radius: 15px;

      color: ${({theme}) => theme.COLORS.BLUE_500};
      background-color: transparent;
    }
  }

  button {
      width: 100%;
      padding: 1.6rem;

      font-size: 1.6rem;
      
      border: none;
      border-radius: 4px;

      color: ${({theme}) => theme.COLORS.BLUE_500};
      background-color: ${({theme}) => theme.COLORS.GREEN_800};
  }

  padding: 2rem 2rem 3.2rem;
`;