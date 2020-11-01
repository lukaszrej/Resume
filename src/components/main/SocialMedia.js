import React, { useContext } from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import Context from "../../store/context";
import { Section } from "../styles/S.Section";
import { List } from "../styles/S.List";
import { Link } from "../styles/S.Link";
import { LinkedInIcon, GithubIcon } from "../styles/S.Icon";

export default () => {
    const { state } = useContext(Context);
    const { socialMedia } = usePersonalData();

    const linkedInURL = socialMedia.linkedInUrl;
    const linkedInLabel = socialMedia.linkedInLabel;
    const githubURL = socialMedia.githubUrl;
    const githubLabel = socialMedia.githubLabel;

    return (
        <Section>
            <header><h2>Social media</h2></header>

            <List>
                <li>
                    <Link href={linkedInURL} target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon isDark={state.isDark} />{linkedInLabel}
                    </Link>
                </li>
                <li>
                    <Link href={githubURL} target="_blank" rel="noopener noreferrer">
                        <GithubIcon isDark={state.isDark} />{githubLabel}
                    </Link>
                </li>
            </List>
        </Section>
    );
};
