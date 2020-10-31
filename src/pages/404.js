import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import { Section } from "../components/styles/S.Section";
import { Link } from "../components/styles/S.Link";

export default () => {
    return (
        <Container>
            <Header />
            <Section>
                <h1>Section not found</h1>
                <p>The page wasn't found. Go back to see the resume.</p>
                <Link primary inline href="/">go back</Link>
            </Section>
        </Container>
    )
};
