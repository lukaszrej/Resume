import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { name } = usePersonalData();

    return (
        <h1>{ name }</h1>
    )
};