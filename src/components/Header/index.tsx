import { HeaderContainer } from './styles'
import brandIcon from '../../assets/brand.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={brandIcon} />

      <nav>
        <a>Sobre</a>
        <a>Skills</a>
        <a>Laboratório</a>
        <a>Contato</a>
      </nav>
    </HeaderContainer>
  )
}