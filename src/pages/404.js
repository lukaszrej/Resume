import React from "react";
import StyledSection from "../components/styled/StyledSection";
import StyledLinkBack from "../components/styled/StyledLinkBack";
import Head from "../components/Head";
import Container from "../components/Container";

export default () => {
    return (
        <Container>
            <Head />
            <StyledSection>
                <h1>Section not found</h1>
                <p>The page wasn't found. Go back to see the resume.</p>
                <StyledLinkBack href="/">go back</StyledLinkBack>
            </StyledSection>
        </Container>
    )
};
