import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import StyledSection from "../components/styled/StyledSection";
import StyledLinkBack from "../components/styled/StyledLinkBack";

export default () => {
    return (
        <Container>
            <Header />
            <StyledSection>
                <h1>Section not found</h1>
                <p>The page wasn't found. Go back to see the resume.</p>
                <StyledLinkBack href="/">go back</StyledLinkBack>
            </StyledSection>
        </Container>
    )
};
