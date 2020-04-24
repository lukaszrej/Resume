import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { education } = usePersonalData();

    const items = education.map((element, index) => (
        <div key={index}>
            <h3>{element.school}{element.dates}</h3>
            <h4>{element.field}{element.scope}</h4>
            <p>{element.degree}</p>
        </div>)
    );

    return (
        <article className="p-main__education">
            <h2 className="p-main__education-title">Education</h2>
            <section className="p-main__education-content">{ items }</section>
        </article>
    );
};