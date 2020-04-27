import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { projects } = usePersonalData();

    const items = projects.map((element, index) => (
        <>
            <article className="c-project">
                <h3 className="c-project__title" key={index}>{ element.name }</h3>
                <p className="c-project__techs">{ element.description.technologies }</p>
                <p className="c-project__link">{ element.description.demo }</p>
                <ul className="c-project__list">{ element.description.points.map(item => <li>{ item }</li>) }</ul>
            </article>
        </>)
    );

    return (
        <section className="c-section">
            <header><h2 className="c-section__title">Projects</h2></header>
            { items }
        </section>
    );
};