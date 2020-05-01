import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { workExperience } = usePersonalData();

    const items = workExperience.map((element) => (
        <article className="c-institution" key={element.id}>
            <h3 className="c-institution__title">{ element.company }</h3>
            <h4 className="c-institution__description">{ element.dates } { element.position }</h4>
            <ul className="c-list c-list__small">
                { element.tasks.map(task => <li key={task}>{ task }</li>) }
            </ul>
        </article>)
    );

    return (
        <section className="c-section">
            <header><h2 className="c-section__title">Work Experience</h2></header>
            { items }
        </section>
    );
};