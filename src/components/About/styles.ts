import styled from 'styled-components'
import { 
  AiOutlineMail, 
  AiOutlineLinkedin, 
  AiFillGithub 
} from "react-icons/ai";

export const AboutContainer = styled.section`
  background-color: ${({theme}) => theme.COLORS.GREEN_500};
  margin-bottom: 10rem;
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 3.2rem;
  
  width: 90%;
  max-width: 980px;

  margin: auto;
  padding: 6.4rem 0;
`;

export const UserProfileContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  margin-top: 4rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2 {
    font-size: 2rem;
    }
  }

  div.wrapper-icon {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 2.40rem;

      margin-top: 1.6rem;
    }
`;

export const Avatar = styled.div`
  border: 4px solid ${({theme}) => theme.COLORS.BLUE_500};
  border-radius: 100%;

  padding: 0.8rem;
  margin-bottom: 3.2rem;

  img {
    width: 20rem;
    border-radius: 100%;
  }
`;

export const MailIcon = styled(AiOutlineMail)`
color: ${({theme}) => theme.COLORS.BLUE_500};
font-size: 3.2rem;
`;

export const LinkinIcon = styled(AiOutlineLinkedin)`
color: ${({theme}) => theme.COLORS.BLUE_500};
font-size: 3.2rem;
`;

export const GitIcon = styled(AiFillGithub)`
color: ${({theme}) => theme.COLORS.BLUE_500};
font-size: 3.2rem;
`;

export const AboutWrapper = styled.div`
  h3 {
    margin-bottom: 2.4rem;
    font-size: 1.8rem;
    font-weight: 500;
  }

  img {
    width: 1.2rem;
    margin-right: 1.28rem;
  }

  p {
    color: ${({theme}) => theme.COLORS.GREY_100};
    font-size: 1.7rem;
    line-height: 2.7rem;
  }
`;