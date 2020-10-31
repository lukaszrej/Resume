import styled from 'styled-components';

export const Layout = styled.section`
    margin: 0 auto;
    height: 91.3509rem;
    max-width: 64.6094rem;
    padding: 4rem;

    @media screen and (max-width: 1024px) {
        & {
            padding-left: 3rem;
            padding-right: 3rem;
        }
    }

    @media screen and (max-width: 800px) {
        & {
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }
`;
