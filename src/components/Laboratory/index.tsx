import { LaboratoryContainer, LaboratoryListCad } from "./styles";

import { LaboratoryCard } from "../LaboratoryCard";
import { SectionTitle } from "../SectionTitle";

interface LaboratoryProps {
  id: string;
}

export function Laboratory({id}: LaboratoryProps) {
  return(
    <LaboratoryContainer id={id}>
      <SectionTitle title="Laboratório" positionAlignText="center"/>

      <LaboratoryListCad>
        <LaboratoryCard />
        <LaboratoryCard />
        <LaboratoryCard />
      </LaboratoryListCad>
    </LaboratoryContainer>
  );
}