import styled from 'styled-components';

export const SkillsContainer = styled.div`
    position: relative;

    h2 {
      display: flex;
      align-self: center;
      justify-content: center;

      font-weight: 500;
      margin-bottom: 3rem;
    }

    img {
      width: .75rem;
      margin-right: .8rem;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width:100%; 
      height: 150px;
    }
`;