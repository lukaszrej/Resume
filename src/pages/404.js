import React, { useContext } from "react";
import StyledSection from "../components/styled/StyledSection";
import StyledLinkBack from "../components/styled/StyledLinkBack";
import Head from "../components/Head";
import Container from "../components/Container";
import Context from "../store/context";
import { css, Global } from "@emotion/core";
import { useTheme } from "emotion-theming";

export default () => {
    const { state } = useContext(Context)
    const theme = useTheme();

    return (
        <>
            <Global
                styles={ css`                    
                    body { background-color: ${state.isDark ? theme.dark.background : theme.light.background} }
                    h1, p { color: ${state.isDark ? theme.dark.fontColor : theme.light.fontColor} }
                `}
            />
            <Container>
                <Head />
                <StyledSection>
                    <h1>Section not found</h1>
                    <p>The page wasn't found. Go back to see the resume.</p>
                    <StyledLinkBack href="/">go back</StyledLinkBack>
                </StyledSection>
            </Container>
        </>
    )
};
