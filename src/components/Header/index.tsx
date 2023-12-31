import { HeaderContainer } from './styles'
import brandIcon from '../../assets/brand.svg'
import { useState } from 'react';
import { HeaderMenuMobile } from '../HeaderMenuMobile';
import { RiMenu3Fill } from 'react-icons/ri';

export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
    <HeaderMenuMobile
      menuIsVisible={menuIsVisible}
      setMenuIsVisible={setMenuIsVisible}
    />
    <HeaderContainer>
        <section>
          <img src={brandIcon} alt="logo" />
        </section>

        <section>
          <nav className='desktop'>
            <ul>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#skill">Skills</a></li>
              <li><a href="#laboratory">Laboratório</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </nav>
          <RiMenu3Fill onClick={() => setMenuIsVisible(true)} className="mobile"/>  
        </section>
    </HeaderContainer>
    </>
  )
}