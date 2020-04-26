import React, {useContext} from "react";
import usePersonalData from "../hooks/usePersonalData";
import {css, Global} from "@emotion/core";
import { useTheme } from "emotion-theming";
import Context from "../store/context";

export default () => {
    const { info } = usePersonalData();
    const { state } = useContext(Context);
    const theme = useTheme();

    return (
        <>
            <Global
                styles={css`
                    .p-info__location { background-image: url("${state.isDark ? theme.dark.locationWhite : theme.light.locationBlack}") }
                    .p-info__linkedIn { background-image: url("${state.isDark ? theme.dark.linkedInWhite : theme.light.linkedInBlack}") }
                    .p-info__github { background-image: url("${state.isDark ? theme.dark.githubWhite : theme.light.githubBlack}") }
                `}
            />
            <section className="p-info">
                <h2 className="c-title">Info</h2>
                <ul className="c-list">
                    <li><i className="c-icon p-info__location"/>{ info.location }</li>
                    <li><i className="c-icon p-info__linkedIn"/>{ info.linkedIn }</li>
                    <li><i className="c-icon p-info__github"/>{ info.github }</li>
                </ul>
            </section>
        </>
    );
};