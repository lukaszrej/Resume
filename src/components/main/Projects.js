import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import StyledLink from "../styled/StyledLink";
import StyledLinkInline from "../styled/StyledLinkInline";
import StyledProjects from "../styled/StyledProjects";
import StyledSection from "../styled/StyledSection";

export default () => {
    const { projects } = usePersonalData();

    const items = projects.map((element) => (
        <StyledProjects key={element.id}>
            <StyledLink href={element.description.url} target="_blank" rel="noopener noreferrer">
                <h3>{ element.name }</h3>
            </StyledLink>

            <p>{ element.description.technologies }</p>

            <p>
                Demo: <StyledLinkInline href={element.description.url}>{ element.description.demo }</StyledLinkInline>
            </p>
            
            <ul>
                { element.description.points.map(item => <li key={item}>{ item }</li>) }
            </ul>
        </StyledProjects>)
    );

    return (
        <StyledSection>
            <header><h2>Projects</h2></header>
            { items }
        </StyledSection>
    );
};
