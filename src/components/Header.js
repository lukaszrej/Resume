import React, { useContext } from "react";
import { GlobalDispatchContext } from "../store/ContextProvider";
import usePersonalData from "../data/hooks/usePersonalData";
import * as S from "./styles";

export default () => {
    const dispatch = useContext(GlobalDispatchContext);
    const { name } = usePersonalData();

    const toggleTheme = () => {
        dispatch({type: "TOGGLE_THEME"});
    }

    return (
        <S.Header>
            <header><h1>{ name }</h1></header>
            <button
                aria-label="Toggle color mode"
                type="button"
                onClick={toggleTheme} />
        </S.Header>
    );
};
