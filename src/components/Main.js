import React from "react";
import StyledMain from "../components/styled/StyledMain";
import StyledColumn from "../components/styled/StyledColumn";
import Profile from "./main/Profile";
import WorkExperience from "./main/WorkExperience";
import Projects from "./main/Projects";
import Education from "./main/Education";
import OtherExperience from "./main/OtherExperience";
import Contact from "./main/Contact";
import Skills from "./main/Skills";
import SocialMedia from "./main/SocialMedia";
import Languages from "./main/Languages";

export default () => {
    return (
        <StyledMain>
            <StyledColumn>
                <Profile />
                <Contact />
                <Skills />
                <Education />
                <SocialMedia />
                <Languages />
            </StyledColumn>
            <aside>
                <WorkExperience />
                <Projects />
                <OtherExperience />
            </aside>
        </StyledMain>
    );
};
