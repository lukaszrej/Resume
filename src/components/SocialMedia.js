import React, {useContext} from "react";
import usePersonalData from "../hooks/usePersonalData";
import {css, Global} from "@emotion/core";
import { useTheme } from "emotion-theming";
import Context from "../store/context";

export default () => {
    const { socialMedia } = usePersonalData();
    const { state } = useContext(Context);
    const theme = useTheme();
    const linkedInURL = socialMedia.linkedInLabel;
    const linkedInLabel = socialMedia.linkedInUrl;
    const githubURL = socialMedia.githubLabel;
    const githubLabel = socialMedia.githubUrl;

    return (
        <>
            <Global
                styles={css`
                    .p-social-media__linkedIn { background-image: url("${state.isDark ? theme.dark.linkedInWhite : theme.light.linkedInBlack}") }
                    .p-social-media__github { background-image: url("${state.isDark ? theme.dark.githubWhite : theme.light.githubBlack}") }
                `}
            />
            <section className="c-section p-social-media">
                <header><h2 className="c-section__title">Social media</h2></header>
                <ul className="c-list">
                    <li>
                        <a href={linkedInURL} target="_blank" rel="noopener noreferrer" className="c-link">
                            <i className="c-icon p-social-media__linkedIn"/>{ linkedInLabel }
                        </a>
                    </li>
                    <li>
                        <a href={githubURL} target="_blank" rel="noopener noreferrer" className="c-link">
                            <i className="c-icon p-social-media__github"/>{ githubLabel }
                        </a>
                    </li>
                </ul>
            </section>
        </>
    );
};