import React from "react";
import "../styles/main.scss"
import Head from "../components/Head";
import Main from '../components/Main';
import Consent from "../components/Consent";

const IndexPage = () => (
    <section className="p-container">
        <Head/>
        <Main />
        <Consent/>
    </section>
);

export default IndexPage;