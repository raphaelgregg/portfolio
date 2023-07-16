import { LaboratoryContainer } from "./styles";

import SquareIcon from '../../assets/square.svg';

export function Laboratory() {
  return(
    <LaboratoryContainer>
      <h2><img src={SquareIcon}/> Laboratório</h2>
    </LaboratoryContainer>
  );
}