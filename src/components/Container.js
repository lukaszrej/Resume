import React from "react";
import * as S from "./styles";
import Head from "./Head";

export default ({ children }) => {
    return (
        <S.Layout>
            <Head />
            <S.Reset />
            <S.Global />

            { children }

        </S.Layout>
    );
};
