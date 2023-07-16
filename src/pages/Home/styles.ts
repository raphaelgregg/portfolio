import styled from 'styled-components'

export const Container = styled.div`
`;

export const DefaultWrapper = styled.div`
    padding: 3rem 7rem;
`;
export const AboutWrapper = styled.div`
    background-color: ${({theme}) => theme.COLORS.GREEN_500};
    padding: 3rem 7rem;
`;

export const HomeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
    div {
        max-width: 500px;
        padding-top: 5rem;
        h1 {
            line-height: 2rem;
            letter-spacing: 0.25rem;
            margin-bottom: 1rem;
            font-weight: 500;
        }

        p {
            line-height: 1.5rem;
            margin-bottom: 0.5rem;
            color: ${({theme}) => theme.COLORS.GREY_100};
        }

        p.emphasis {
            color: ${({theme}) => theme.COLORS.BLUE_500};
        }

        button {
            background-color: transparent;
            color: ${({theme}) => theme.COLORS.BLUE_500};
            
            border: 1px solid ${({theme}) => theme.COLORS.BLUE_500};
            border-radius: 3px;
            
            width: 17rem;
            
            margin-top: 4rem;
            padding: 8px;

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
        max-width: 340px;

        margin-top: 4rem;
    }

    margin-bottom: 4rem;
`;