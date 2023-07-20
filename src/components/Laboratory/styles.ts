import styled from 'styled-components';

export const LaboratoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-between;

  width: 100%;
  max-width:980px;
    
  margin-bottom: 10rem;

  h2 {
    display: flex;
    align-self: center;
    justify-content: center;
      
    font-weight: 500;
  }
`;

export const LaboratoryListCad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);  
  grid-gap: 1rem;
  
  justify-items: center;
`;
