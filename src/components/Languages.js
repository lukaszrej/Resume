import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { languages } = usePersonalData();

    const items = languages.map((language, index) => (
        <div key={index}>
            <p>{ language }</p>
        </div>
    ))

    return (
        <article className="p-main__languages">
            <h2 className="p-main__languages-title">Languages</h2>
            <p className="p-main__languages-content">{ items }</p>
        </article>
    )
};