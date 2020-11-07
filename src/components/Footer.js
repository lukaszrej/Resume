import React from "react";
import styled from "styled-components";
import usePersonalData from "../data/hooks/usePersonalData";

export const Consent = styled.p`
    font-size: .8rem;
`;

export default () => {
    const { consent } = usePersonalData();

    return (
        <Consent>
            { consent }
        </Consent>
    );
};
