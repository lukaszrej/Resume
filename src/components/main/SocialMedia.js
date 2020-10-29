import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import StyledIcon from "../styled/StyledIcon";
import StyledSection from "../styled/StyledSection";
import StyledList from "../styled/StyledList";
import StyledLink from "../styled/StyledLink";

export default () => {
    const { socialMedia } = usePersonalData();

    const linkedInURL = socialMedia.linkedInUrl;
    const linkedInLabel = socialMedia.linkedInLabel;
    const githubURL = socialMedia.githubUrl;
    const githubLabel = socialMedia.githubLabel;

    return (
        <StyledSection className="p-social-media">
            <header><h2>Social media</h2></header>

            <StyledList>
                <li>
                    <StyledLink href={ linkedInURL } target="_blank" rel="noopener noreferrer">
                        <StyledIcon className="p-social-media__linkedIn" />{ linkedInLabel }
                    </StyledLink>
                </li>
                <li>
                    <StyledLink href={ githubURL } target="_blank" rel="noopener noreferrer">
                        <StyledIcon className="p-social-media__github" />{ githubLabel }
                    </StyledLink>
                </li>
            </StyledList>
        </StyledSection>
    );
};
