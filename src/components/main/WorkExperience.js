import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import { Section } from "../styles/S.Section";
import { Institution } from "../styles/S.Institution";
import { List } from "../styles/S.List";

export default () => {
    const { workExperience } = usePersonalData();

    const items = workExperience.map((element) => (
        <Institution key={element.id}>
            <h3>{element.company}</h3>
            <h4>{element.dates} {element.position}</h4>
            <List small>
                {element.tasks.map(task => <li key={task}>{task}</li>)}
            </List>
        </Institution>)
    );

    return (
        <Section>
            <header><h2>Work Experience</h2></header>
            { items}
        </Section>
    );
};
