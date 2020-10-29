import React from "react";
import useGlobalState from "./useGlobalState";
import Context from "./context";

const StateProvider = ({ children }) => {
    return (
        <Context.Provider value={ useGlobalState() }>
            { children }
        </Context.Provider>
    );
};

export default StateProvider;
