import React, { useContext } from "react";
import { GlobalDispatchContext } from "../store/GlobalContextProvider";
import usePersonalData from "../data/hooks/usePersonalData";
import * as S from "./styles";

export default () => {
    const { name } = usePersonalData();
    const dispatch = useContext(GlobalDispatchContext);

    const toggleTheme = () => {
        dispatch({type: 'TOGGLE_DARK_MODE'});
    }

    return (
        <S.Header>
            <header><h1>{ name }</h1></header>
            <button
                aria-label="Toggle dark mode"
                type="button"
                onClick={toggleTheme} />
        </S.Header>
    );
};
