import styled from 'styled-components'
import { 
  AiOutlineMail, 
  AiOutlineLinkedin, 
  AiFillGithub 
} from "react-icons/ai";

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2rem;    
  /* background-color: ${({theme}) => theme.COLORS.GREEN_500}; */

  background-color: ${({theme}) => theme.COLORS.GREEN_500};
  padding: 3rem 7rem;
`;

export const UserProfileContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  margin-top: 2.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  div.wrapper-icon {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1.4rem;

      margin-top: 1rem;
    }
`;

export const Avatar = styled.div`
  border: 4px solid ${({theme}) => theme.COLORS.BLUE_500};
  border-radius: 100%;

  padding: 0.5rem;
  margin-bottom: 2rem;

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

export const AboutContent = styled.div`
  h2 {
    margin-bottom: 3rem;
    font-weight: 500;

    display: flex;
  }

  h3 {
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  img {
    width: .75rem;
    margin-right: .8rem;
  }

  p {
    color: ${({theme}) => theme.COLORS.GREY_100};
    font-size: 1.15rem;
    line-height: 1.8rem;
  }
`;