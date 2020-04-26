import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { projects } = usePersonalData();

    const items = projects.map((element, index) => (
        <>
            <h3 className="p-projects__title" key={index}>{ element.name }</h3>
            <p className="p-projects__description">{ element.description.technologies }</p>
            <p className="p-projects__description">{ element.description.demo }</p>
            <ul className="c-list">{ element.description.points.map(item => <li>{ item }</li>) }</ul>
        </>)
    );

    return (
        <section className="p-projects">
            <h2 className="c-title">Projects</h2>
            <article>{ items }</article>
        </section>
    );
};