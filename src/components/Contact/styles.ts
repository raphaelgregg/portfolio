import styled from 'styled-components';

import { 
  AiOutlineMail, 
  AiOutlineLinkedin, 
  AiFillGithub,
  AiFillContacts
} from "react-icons/ai";

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;

  width: 90%;
  max-width:980px;
    
  padding: 0 10rem;
  margin-bottom: 10rem;
  
  p {
    color: ${({theme}) => theme.COLORS.GREY_100};
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
  `;

export const ContactWrapper = styled.div`
  margin-top: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 3.2rem;

  div {
    display: flex;
    align-items: center;

    a{
    font-size: 1.4rem;
    line-height: 2.6rem;
  }
  }
`;

export const MailIcon = styled(AiOutlineMail)`
color: ${({theme}) => theme.COLORS.BLUE_500};
font-size: 2.2rem;
margin-right: 1.6rem;
`;

export const LinkinIcon = styled(AiOutlineLinkedin)`
color: ${({theme}) => theme.COLORS.BLUE_500};
font-size: 2.2rem;
margin-right: 1.6rem;
`;

export const GitIcon = styled(AiFillGithub)`
color: ${({theme}) => theme.COLORS.BLUE_500};
font-size: 2.2rem;
margin-right: 1.6rem;
`;

export const ContactIcon = styled(AiFillContacts)`
color: ${({theme}) => theme.COLORS.BLUE_500};
font-size: 2.2rem;
margin-right: 1.6rem;
`;