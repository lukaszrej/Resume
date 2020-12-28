import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import * as S from "../../styles";

export default () => {
    const { consent } = usePersonalData();

    return (
        <S.Consent>
            {consent}
        </S.Consent>
    );
};
