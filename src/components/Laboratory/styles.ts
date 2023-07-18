import styled from 'styled-components';

export const LaboratoryContainer = styled.div`

    img {
      width: .75rem;
      margin-right: .8rem;
    }
    
    h2 {
      display: flex;
      align-self: center;
      justify-content: center;
      
      font-weight: 500;
      margin-bottom: 3rem;
    }
`;

export const LaboratoryListCad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);  
  grid-gap: 1rem;

  align-items: center;
  justify-content: space-evenly;
`;
