import React, {useContext} from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import {css, Global} from "@emotion/core";
import { useTheme } from "emotion-theming";
import Context from "../../store/context";
import StyledIcon from "../styled/StyledIcon";
import StyledSection from "../styled/StyledSection";
import StyledList from "../styled/StyledList";
import StyledLink from "../styled/StyledLink";

export default () => {
    const { socialMedia } = usePersonalData();
    const { state } = useContext(Context);
    const theme = useTheme();

    const linkedInURL = socialMedia.linkedInUrl;
    const linkedInLabel = socialMedia.linkedInLabel;
    const githubURL = socialMedia.githubUrl;
    const githubLabel = socialMedia.githubLabel;

    return (
        <>
            <Global
                styles={css`
                    .p-social-media__linkedIn { background-image: url("${state.isDark ? theme.dark.linkedInWhite : theme.light.linkedInBlack}") }
                    .p-social-media__github { background-image: url("${state.isDark ? theme.dark.githubWhite : theme.light.githubBlack}") }
                `}
            />
            <StyledSection className="p-social-media">
                <header><h2>Social media</h2></header>

                <StyledList>
                    <li>
                        <StyledLink href={linkedInURL} target="_blank" rel="noopener noreferrer">
                            <StyledIcon className="p-social-media__linkedIn"/>{ linkedInLabel }
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink href={githubURL} target="_blank" rel="noopener noreferrer">
                            <StyledIcon className="p-social-media__github"/>{ githubLabel }
                        </StyledLink>
                    </li>
                </StyledList>
            </StyledSection>
        </>
    );
};
