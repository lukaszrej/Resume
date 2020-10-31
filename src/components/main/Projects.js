import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import { Link } from "../styles/S.Link";
import { Projects } from "../styles/S.Projects";
import { Section } from "../styles/S.Section";

export default () => {
    const { projects } = usePersonalData();

    const items = projects.map((element) => (
        <Projects key={element.id}>
            <Link href={element.description.url} target="_blank" rel="noopener noreferrer">
                <h3>{element.name}</h3>
            </Link>

            <p>{element.description.technologies}</p>

            <p>
                Demo: <Link inline href={element.description.url}>{element.description.demo}</Link>
            </p>

            <ul>
                {element.description.points.map(item => <li key={item}>{item}</li>)}
            </ul>
        </Projects>)
    );

    return (
        <Section>
            <header><h2>Projects</h2></header>
            { items}
        </Section>
    );
};
