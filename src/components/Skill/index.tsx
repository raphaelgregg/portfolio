import { SkillsContainer } from "./styles";

import { Skill } from "../SkillCard";
import { SectionTitle } from "../SectionTitle";

export function Skills() {
  return(
    <SkillsContainer>
      <SectionTitle title="Habilidades"/>
      
      <div>
      <Skill title="React Native" icon="https://img.icons8.com/?size=512&id=YYYhFVbH4vFv&format=png" />
      <Skill title="Javascript" icon="https://img.icons8.com/?size=512&id=108784&format=png" />
      <Skill title="ReactJS" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
      <Skill title="HTML" icon="https://img.icons8.com/?size=512&id=20909&format=png" />
      <Skill title="CSS" icon="https://img.icons8.com/?size=512&id=21278&format=png" />
      </div>
    </SkillsContainer>
  );
}