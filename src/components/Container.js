import React, { useContext } from "react";
import { ThemeProvider } from 'styled-components';
import Context from "../store/context";
import { Layout } from "./styles/S.Layout";
import Head from "./Head";
import ResetStyle from "./styles/S.Reset";
import GlobalStyle from "./styles/S.Global";
import { theme as mode } from '../utils/theme';

export default ({ children }) => {
    const { state } = useContext(Context);

    return (
        <Layout>
            <Head />
            <ResetStyle />

            <ThemeProvider theme={mode}>
                <GlobalStyle isDark={state.isDark} />
                {children}
            </ThemeProvider>
        </Layout>
    );
};
