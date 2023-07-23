import { useEffect } from 'react';
import {ContainerMenuMobile} from './styles';
import {IoClose} from 'react-icons/io5';

interface HeaderMenuMobileProps {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function HeaderMenuMobile({menuIsVisible, setMenuIsVisible}: HeaderMenuMobileProps) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);
  
  return (
    <ContainerMenuMobile isVisible={menuIsVisible} >
      
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#skill">Skills</a></li>
            <li><a href="#laboratory">Laboratório</a></li>
            <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </ContainerMenuMobile>
  );
}