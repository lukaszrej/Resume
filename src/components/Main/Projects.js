import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import * as S from "../../styles";

export default () => {
    const { projects } = usePersonalData();

    const items = projects.map((element) => (
        <S.Projects key={element.id}>
            <S.Link href={element.description.url} target="_blank" rel="noopener noreferrer">
                <h3>{element.name}</h3>
            </S.Link>

            <p>{element.description.technologies}</p>

            <p>
                Demo: <S.Link inline href={element.description.url}>{element.description.demo}</S.Link>
            </p>

            <ul>
                {element.description.points.map(item => <li key={item}>{item}</li>)}
            </ul>
        </S.Projects>)
    );

    return (
        <S.Section>
            <header><h2>Projects</h2></header>
            { items}
        </S.Section>
    );
};
