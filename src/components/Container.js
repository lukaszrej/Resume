import React, { useContext } from "react";
import { ThemeProvider, useTheme } from "emotion-theming";
import { css, Global } from "@emotion/core";
import { Layout } from "./styles/S.Layout";
import ResetStyle from "./styles/S.Reset";
import Head from "./Head";
import Context from "../store/context";
import { theme as mode } from '../utils/theme';

export default ({ children }) => {
    const { state } = useContext(Context);
    const theme = useTheme();

    return (
        <Layout>
            <ResetStyle />
            <Head />

            <ThemeProvider theme={ theme }>
                <Global
                    styles={ css`
                        body { background-color: ${state.isDark ? mode.dark.background : mode.light.background} }
                        h1, h2, p, div, a { color: ${state.isDark ? mode.dark.fontColor : mode.light.fontColor} }
                        button { background-image: url("${state.isDark ? mode.dark.sunWhite : mode.light.sunBlack}"); background-color: transparent }
                        .p-social-media__linkedIn { background-image: url("${state.isDark ? mode.dark.linkedInWhite : mode.light.linkedInBlack}") }
                        .p-social-media__github { background-image: url("${state.isDark ? mode.dark.githubWhite : mode.light.githubBlack}") }
                        .p-contact__location { background-image: url("${state.isDark ? mode.dark.locationWhite : mode.light.locationBlack}") }
                        .p-contact__phone { background-image: url("${state.isDark ? mode.dark.phoneWhite : mode.light.phoneBlack}") }
                        .p-contact__mail { background-image: url("${state.isDark ? mode.dark.mailWhite : mode.light.mailBlack}") }
                    `}
                />

                { children }
            </ThemeProvider>
        </Layout>
    );
};
