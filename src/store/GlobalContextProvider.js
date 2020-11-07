import React, { createContext, useReducer } from "react";
import storage from "local-storage-fallback";

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

const initialState = {
    isDark: storage.getItem("isDark") ? JSON.parse(storage.getItem("isDark")) : false
}

const modeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_DARK_MODE": {
            storage.setItem("isDark", !state.isDark)
            return {
                ...state,
                isDark: !state.isDark,
            };
        }
        default: {
            throw new Error('Something with action went wrong.')
        }
    }
};


const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(modeReducer, initialState);

    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
};

export default GlobalContextProvider;
