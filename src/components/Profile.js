import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { profile } = usePersonalData();

    return (
        <article className="p-main__profile">
            <h2 className="p-main__profile-title">Profile</h2>
            <p className="p-main__profile-content">{ profile }</p>
        </article>
    )
};