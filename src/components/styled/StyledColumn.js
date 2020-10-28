import styled from 'styled-components';

export default styled.div`
    max-width: 55%;

    @media screen and (max-width: 960px) {
        max-width: 50%;
        margin-right: .8rem;
    }

    @media screen and (max-width: 800px) {
        max-width: initial;
    }
`;
