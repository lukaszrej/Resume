import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import * as S from "../../styles";

export default () => {
    const { workExperience } = usePersonalData();

    const items = workExperience.map((element) => (
        <S.Institution key={element.id}>
            <h3>{element.company}</h3>
            <h4>{element.dates} {element.position}</h4>
            <S.List small>
                {element.tasks.map(task => <li key={task}>{task}</li>)}
            </S.List>
        </S.Institution>)
    );

    return (
        <S.Section>
            <header><h2>Work Experience</h2></header>
            { items}
        </S.Section>
    );
};
