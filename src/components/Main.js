import React from "react";
import "../styles/main.scss"
import Profile from "./content/Profile";
import WorkExperience from "./content/WorkExperience";
import Projects from "./content/Projects";
import Education from "./content/Education";
import OtherExperience from "./content/OtherExperience";
import Contact from "./content/Contact";
import Skills from "./content/Skills";
import SocialMedia from "./content/SocialMedia";
import Languages from "./content/Languages";

export default () => {
    return (
        <main className="p-main">
            <div className="p-main__wrapper">
                <div className="p-main__column">
                    <Profile />
                    <Contact />
                    <Skills />
                    <Education />
                    <SocialMedia />
                    <Languages />
                </div>
                <div>
                    <WorkExperience />
                    <Projects />
                    <OtherExperience />
                </div>
            </div>
        </main>
    );
};