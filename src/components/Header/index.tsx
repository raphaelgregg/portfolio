import { HeaderContainer } from './styles'
import brandIcon from '../../assets/brand.svg'

export function Header() {
  return (
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
  )
}