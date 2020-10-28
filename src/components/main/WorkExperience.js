import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import StyledSection from "../styled/StyledSection";
import StyledInstitution from "../styled/StyledInstitution";
import StyledListSmall from "../styled/StyledListSmall";

export default () => {
    const { workExperience } = usePersonalData();

    const items = workExperience.map((element) => (
        <StyledInstitution key={element.id}>
            <h3>{ element.company }</h3>
            <h4>{ element.dates } { element.position }</h4>
            <StyledListSmall>
                { element.tasks.map(task => <li key={task}>{ task }</li>) }
            </StyledListSmall>
        </StyledInstitution>)
    );

    return (
        <StyledSection>
            <header><h2>Work Experience</h2></header>
            { items }
        </StyledSection>
    );
};
