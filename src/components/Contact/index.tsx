import { 
  ContactContainer, 
  ContactWrapper,
  MailIcon,
  LinkinIcon,
  GitIcon,
  ContactIcon,
} from "./styles";

import SquareIcon from '../../assets/square.svg';

export function Contact() {
  return(
    <ContactContainer id="contact">
      <h2><img src={SquareIcon}/> Contato</h2>

        <p>Fique a vontade para entrar em contato comigo, será um prazer atende-lo.</p>
        <p>Estou disponível todos.</p>

        <div>
          <ContactWrapper>
            <div>
              <ContactIcon />
              (91) 99272-0408
            </div>
            
            <div>
              <GitIcon />
              <a 
                href="https://github.com/raphaelgregg"
                target="_blank"
                >https://github.com/raphaelgregg</a>
            </div>
            
            <div>
              <MailIcon />
              <a href="raphaelgregg@gmail.com">raphaelgregg@gmail.com</a>
            </div>

            <div>
              <LinkinIcon />
              <a 
                href="https://linkedin.com/in/raphaelgregg/"
                target="_blank"
              >https://linkedin.com/in/raphaelgregg/</a>
            </div>
          </ContactWrapper>
        </div>
    </ContactContainer>
  );
}