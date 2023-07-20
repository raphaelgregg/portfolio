import styled from  'styled-components'

export const FooterContainer = styled.header`
  display: flex;
  align-self: center;
  justify-content: center;
  
  width: 100%;

  margin-top: 3rem;
  padding: 3rem;

  bottom: 0;

  background-color:  ${({theme}) => theme.COLORS.GREEN_900};

  border-bottom: 4px solid ${({theme}) => theme.COLORS.BLUE_500};
`;
