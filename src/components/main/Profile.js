import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import { Section } from "../styles/S.Section";

export default () => {
    const { profile } = usePersonalData();

    return (
        <Section>
            <header><h2>Profile</h2></header>
            <p>{profile}</p>
        </Section>
    );
};
