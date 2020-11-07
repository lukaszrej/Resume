import React from "react";
import GlobalContextProvider from "./src/store/GlobalContextProvider";

export const wrapRootElement = ({ element }) => {
    return (
        <GlobalContextProvider>
            { element }
        </GlobalContextProvider>
    )
}
