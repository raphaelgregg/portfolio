import { SkillsContainer } from "./styles";

import { SectionTitle } from "../SectionTitle";
import { SkillCard } from "../SkillCard";

export function Skill() {
  return(
    <SkillsContainer>
      <SectionTitle title="Habilidades" positionAlignText="center"/>
      
      <div className="icon-wrapper">
      <SkillCard title="React Native" icon="https://img.icons8.com/?size=512&id=YYYhFVbH4vFv&format=png" />
      <SkillCard title="Javascript" icon="https://img.icons8.com/?size=512&id=108784&format=png" />
      <SkillCard title="ReactJS" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
      <SkillCard title="HTML" icon="https://img.icons8.com/?size=512&id=20909&format=png" />
      <SkillCard title="CSS" icon="https://img.icons8.com/?size=512&id=21278&format=png" />
      </div>
    </SkillsContainer>
  );
}