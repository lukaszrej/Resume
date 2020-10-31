import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import { Icon } from "../styles/S.Icon";
import { Section } from "../styles/S.Section";
import { List } from "../styles/S.List";
import { Link } from "../styles/S.Link";

export default () => {
    const { socialMedia } = usePersonalData();

    const linkedInURL = socialMedia.linkedInUrl;
    const linkedInLabel = socialMedia.linkedInLabel;
    const githubURL = socialMedia.githubUrl;
    const githubLabel = socialMedia.githubLabel;

    return (
        <Section className="p-social-media">
            <header><h2>Social media</h2></header>

            <List>
                <li>
                    <Link href={linkedInURL} target="_blank" rel="noopener noreferrer">
                        <Icon className="p-social-media__linkedIn" />{linkedInLabel}
                    </Link>
                </li>
                <li>
                    <Link href={githubURL} target="_blank" rel="noopener noreferrer">
                        <Icon className="p-social-media__github" />{githubLabel}
                    </Link>
                </li>
            </List>
        </Section>
    );
};
