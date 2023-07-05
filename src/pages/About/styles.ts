import styled from 'styled-components'
import { 
  AiOutlineMail, 
  AiOutlineLinkedin, 
  AiFillGithub 
} from "react-icons/ai";

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: fr1 fr2;
  /* justify-content: space-between; */
  margin-top: 6rem;

  background-color: red;
`;

export const UserProfileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


  background-color: #fff;
`;

export const Avatar = styled.div`
  border: 6px solid ${({theme}) => theme.COLORS.BLUE_500};
  border-radius: 100%;

  padding: 0.5rem;
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
    border-radius: 100%;
  }

  h2{
    margin-top: 2rem;
  }
`;

export const MailIcon = styled(AiOutlineMail)`
color: ${({theme}) => theme.COLORS.BLUE_500};
font-size: 2rem;
`;

export const LinkinIcon = styled(AiOutlineLinkedin)`
color: ${({theme}) => theme.COLORS.BLUE_500};
font-size: 2rem;
`;

export const GitIcon = styled(AiFillGithub)`
color: ${({theme}) => theme.COLORS.BLUE_500};
font-size: 2rem;
`;

export const AboutContent = styled.div``;