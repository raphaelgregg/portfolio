import styled from 'styled-components';

export const LaboratoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-between;

  width: 90%;
  max-width:980px;
    
  margin-bottom: 16rem;
`;

export const LaboratoryListCad = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));  
  grid-gap: 1.6rem;
  
  justify-items: center;
`;
