import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { languages } = usePersonalData();

    const items = languages.map((language, index) => <li key={index}>{ language }</li>);

    return (
        <section className="c-section">
            <header><h2 className="c-section__title">Languages</h2></header>
            <ul className="c-list">{ items }</ul>
        </section>
    );
};