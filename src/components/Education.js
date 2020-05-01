import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { education } = usePersonalData();

    const items = education.map((element) => (
        <article className="c-institution">
            <h3 className="c-institution__title">{element.school} {element.dates}</h3>
            <h4 className="c-institution__description">{element.field}</h4>
            <h4 className="c-institution__description">{element.scope}</h4>
            { element.degree ? <p className="c-institution__description">{element.degree}</p> : "" }
        </article>)
    );

    return (
        <section className="c-section">
            <header><h2 className="c-section__title">Education</h2></header>
            { items }
        </section>
    );
};