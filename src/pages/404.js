import React, {useContext} from "react";
// import Layout from "../components/layout";
import {css} from "@emotion/core";
import { useTheme } from "emotion-theming";
import Context from "../store/context";

const NotFoundPage = () => {
    const { state, dispatch } = useContext(Context);
    const theme = useTheme();

    return (
        <>
            <div css={css`
                h1, h2 {
                    color: ${state.isDark ? theme.dark.fontColor : theme.light.fontColor}
                }
                body {
                    backgroundColor: ${state.isDark ? theme.dark.background : theme.light.background}
                }
            `}>
                <h1>NOT FOUND</h1>
                <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
                <button onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}>Toggle</button>
                <h2>Dark mode is {state.isDark ? "on" : "off"}</h2>
            </div>
        </>
    )
};

export default NotFoundPage;
