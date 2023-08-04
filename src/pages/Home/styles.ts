import styled from 'styled-components';

export const HomeContainer = styled.section`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 90%;
    max-width: 980px;

    height: 100vh;
    top:-4rem;
    
    margin: auto;
    
    div {
        max-width: 500px;

        span {
            color: ${({theme}) => theme.COLORS.BLUE_500};
            font-size: 1.76rem;
        }

        h1 {
            font-size: 4rem;
            line-height: 3.2rem;
            letter-spacing: .4rem;
            margin-bottom: 2.4rem;
            margin-top: 1rem;
            font-weight: 500;
        }

        p {
            font-size: 1.6rem;
            line-height: 2.4rem;
            margin-bottom: 0.8rem;
            color: ${({theme}) => theme.COLORS.GREY_100};
        }

        button {
            background-color: transparent;
            color: ${({theme}) => theme.COLORS.BLUE_500};
            
            border: 1px solid ${({theme}) => theme.COLORS.BLUE_500};
            border-radius: 3px;
            
            margin: 6.4rem auto;
            padding: 1.2rem 6.4rem;

            font-size: 2rem;;
            
            &:hover {
                background-color: ${({theme}) => theme.COLORS.BLUE_500};
                color: ${({theme}) => theme.COLORS.GREY_900};
                transition: .7s;
            }
        }
    }

    img {
        width: auto;
        max-width: 32rem;
    }
`;