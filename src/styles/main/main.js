import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    margin-bottom: 32px;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;
