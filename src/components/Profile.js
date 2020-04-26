import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { profile } = usePersonalData();

    return (
        <section className="c-section p-profile">
            <header><h2 className="c-title">Profile</h2></header>
            <p>{ profile }</p>
        </section>
    );
};