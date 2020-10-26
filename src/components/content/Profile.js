import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";

export default () => {
    const { profile } = usePersonalData();

    return (
        <section className="c-section">
            <header><h2 className="c-section__title">Profile</h2></header>
            <p>{ profile }</p>
        </section>
    );
};