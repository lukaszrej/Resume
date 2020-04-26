import React from "react";
import "../styles/main.scss"
import Profile from "../components/Profile";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import OtherExperience from "../components/OtherExperience";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import SocialMedia from "../components/SocialMedia";
import Languages from "../components/Languages";
import Hobbies from "../components/Hobbies";
import Consent from "../components/Consent";
import Head from "../components/Head";

const IndexPage = () => (
    <main className="p-container">
        <Head/>

        <section className="p-main">
            <div className="p-main__wrapper">
                <div className="p-main__column">
                    <Profile/>
                    <Contact/>
                    <Skills/>
                    <Education/>
                    <SocialMedia/>
                    <Languages/>
                    <Hobbies/>
                </div>
                <div>
                    <WorkExperience/>
                    <Projects/>
                    <OtherExperience/>
                </div>
            </div>
        </section>

        <Consent/>
    </main>
);

export default IndexPage;