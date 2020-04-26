import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { consent } = usePersonalData();

    return <section className="p-consent"><p>{ consent }</p></section>;
};