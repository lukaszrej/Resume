import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { experience } = usePersonalData();

    const items = experience.map((element, index) => (
        <div key={index}>
            <h3>{element.company}{element.dates}{element.position}</h3>
            <div>
                {element.tasks.map(task => {
                    return <ul>
                        <li>{ task }</li>
                    </ul>
                })}
            </div>
        </div>)
    );

    return (
        <article className="p-main__experience">
            <h2 className="p-main__profile-title">Work Experience</h2>
            <section className="p-main__profile-content">{ items }</section>
        </article>
    );
};