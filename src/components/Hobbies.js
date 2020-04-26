import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { hobbies } = usePersonalData();

    const items = hobbies.map((hobby, index) => <li key={index}>{ hobby }</li>);

    return (
        <section className="p-hobbies">
            <h2 className="c-title">Hobbies</h2>
            <ul className="c-list">{ items }</ul>
        </section>
    );
};