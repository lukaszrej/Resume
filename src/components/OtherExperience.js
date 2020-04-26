import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { otherExperience } = usePersonalData();

    const items = otherExperience.map((element, index) => (
        <>
            {element.company ? <h3 className="p-other-experience__company" key={index}>{ element.company }</h3> : ""}
            <h4 className="p-other-experience__position">{ element.dates } { element.position }</h4>
        </>)
    );

    return (
        <section className="c-section p-other-experience">
            <header><h2 className="c-title">Other experience</h2></header>
            { items }
        </section>
    );
};