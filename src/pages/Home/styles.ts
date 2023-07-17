import styled from 'styled-components'

export const Container = styled.div`
`;

export const DefaultWrapper = styled.div`
    padding: 3rem 7rem;

    height: 100vh;
`;
export const AboutWrapper = styled.div`
    height: 100vh;

    display: flex;
    align-items: center;
`;

export const HomeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(100vh - 13rem);
    
    div {
        max-width: 500px;

        h1 {
            font-size: 2.5rem;
            line-height: 2rem;
            letter-spacing: 0.25rem;
            margin-bottom: 1.5rem;
            font-weight: 500;
        }

        p.emphasis {
            color: ${({theme}) => theme.COLORS.BLUE_500};
            font-size: 1.1rem;
            margin-bottom: .75rem;
        }

        p {
            font-size: 1.125rem;
            line-height: 1.5rem;
            margin-bottom: 0.5rem;
            color: ${({theme}) => theme.COLORS.GREY_100};
        }

        button {
            background-color: transparent;
            color: ${({theme}) => theme.COLORS.BLUE_500};
            
            border: 1px solid ${({theme}) => theme.COLORS.BLUE_500};
            border-radius: 3px;
            
            margin-top: 4rem;
            padding: .75rem 4rem;

            font-size: 1.5rem;;
            
            &:hover {
                background-color: ${({theme}) => theme.COLORS.BLUE_500};
                color: ${({theme}) => theme.COLORS.GREY_900};
                transition: .8s;
            }
        }
    }

    img {
        width: 100%;
        max-width: 400px;
    }
`;