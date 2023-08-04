import { 
  HomeContainer,
} from './styles';

import { About } from '../../components/About'
import { Skill } from '../../components/Skill';
import { Laboratory } from '../../components/Laboratory';
import { Contact } from '../../components/Contact'
import { FloatingActionButton } from '../../components/FloatingActionButton';

import devIcon from '../../assets/dev-icon.svg'

export function Home(){
  return(
    <>

        <HomeContainer id="home" >
            <div>
            <span className='emphasis'>Desenvolvedor Front-End</span>
            <h1>Raphael Gregg</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, architecto neque. Illo odio, voluptate corporis inventore nesciunt dolore officiis reiciendis dolorem quasi quae tenetur aliquid! Blanditiis repellat molestiae libero commodi!</p>

            <button>Baixar Curriculo</button>
            </div>
            <img src={devIcon} />
        </HomeContainer>

        <About id="about" />
        <Skill id="skill" />
        <Laboratory id="laboratory" />
        <Contact id="contact" />
        <FloatingActionButton />

    </>
  )
}