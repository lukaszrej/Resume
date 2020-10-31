import React from "react";
import usePersonalData from "../data/hooks/usePersonalData";
import { Consent } from "./styles/S.Consent";

export default () => {
    const { consent } = usePersonalData();

    return (
        <Consent>
            { consent }
        </Consent>
    );
};
