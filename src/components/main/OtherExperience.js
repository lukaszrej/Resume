import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import * as S from "../styles";

export default () => {
    const { otherExperience } = usePersonalData();

    const items = otherExperience.map((element) => (
        <S.Institution key={element.id}>
            {element.company ? <h3>{element.company}</h3> : ""}
            <h4>{element.dates} {element.position}</h4>
        </S.Institution>
    )
    );

    return (
        <S.Section>
            <header><h2>Other experience</h2></header>
            { items}
        </S.Section>
    );
};
