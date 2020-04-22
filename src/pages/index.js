import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { css } from "@emotion/core";
import { useTheme } from "emotion-theming";
import Context from "../store/context";
import Layout from "../components/layout";
import useSiteMetadata from '../hooks/useSiteMetadata';

const IndexPage = () => {
    const { state, dispatch } = useContext(Context);
    const theme = useTheme();
    const { title, charSet, author, description, lang, robots } = useSiteMetadata();

    return (
        <>
            <Layout>
                <div css={css`
                    h1, h2 {
                        color: ${state.isDark ? theme.dark.fontColor : theme.light.fontColor}
                    }
                    body {
                        backgroundColor: ${state.isDark ? theme.dark.background : theme.light.background}
                    }
                `}>
                    <h1>Lukasz Rej</h1>
                    <button onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}>Toggle</button>
                    <h2>Dark mode is {state.isDark ? "on" : "off"}</h2>
                </div>
            </Layout>
            <Helmet>
                <meta charSet={charSet}/>
                <meta name="author" content={author}/>
                <meta name="description" content={description}/>
                <meta name="robots" content={robots}/>
                <html lang={lang}/>
                <title>{`${title} | ${author}`}</title>
            </Helmet>
        </>
    )
};

export default IndexPage;
