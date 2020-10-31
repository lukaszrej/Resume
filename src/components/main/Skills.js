import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import { Section } from "../styles/S.Section";
import { Tags } from "../styles/S.Tags";

export default () => {
    const { skills } = usePersonalData();

    const items = skills.map((skill) => <li key={skill.id}>{skill.label}</li>);

    return (
        <Section>
            <header><h2>Skills</h2></header>
            <Tags>{items}</Tags>
        </Section>
    );
};
