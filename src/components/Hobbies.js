import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { hobbies } = usePersonalData();

    const items = hobbies.map((hobby, index) => (
        <div key={index}>
            <p>{ hobby }</p>
        </div>
    ))

    return (
        <article className="p-main__hobbies">
            <h2 className="p-main__hobbies-title">Hobbies</h2>
            <p className="p-main__hobbies-content">{ items }</p>
        </article>
    )
};