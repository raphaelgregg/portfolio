import styled from 'styled-components';

export const SkillsContainer = styled.div`

    div.icon-wrapper {
      display: flex;
      justify-content: space-evenly;

      img {
        width: 4rem;
        margin: 0;

        transition: .7s;
        
        span {

        }
        
        &:hover {
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
        }
      }
    }
`;