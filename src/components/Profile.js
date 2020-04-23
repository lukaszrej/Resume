import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { profile } = usePersonalData();

    return (
        <h2>{ profile }</h2>
    )
};