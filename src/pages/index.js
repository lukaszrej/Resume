import React from "react";
import "../styles/main.scss"
import Profile from "../components/Profile";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import ExperienceOther from "../components/ExperienceOther";
import Contact from "../components/Contact";
import Technologies from "../components/Technologies";
import Info from "../components/Info";
import Languages from "../components/Languages";
import Hobbies from "../components/Hobbies";
import Consent from "../components/Consent";
import Head from "../components/Head";

const IndexPage = () => (
    <main className="p-container">
        <Head/>
        <section className="p-main">
            <Profile/>
            <Experience/>
            <Projects/>
            <Education/>
            <ExperienceOther/>
            <Contact/>
            <Technologies/>
            <Info/>
            <Languages/>
            <Hobbies/>
            <Consent/>
        </section>
    </main>
);

export default IndexPage;