import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { consent } = usePersonalData();

    return (
        <article className="p-main__consent">
            <p className="p-main__consent-content">{ consent }</p>
        </article>
    )
};