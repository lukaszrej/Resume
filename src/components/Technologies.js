import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { technologies } = usePersonalData();

    const items = technologies.map((skill, index) => (
        <div key={index}>
            <p>{ skill }</p>
        </div>
    ))

    return (
        <article className="p-main__technologies">
            <h2 className="p-main__technologies-title">Technologies</h2>
            <section className="p-main__technologiescontent">{ items }</section>
        </article>
    );
};