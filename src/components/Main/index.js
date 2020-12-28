import React from "react";
import Profile from "./Profile";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Education from "./Education";
import OtherExperience from "./OtherExperience";
import Contact from "./Contact";
import Skills from "./Skills";
import SocialMedia from "./SocialMedia";
import Languages from "./Languages";
import * as S from "../../styles";

export default () => {
    return (
        <S.Main>
            <S.Column>
                <Profile />
                <Contact />
                <Skills />
                <Education />
                <SocialMedia />
                <Languages />
            </S.Column>
            <aside>
                <WorkExperience />
                <Projects />
                <OtherExperience />
            </aside>
        </S.Main>
    );
};
