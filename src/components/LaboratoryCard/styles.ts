import styled from "styled-components";

export const ContainerLaboratoryCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: column;

  grid-column-gap: 1rem;
  max-width: 21.25rem;
  height: auto;

  background-color: ${({theme}) => theme.COLORS.GREEN_500};

  border-radius: 8px;

  h5 {

  }

  p {

  }
`;