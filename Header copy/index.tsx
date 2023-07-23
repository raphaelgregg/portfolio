import { HeaderContainer } from './styles'
import brandIcon from '../../assets/brand.svg'
import { useState } from 'react';
import { MenuMobile } from '../MenuMobileOld';

export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(true);

  return (
    <>
    <MenuMobile
      menuIsVisible={menuIsVisible}
      setMenuIsVisible={setMenuIsVisible}
    />
    <HeaderContainer>
      <img src={brandIcon} alt="logo" />
        <section>
          <nav>
            <ul>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#skill">Skills</a></li>
              <li><a href="#laboratory">Laboratório</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </nav>
        </section>
    </HeaderContainer>
    </>
  )
}