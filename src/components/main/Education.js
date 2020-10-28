import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import StyledInstitution from "../styled/StyledInstitution";
import StyledSection from "../styled/StyledSection";

export default () => {
    const { education } = usePersonalData();

    const items = education.map((element) => (
        <StyledInstitution key={element.id}>
            <h3>{element.school} {element.dates}</h3>
            <h4>{element.field}</h4>
            <h4>{element.scope}</h4>
            { element.degree ? <p>{element.degree}</p> : "" }
        </StyledInstitution>)
    );

    return (
        <StyledSection>
            <header><h2>Education</h2></header>
            { items }
        </StyledSection>
    );
};
