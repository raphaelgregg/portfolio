import { Container, CoverContainer } from './styles'
import { About } from '../About'

import devIcon from '../../assets/dev-icon.svg'

export function Home(){
  return(
    <Container>
      <CoverContainer>
        <div>
        <p className='emphasis'>Desenvolvedor Front-End</p>
        <h1>Raphael Gregg</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, architecto neque. Illo odio, voluptate corporis inventore nesciunt dolore officiis reiciendis dolorem quasi quae tenetur aliquid! Blanditiis repellat molestiae libero commodi!</p>

        <button>Baixar Curriculo</button>
        </div>
        <img src={devIcon} />
      </CoverContainer>

      <About />
    </Container>
  )
}