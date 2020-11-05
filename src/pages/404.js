import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import * as S from "../components/styles";

export default () => {
    return (
        <Container>
            <Header />
            <S.Section>
                <h1>Section not found</h1>
                <p>The page wasn't found. Go back to see the resume.</p>
                <S.Link primary inline href="/">go back</S.Link>
            </S.Section>
        </Container>
    )
};
