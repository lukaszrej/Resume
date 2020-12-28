import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import * as S from "../../styles";

export default () => {
    const { skills } = usePersonalData();

    const items = skills.map((skill) => <li key={skill.id}>{skill.label}</li>);

    return (
        <S.Section>
            <header><h2>Skills</h2></header>
            <S.Tags>{items}</S.Tags>
        </S.Section>
    );
};
