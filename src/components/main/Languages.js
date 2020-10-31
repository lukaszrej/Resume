import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import { Section } from "../styles/S.Section";
import { List } from "../styles/S.List";

export default () => {
    const { languages } = usePersonalData();

    const items = languages.map(language => <li key={language.id}>{language.label}</li>);

    return (
        <Section>
            <header>
                <h2>Languages</h2>
            </header>
            <List>
                {items}
            </List>
        </Section>
    );
};
