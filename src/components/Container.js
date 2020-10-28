import React from "react";
import StyledContainer from "../components/styled/StyledContainer";
import GlobalStyle from "../components/styled/GlobalStyle";

export default ({ children }) => {
    return (
        <StyledContainer>
            <GlobalStyle />
            { children }
        </StyledContainer>
    );
};
