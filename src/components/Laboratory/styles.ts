import styled from 'styled-components';

export const LaboratoryContainer = styled.div`
    position: relative;

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
    
    div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
`;
