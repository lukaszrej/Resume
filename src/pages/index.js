import React from "react";
import Container from '../components/Container';
import Header from "../components/Header";
import Main from '../components/Main';
import Consent from "../components/Consent";

export default () => {
    return (
        <Container>
            <Header />
            <Main />
            <Consent />
        </Container>
    );
};
