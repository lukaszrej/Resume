import styled from 'styled-components';

export const Projects = styled.article`
    margin-bottom: 12px;

    & h3 {
        margin-bottom: 0;
        font-size: 1.2rem;
    }

    & p {
        font-size: .8rem;
        margin-bottom: 3px;
    }

    & p:last-child {
        margin-bottom: 3px;
        font-size: .8rem;
    }

    & ul {
        list-style-type: none;
        margin: 0;

        &>li {
            font-size: .9rem;
            margin-bottom: .2rem;
        }
    }
`;
