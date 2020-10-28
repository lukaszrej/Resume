import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import StyledSection from "../styled/StyledSection";
import StyledTags from "../styled/StyledTags";

export default () => {
    const { skills } = usePersonalData();

    const items = skills.map((skill) => <li key={skill.id}>{ skill.label }</li>);

    return (
        <StyledSection>
            <header><h2>Skills</h2></header>
            <StyledTags>{ items }</StyledTags>
        </StyledSection>
    );
};
