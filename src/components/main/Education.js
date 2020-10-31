import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import { Institution } from "../styles/S.Institution";
import { Section } from "../styles/S.Section";

export default () => {
    const { education } = usePersonalData();

    const items = education.map((element) => (
        <Institution key={element.id}>
            <h3>{element.school} {element.dates}</h3>
            <h4>{element.field}</h4>
            <h4>{element.scope}</h4>
            { element.degree ? <p>{element.degree}</p> : ""}
        </Institution>)
    );

    return (
        <Section>
            <header><h2>Education</h2></header>
            { items}
        </Section>
    );
};
