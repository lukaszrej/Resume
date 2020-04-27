import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { skills } = usePersonalData();

    const items = skills.map((skill, index) => (
        <ul className="c-tags" key={index}><li className="c-tags__tag">{ skill }</li></ul>
    ));

    return (
        <section className="c-section">
            <header><h2 className="c-section__title">Skills</h2></header>
            { items }
        </section>
    );
};