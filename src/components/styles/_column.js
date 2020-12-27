import styled from 'styled-components';

export const Column = styled.div`
    max-width: 55%;
    padding-right: 24px;

    @media screen and (max-width: 960px) {
        max-width: 50%;
        margin-right: .8rem;
    }

    @media screen and (max-width: 800px) {
        max-width: initial;
    }
`;
