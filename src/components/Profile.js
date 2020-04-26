import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { profile } = usePersonalData();

    return (
        <section className="p-profile">
            <h2 className="c-title">Profile</h2>
            <p>{ profile }</p>
        </section>
    );
};