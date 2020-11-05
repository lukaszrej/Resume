import React from "react";
import * as S from "./styles";
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
