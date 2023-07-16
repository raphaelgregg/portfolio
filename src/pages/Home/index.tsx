import { 
  Container, 
  HomeContainer,
  DefaultWrapper, 
  AboutWrapper
} from './styles';

import { About } from '../../components/About'
import { Skills } from '../../components/Skills';
import { Laboratory } from '../../components/Laboratory';
import { Contact } from '../../components/Contact'

import devIcon from '../../assets/dev-icon.svg'
export function Home(){
  return(
    <Container>
      <DefaultWrapper id="home">
        <HomeContainer>
            <div>
            <p className='emphasis'>Desenvolvedor Front-End</p>
            <h1>Raphael Gregg</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, architecto neque. Illo odio, voluptate corporis inventore nesciunt dolore officiis reiciendis dolorem quasi quae tenetur aliquid! Blanditiis repellat molestiae libero commodi!</p>

            <button>Baixar Curriculo</button>
            </div>
            <img src={devIcon} />
        </HomeContainer>
      </DefaultWrapper>

      <AboutWrapper id="about">
        <About />
      </AboutWrapper>

      <DefaultWrapper id="skills">
        <Skills />
      </DefaultWrapper>

      <DefaultWrapper id="laboratory">
        <Laboratory />
      </DefaultWrapper>

      <DefaultWrapper id="contact">
        <Contact />
      </DefaultWrapper>
    </Container>
  )
}