import styled from "styled-components";
import {FaCircleArrowUp} from "react-icons/fa6";

export const FloatingActionButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  margin: 3rem
`;

export const TargetIcon = styled(FaCircleArrowUp)`
  font-size: 4rem;
  color: ${({theme}) => theme.COLORS.BLUE_500};
`;