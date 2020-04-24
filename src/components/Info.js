import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { info } = usePersonalData();

    return (
        <article className="p-main__info">
            <h2 className="p-main__info-title">Additional Info</h2>
            <section className="p-main__info-content">
                <p>{info.linkedIn}</p>
                <p>{info.github}</p>
                <p>{info.location}</p>
            </section>
        </article>
    );
};