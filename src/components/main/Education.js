import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import * as S from "../styles";

export default () => {
    const { education } = usePersonalData();

    const items = education.map((element) => (
        <S.Institution key={element.id}>
            <h3>{element.school} {element.dates}</h3>
            <h4>{element.field}</h4>
            <h4>{element.scope}</h4>
            { element.degree ? <p>{element.degree}</p> : ""}
        </S.Institution>)
    );

    return (
        <S.Section>
            <header><h2>Education</h2></header>
            { items}
        </S.Section>
    );
};
