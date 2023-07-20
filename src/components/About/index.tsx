import {
  AboutContainer, 
  AboutContent,
  UserProfileContent,
  Avatar,
  MailIcon,
  LinkinIcon,
  GitIcon,
  AboutWrapper
} from './styles'

import { SectionTitle } from '../SectionTitle';

interface AboutProps {
  id: string;
}

export function About({id}: AboutProps) {
  return(
    <AboutContainer id={id}>
      <AboutContent>
        <UserProfileContent>
          <div>
            <Avatar>
              <img src="https://github.com/raphaelgregg.png" />
            </Avatar>

            <h2>Raphael Gregg</h2>

            <div className='wrapper-icon'>
              <a href="raphaelgregg@gmail.com">
                <MailIcon />
              </a>

              <a href="https://github.com/raphaelgregg">
                <GitIcon />
              </a>

              <a href="https://linkedin.com/in/raphaelgregg/">
                <LinkinIcon />
              </a>
            </div>
          </div>
        </UserProfileContent>
        
        <AboutWrapper>
          <SectionTitle title="Sobre" positionAlignText='start' />
          
          <h3>Conheça um pouco sobre mim</h3>
          
          <p>
          Desenvolvedor especializando-se em desenvolvimento web e mobile
          com experiência em projetos freelancer e cursos, possuo sólida
          formação técnica que me possibilita soluções eficientes e inovadoras
          nos projetos nos quais atuo.

          <br />
          <br />

          Detenho fortes habilidades
          como: autogerenciamento, aprendizado rápido,com prometimento,
          proatividade e trabalho bem sobre pessão. 
          
          <br />
          <br />
          
          Excelente profissional,
          buscando sempre aprimorar minhas habilidades por meio de cursos e
          certificações complementares, exerço minhas funções com versatilidade
          e disposição para enfrentar desafios propostos. 
          </p>
        </AboutWrapper>      
      </AboutContent>
    </AboutContainer>
  );
}