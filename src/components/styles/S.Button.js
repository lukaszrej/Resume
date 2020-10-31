import styled from 'styled-components';

export const Button = styled.button`
    display: inline-flex;
    flex-wrap: wrap;
    background-color: rgb(237, 242, 247);
    color: rgb(74, 85, 104);
    padding: .35rem .85rem;
    text-decoration: none;

    &:hover {
        color: #68778d;
        transition: color .4s ease;
        text-decoration: underline;
    }
`;
