import { SkillsContainer } from "./styles";

import SquareIcon from '../../assets/square.svg';
import { Skill } from "../Skill";

export function Skills() {
  return(
    <SkillsContainer>
      <h2><img src={SquareIcon}/> Habilidades</h2>
      <div>
      <Skill title="ReactJS" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
      <Skill title="React Native" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
      <Skill title="HTML" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
      </div>
    </SkillsContainer>
  );
}