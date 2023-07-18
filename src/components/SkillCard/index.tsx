import { Container } from './styles.ts';

interface SkillProps {
  title: string;
  icon: string;
  alt?: string;
}

export function Skill({title, icon, alt}: SkillProps) {
  return(
    <Container>
      <h5>{title}</h5>
      <img src={icon} alt={alt} />
    </Container>
  );
}