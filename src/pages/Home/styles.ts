import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 90%;
    max-width: 980px;

    margin: auto;

    height: calc(100vh - 20.6rem);

    
    div {
        max-width: 500px;

        h1 {
            font-size: 4rem;
            line-height: 3.2rem;
            letter-spacing: .4rem;
            margin-bottom: 2.4rem;
            font-weight: 500;
        }

        p.emphasis {
            color: ${({theme}) => theme.COLORS.BLUE_500};
            font-size: 1.76rem;
            margin-bottom: 1.2rem;
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
            
            margin-top: 6.4rem;
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
        width: 100%;
        max-width: 320px;
    }
`;