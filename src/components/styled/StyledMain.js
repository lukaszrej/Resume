import styled from 'styled-components';

export default styled.main`
    display: flex;
    margin-bottom: 32px;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;
