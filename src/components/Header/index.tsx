import { HeaderContainer } from './styles'
import brandIcon from '../../assets/brand.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={brandIcon} />
      <div className='menu-section on'>
        <div className='menu-toggle'>
          <div className='one'></div>
          <div className='two'></div>
          <div className='three'></div>
        </div>
        <nav>
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#skill">Skills</a></li>
            <li><a href="#laboratory">Laboratório</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </HeaderContainer>
  )
}