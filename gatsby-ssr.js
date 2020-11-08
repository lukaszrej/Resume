import React from "react";
import ContextProvider from "./src/store/ContextProvider";

export const wrapRootElement = ({ element }) => {
    return (
        <ContextProvider>
            { element}
        </ContextProvider>
    )
}
