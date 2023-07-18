import styled from 'styled-components';

type ContainerProps = {
  positionAlignText?: 'start' | 'center' | 'end';
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: ${ props => props.positionAlignText};

  img {
    width: .75rem;
    margin-right: .8rem;
  }

  h2 {
    display: flex;
    align-self: center;
    justify-content: center;

    font-weight: 500;
    margin-bottom: 4rem;
  }
`;
