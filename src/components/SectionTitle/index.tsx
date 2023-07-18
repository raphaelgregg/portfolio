import { Container } from "./styles";

import SquareIcon from '../../assets/square.svg';

interface SectionTitle {
  title: string;
  positionAlignText?: 'start' | 'center' | 'end';
}

export function SectionTitle({title, positionAlignText, ...rest}: SectionTitle) {
  return(
    <Container positionAlignText={positionAlignText} {...rest}>
      <h2><img src={SquareIcon}/>{title}</h2>
    </Container>
  );
}