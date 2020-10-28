import React from "react";
import Container from '../components/Container';
import Head from "../components/Head";
import Main from '../components/Main';
import Consent from "../components/Consent";

export default () => {
    return (
        <Container>
            <Head />
            <Main />
            <Consent />
        </Container>
    );
};
