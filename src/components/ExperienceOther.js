import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { experienceOther } = usePersonalData();

    const items = experienceOther.map((element, index) => (
        <>
            <h3 key={index}>{element.position}</h3>
            <h4>{element.company}{element.dates}</h4>
        </>)
    );

    return (
        <section className="p-experience-other">
            <h2 className="c-title">Other experience</h2>
            { items }
        </section>
    );
};