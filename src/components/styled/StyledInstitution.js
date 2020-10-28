import styled from 'styled-components';

export default styled.article`
    margin-bottom: 12px;

    & h3 {
        font-size: 1.2rem;
        margin-bottom: 6px;
    }

    & h4, & p {
        font-size: .8rem;
        font-weight: 400;
        margin-bottom: 3px;
    }

    & h4:nth-last-child(1), & p {
        margin-bottom: 6px;
    }
`;
