import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import StyledInstitution from "../styled/StyledInstitution";
import StyledSection from "../styled/StyledSection";

export default () => {
    const { otherExperience } = usePersonalData();

    const items = otherExperience.map((element) => (
            <StyledInstitution key={element.id}>
                {element.company ? <h3>{ element.company }</h3> : ""}
                <h4>{ element.dates } { element.position }</h4>
            </StyledInstitution>
        )
    );

    return (
        <StyledSection>
            <header><h2>Other experience</h2></header>
            { items }
        </StyledSection>
    );
};
