

import {
  AboutContainer, 
  UserProfileContent,
  Avatar,
  MailIcon,
  LinkinIcon,
  GitIcon, 
  AboutContent
} from './styles'

export function About() {
  return(
    <AboutContainer>
      <UserProfileContent>
          <Avatar>
            <img src="https://github.com/raphaelgregg.png" />
          </Avatar>

          <h2>Raphael Gregg</h2>

          <div>
            <MailIcon />
            <LinkinIcon />
            <GitIcon />
          </div>
      </UserProfileContent>
      
      <AboutContent>
        <h2>Sobre</h2>
        <p>
        Desenvolvedor especializando-se em desenvolvimento web e mobile
        com experiência em projetos freelancer e cursos, possuo sólida
        formação técnica que me possibilita soluções eficientes e inovadoras
        nos projetos nos quais atuo. Para além disso, detenho fortes habilidades
        como: autogerenciamento, aprendizado rápido,comprometimento,
        proatividade e trabalho bem sobre pessão. Excelente profissional,
        buscando sempre aprimorar minhas habilidades por meio de cursos e
        certificações complementares, exerço minhas funções com versatilidade
        e disposição para enfrentar desafios propostos. 
        </p>
      </AboutContent>      
    </AboutContainer>
  );
}