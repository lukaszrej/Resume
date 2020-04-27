import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { hobbies } = usePersonalData();

    const items = hobbies.map((hobby, index) => <li key={index}>{ hobby }</li>);

    return (
        <section className="c-section p-hobbies">
            <header><h2 className="c-section__title">Hobbies</h2></header>
            <ul className="c-list">{ items }</ul>
        </section>
    );
};