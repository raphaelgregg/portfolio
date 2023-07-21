import styled from 'styled-components';

type ContainerProps = {
  positionAlignText?: 'start' | 'center' | 'end';
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: ${ props => props.positionAlignText};

  img {
    width: 1.125rem;
    margin-right: 1.2rem;
  }

  h2 {
    display: flex;
    align-self: center;
    justify-content: center;

    font-weight: 500;
    font-size: 2.5rem;
    margin-bottom: 5rem;
  }
`;
