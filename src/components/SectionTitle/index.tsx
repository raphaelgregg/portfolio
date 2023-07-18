import { Container } from "./styles";

import SquareIcon from '../../assets/square.svg';

interface SectionTitle {
  title: string;
  align?: 'start' | 'center' | 'end';
}

export function SectionTitle({title, align, ...rest}: SectionTitle) {
  return(
    <Container {...rest}>
      <h2 align={align}><img src={SquareIcon}/>{title}</h2>
    </Container>
  );
}