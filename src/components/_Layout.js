import React, { useContext } from "react";
import { GlobalStateContext } from "../store/ContextProvider";
import Helmet from "./_Helmet";
import * as S from "./styles";

export default ({ children }) => {
    const state = useContext(GlobalStateContext);

    return (
        <S.Layout>
            <Helmet />
            <S.Reset />
            <S.Global isDark={state.isDark} />
            {children}
        </S.Layout>
    );
};
