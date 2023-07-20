import styled from 'styled-components';

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: space-between;

    width: 100%;
    max-width:980px;
    
    margin-bottom: 10rem;


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