import React from "react";
import usePersonalData from "../data/hooks/usePersonalData";

export default () => {
    const { consent } = usePersonalData();

    return <section className="p-consent"><p>{ consent }</p></section>;
};