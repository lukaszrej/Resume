import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import * as S from "../styles";

export default () => {
    const { languages } = usePersonalData();

    const items = languages.map(language => <li key={language.id}>{language.label}</li>);

    return (
        <S.Section>
            <header>
                <h2>Languages</h2>
            </header>
            <S.List>
                {items}
            </S.List>
        </S.Section>
    );
};
