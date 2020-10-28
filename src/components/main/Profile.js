import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import StyledSection from "../styled/StyledSection";

export default () => {
    const { profile } = usePersonalData();

    return (
        <StyledSection>
            <header><h2>Profile</h2></header>
            <p>{ profile }</p>
        </StyledSection>
    );
};
