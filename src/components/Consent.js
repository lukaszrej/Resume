import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { consent } = usePersonalData();

    return <footer className="p-consent">{ consent }</footer>;
};