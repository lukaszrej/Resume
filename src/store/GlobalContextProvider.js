import React from "react";
import { initialState, darkModeReducer } from "./reducer";
import { GlobalStateContext, GlobalDispatchContext } from "./context";

const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(darkModeReducer, initialState);

    return (
        <GlobalStateContext.Provider value={ state }>
            <GlobalDispatchContext.Provider value={ dispatch }>
                { children }
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
};

export default GlobalContextProvider;
