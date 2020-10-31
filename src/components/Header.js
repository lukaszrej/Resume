import React, { useContext } from "react";
import Context from "../store/context";
import usePersonalData from "../data/hooks/usePersonalData";
import { Header } from "./styles/S.Header";

export default () => {
    const { dispatch } = useContext(Context);
    const { name } = usePersonalData();

    return (
        <Header>
            <header><h1>{name}</h1></header>
            <button
                aria-label="Toggle dark mode"
                onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })} />
        </Header>
    );
};
