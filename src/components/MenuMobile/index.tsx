import { useState } from 'react';
import {ContainerMenuMobile} from './styles';
import {IoClose} from 'react-icons/io5';

interface MenuMobileProps {
  menuIsVisible: boolean;
  setMenuIsVisible: boolean;
}

export function MenuMobile() {
  // const [menuIsVisible, setMenuIsVisible] = useState(true);
  
  return (
    <ContainerMenuMobile >
      <IoClose size={45} />
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