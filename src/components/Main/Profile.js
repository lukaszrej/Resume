import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import * as S from "../../styles";

export default () => {
    const { profile } = usePersonalData();

    return (
        <S.Section>
            <header><h2>Profile</h2></header>
            <p>{profile}</p>
        </S.Section>
    );
};
