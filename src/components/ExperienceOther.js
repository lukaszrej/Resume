import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { experienceOther } = usePersonalData();

    const items = experienceOther.map((element, index) => (
        <div key={index}>
            <h3>{element.position}</h3>
            <h4>{element.company}{element.dates}</h4>
        </div>)
    );

    return (
        <article className="p-main__experience-other">
            <h2 className="p-main__experience-other-title">Experience Other</h2>
            <section className="p-main__experience-other-content">{ items }</section>
        </article>
    );
};