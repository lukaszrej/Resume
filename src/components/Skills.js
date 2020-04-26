import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { technologies } = usePersonalData();

    const skills = technologies.map((skill, index) => (
        <ul className="c-tags" key={index}><li className="c-tags__tag">{ skill }</li></ul>
    ));

    return (
        <section className="p-skills">
            <h2 className="c-title">Skills</h2>
            { skills }
        </section>
    );
};