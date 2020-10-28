import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import StyledSection from "../styled/StyledSection";
import StyledList from "../styled/StyledList";

export default () => {
    const { languages } = usePersonalData();

    const items = languages.map(language => <li key={language.id}>{ language.label }</li>);

    return (
        <StyledSection>
            <header>
                <h2>Languages</h2>
            </header>
            <StyledList>
                { items }
            </StyledList>
        </StyledSection>
    );
};
