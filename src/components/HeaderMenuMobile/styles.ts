import styled, {css} from 'styled-components';

interface ContainerMenuMobileProps {
  isVisible: boolean;
}

export const ContainerMenuMobile = styled.section<ContainerMenuMobileProps>`
position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  /* background: rgba(17, 18, 17, 0.95);
  background: linear-gradient(34deg, rgba(25,88,24,0.95) 0%, rgba(17,18,17,0.95) 95%); */

  background: rgba(17,18,17,0.95);
  background: linear-gradient(34deg, rgba(92, 196, 196, 0.95) -30%, rgba(17,18,17,0.95) 110%);
  opacity: 0;
  pointer-events: none;

  > svg {
    position: absolute;
    top: 2.6rem;
    right: 1.6rem;
    transform: rotate(45deg);
    transition: .7s;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(3.7);
    transition: .8s;
  }
  
  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    > svg {
      transform: rotate(0deg);
    }

    nav {
      transform: scale(2);
    }
  `}
`;