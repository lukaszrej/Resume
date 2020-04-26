import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { experience } = usePersonalData();

    const items = experience.map((element, index) => (
        <>
            <h3 key={index}>{ element.company }</h3>
            <h4>{ element.dates } { element.position }</h4>
            <ul className="c-list">{ element.tasks.map(task => <li>{ task }</li>) }</ul>
        </>)
    );

    return (
        <section className="p-experience">
            <h2 className="c-title">Work Experience</h2>
            { items }
        </section>
    );
};