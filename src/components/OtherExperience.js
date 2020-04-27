import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { otherExperience } = usePersonalData();

    const items = otherExperience.map((element, index) => (
        <>
            <article className="c-institution">
                <h3 className="c-institution__title" key={index}>{ element.company }</h3>
                <h4 className="c-institution__description">{ element.dates } { element.position }</h4>
            </article>
        </>)
    );

    return (
        <section className="c-section p-other-experience">
            <header><h2 className="c-section__title">Other experience</h2></header>
            { items }
        </section>
    );
};