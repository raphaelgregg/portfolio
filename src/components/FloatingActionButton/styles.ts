import styled from "styled-components";
import {FaCircleArrowUp} from "react-icons/fa6";

export const FloatingActionButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;

  margin: 3rem 2rem ;

  a {

    transition: .6s;

    &:hover {
    opacity: .8;
  }
  }

`;

export const TargetIcon = styled(FaCircleArrowUp)`
  font-size: 4rem;
  color: ${({theme}) => theme.COLORS.BLUE_500};


`;