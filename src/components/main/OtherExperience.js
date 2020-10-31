import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import { Institution } from "../styles/S.Institution";
import { Section } from "../styles/S.Section";

export default () => {
    const { otherExperience } = usePersonalData();

    const items = otherExperience.map((element) => (
        <Institution key={element.id}>
            {element.company ? <h3>{element.company}</h3> : ""}
            <h4>{element.dates} {element.position}</h4>
        </Institution>
    )
    );

    return (
        <Section>
            <header><h2>Other experience</h2></header>
            { items}
        </Section>
    );
};
