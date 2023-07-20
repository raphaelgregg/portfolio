import styled from 'styled-components';

import { 
  AiOutlineMail, 
  AiOutlineLinkedin, 
  AiFillGithub,
  AiFillContacts
} from "react-icons/ai";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-between;

  width: 100%;
  max-width:980px;
    
  margin-bottom: 10rem;

  h2 {
    display: flex;
    align-self: center;
    justify-content: center;

    font-weight: 500;
    margin-bottom: 3rem;
  }
    
  img {
    width: .75rem;
    margin-right: .8rem;
  }

  p {
    color: ${({theme}) => theme.COLORS.GREY_100};
    font-size: 1.15rem;
    line-height: 2.5rem;
  }
`;

export const ContactWrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  justify-items: space-between;

  background-color: red;

  gap: 2rem;

  div {
    display: flex;
    align-items: center;
  }
`;

export const MailIcon = styled(AiOutlineMail)`
color: ${({theme}) => theme.COLORS.BLUE_500};
font-size: 2rem;
margin-right: 1rem;
`;

export const LinkinIcon = styled(AiOutlineLinkedin)`
color: ${({theme}) => theme.COLORS.BLUE_500};
font-size: 2rem;
margin-right: 1rem;
`;

export const GitIcon = styled(AiFillGithub)`
color: ${({theme}) => theme.COLORS.BLUE_500};
font-size: 2rem;
margin-right: 1rem;
`;

export const ContactIcon = styled(AiFillContacts)`
color: ${({theme}) => theme.COLORS.BLUE_500};
font-size: 2rem;
margin-right: 1rem;
`;