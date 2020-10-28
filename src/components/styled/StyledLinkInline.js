import styled from 'styled-components';

export default styled.a`
    display: block;
    text-decoration: none;
    margin-bottom: 3px;
    font-style: italic;

    display: inline;

    &:hover {
        color: rgb(104, 119, 141);
        transition: all .4s ease;
        text-decoration: underline;
    }
`;
