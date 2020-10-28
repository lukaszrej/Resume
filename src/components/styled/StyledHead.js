import styled from 'styled-components';

export default styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 64px;

    & h1 {
        margin: 0;
        text-transform: uppercase;
        font-weight: 400;
    }

    & button {
        background-repeat: no-repeat;
        background-size: 28px;
        height: 28px;
        width: 28px;
        border: none;

        &:focus {
            outline: 0;
        }
    }
`;
