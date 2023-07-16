import styled from  'styled-components'

export const FooterContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 80px;
  /* position: absolute; */
  bottom: 0;

  margin-top: 3rem;

  background-color:  ${({theme}) => theme.COLORS.GREEN_900};

  border-bottom: 3px solid ${({theme}) => theme.COLORS.BLUE_500}
`;
