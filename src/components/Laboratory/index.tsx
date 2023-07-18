import { LaboratoryContainer, LaboratoryListCad } from "./styles";

import { LaboratoryCard } from "../LaboratoryCard";
import { SectionTitle } from "../SectionTitle";

export function Laboratory() {
  return(
    <LaboratoryContainer>
      <SectionTitle title="Laboratório" positionAlignText="center"/>

      <LaboratoryListCad>
        <LaboratoryCard />
        <LaboratoryCard />
        <LaboratoryCard />
      </LaboratoryListCad>
    </LaboratoryContainer>
  );
}