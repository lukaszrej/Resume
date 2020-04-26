import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { education } = usePersonalData();

    const items = education.map((element, index) => (
        <>
            <h3 key={index}>{element.school}{element.dates}</h3>
            <h4>{element.field}{element.scope}</h4>
            <p>{element.degree}</p>
        </>)
    );

    return (
        <section className="c-section p-education">
            <header><h2 className="c-title">Education</h2></header>
            { items }
        </section>
    );
};