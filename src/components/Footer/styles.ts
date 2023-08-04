import styled from  'styled-components'

export const FooterContainer = styled.header`
  background-color:  ${({theme}) => theme.COLORS.GREEN_900};
  border-bottom: 4px solid ${({theme}) => theme.COLORS.BLUE_500};
  
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 6.8rem;
  margin: auto;
  
  div {
    
    width: 90%;
    max-width: 980px;
    text-align: center;
  }






  span {
    font-size: 1.4rem;
  }
`;
