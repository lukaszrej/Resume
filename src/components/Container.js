import React, {useContext} from "react";
import { GlobalStateContext } from "../store/GlobalContextProvider";

import * as S from "./styles";
import Head from "./Head";

export default ({ children }) => {
    const state = useContext(GlobalStateContext);

    return (
        <S.Layout>
            <Head />
            <S.Reset />
            <S.Global isDark={state.isDark} />

            {children}
        </S.Layout>
    );
};
