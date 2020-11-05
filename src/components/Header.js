import React from "react";
import usePersonalData from "../data/hooks/usePersonalData";
import * as S from "./styles";

export default () => {
    const { name } = usePersonalData();

    return (
        <S.Header>
            <header><h1>{ name }</h1></header>
            <button
                aria-label="Toggle dark mode"
                onClick={ console.log('header clicked') } />
        </S.Header>
    );
};
