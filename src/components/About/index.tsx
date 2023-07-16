import {
  AboutContainer, 
  UserProfileContent,
  Avatar,
  MailIcon,
  LinkinIcon,
  GitIcon, 
  AboutContent
} from './styles'

import SquareIcon from '../../assets/square.svg';

export function About() {
  return(
    <AboutContainer>
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
      
      <AboutContent>
        <h2><img src={SquareIcon} /> Sobre</h2>
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
      </AboutContent>      
    </AboutContainer>
  );
}