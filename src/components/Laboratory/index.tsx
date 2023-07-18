import { LaboratoryContainer, LaboratoryListCad } from "./styles";

import SquareIcon from '../../assets/square.svg';
import { LaboratoryCard } from "../LaboratoryCard";

export function Laboratory() {
  return(
    <LaboratoryContainer>
      <header>
        <h2><img src={SquareIcon}/> Laboratório</h2>
      </header>

      <LaboratoryListCad>
        <LaboratoryCard />
        <LaboratoryCard />
        <LaboratoryCard />
      </LaboratoryListCad>
    </LaboratoryContainer>
  );
}