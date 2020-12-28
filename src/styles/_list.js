import styled from 'styled-components';

export const List = styled.ul`
    list-style-type: none;
    margin: 0;

    & > li {
        margin-bottom: .2rem;
        font-size: ${props => props.small ? ".8rem" : "initial"};
    }
`;
