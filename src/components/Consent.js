import React from "react";
import usePersonalData from "../data/hooks/usePersonalData";
import StyledConsent from "./styled/StyledConsent";

export default () => {
    const { consent } = usePersonalData();

    return (
        <StyledConsent>
            { consent }
        </StyledConsent>
    );
};
