import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";

export default () => {
    const { languages } = usePersonalData();

    const items = languages.map(language => <li key={language.id}>{ language.label }</li>);

    return (
        <section className="c-section">
            <header><h2 className="c-section__title">Languages</h2></header>
            <ul className="c-list">{ items }</ul>
        </section>
    );
};