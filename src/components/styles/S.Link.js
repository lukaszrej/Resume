import styled from 'styled-components';

// takes 'inline' and 'primary' as a props
export const Link = styled.a`
    text-decoration: none;
    margin-bottom: 3px;
    display: ${props => props.inline ? "inline-flex" : "block"};
    font-style: ${props => props.primary ? "initial" : "italic"};
    background-color: ${props => props.primary ? "rgb(237, 242, 247)" : "initial"};
    color: ${props => props.primary ? "rgb(74, 85, 104)" : ""};
    padding: ${props => props.primary ? ".35rem .85rem" : "initial"};

    &:hover {
        color: ${props => props.primary ? "#68778d" : "rgb(104, 119, 141)"};
        transition: all .4s ease;
        text-decoration: underline;
    }
`;
