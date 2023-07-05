import styled from 'styled-components'

export const Container = styled.div`
    padding: 2.5rem 7rem;
`;

export const CoverContainer = styled.div`
    /* background: radial-gradient(circle, rgba(60,74,89,1) 12%, rgba(32,39,51,1) 86%); */
    display: flex;
    justify-content: space-between;

    div {
        max-width: 500px;
        padding-top: 5rem;

        h1 {
            line-height: 2rem;
            letter-spacing: 0.25rem;
            margin-bottom: 1rem;
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
            
            margin-top: 2rem;
            padding: 8px;

            font-size: 1.5rem;;
        }
    }

    img {
        width: 100%;
        max-width: 340px;
    }
`;