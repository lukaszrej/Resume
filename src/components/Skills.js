import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { skills } = usePersonalData();

    const items = skills.map((skill, index) => <li className="c-tags__tag" key={index}>{ skill }</li>);

    return (
        <section className="c-section">
            <header><h2 className="c-section__title">Skills</h2></header>
            <ul className="c-tags">{ items }</ul>
        </section>
    );
};