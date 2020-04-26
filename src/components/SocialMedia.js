import React, {useContext} from "react";
import usePersonalData from "../hooks/usePersonalData";
import {css, Global} from "@emotion/core";
import { useTheme } from "emotion-theming";
import Context from "../store/context";

export default () => {
    const { info } = usePersonalData();
    const { state } = useContext(Context);
    const theme = useTheme();
    const linkedInURL = info.linkedIn.map( element => element.url);
    const linkedInTitle = info.linkedIn.map( element => element.title);
    const githubURL = info.github.map( element => element.url);
    const githubTitle = info.github.map( element => element.title);

    return (
        <>
            <Global
                styles={css`
                    .p-info__linkedIn { background-image: url("${state.isDark ? theme.dark.linkedInWhite : theme.light.linkedInBlack}") }
                    .p-info__github { background-image: url("${state.isDark ? theme.dark.githubWhite : theme.light.githubBlack}") }
                `}
            />
            <section className="c-section p-info">
                <header><h2 className="c-title">Social media</h2></header>
                <ul className="c-list">
                    <li>
                        <a href={linkedInURL} target="_blank" rel="noopener noreferrer" className="c-link">
                            <i className="c-icon p-info__linkedIn"/>{ linkedInTitle }
                        </a>
                    </li>
                    <li>
                        <a href={githubURL} target="_blank" rel="noopener noreferrer" className="c-link">
                            <i className="c-icon p-info__github"/>{ githubTitle }
                        </a>
                    </li>
                </ul>
            </section>
        </>
    );
};