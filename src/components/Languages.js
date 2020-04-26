import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { languages } = usePersonalData();

    const items = languages.map((language, index) => <li key={index}>{ language }</li>);

    return (
        <section className="p-languages">
            <h2 className="c-title">Languages</h2>
            <ul className="c-list">{ items }</ul>
        </section>
    );
};