import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { projects } = usePersonalData();

    const items = projects.map((element, index) => (
        <div key={index}>
            <h3>{element.name}</h3>
            <div>{element.description.technologies}</div>
            <div>{element.description.demo}</div>
            <div>
                {element.description.points.map(item => {
                    return <ul>
                        <li>{ item }</li>
                    </ul>
                })}
            </div>
        </div>)
    );

    return (
        <article className="p-main__projects">
            <h2 className="p-main__projects-title">Projects</h2>
            <section className="p-main__projects-content">{ items }</section>
        </article>
    );
};