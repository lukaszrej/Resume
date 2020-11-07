import React, { createContext, useReducer } from "react";
import { themeReducer, initialState } from "./themeReducer";

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
};

export default ContextProvider;
