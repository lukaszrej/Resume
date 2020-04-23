import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import {css, Global} from "@emotion/core";
import { useTheme } from "emotion-theming";
import Context from "../store/context";
import useSiteMetadata from "../hooks/useSiteMetadata";
import "../styles/main.scss"
import Head from "../components/Head";
import Profile from "../components/Profile";

const IndexPage = () => {
    const { state, dispatch } = useContext(Context);
    const theme = useTheme();
    const { title, charSet, author, description, lang, robots } = useSiteMetadata();

    return (
        <>
            <Global
                styles={css`                    
                    body {
                        background-color: ${state.isDark ? theme.dark.background : theme.light.background}
                    }
                    h1, h2 {
                        color: ${state.isDark ? theme.dark.fontColor : theme.light.fontColor}
                    }
                `}
            />
            <main className="p-main">
                <Head/>
                <Profile/>
                <button onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}>Toggle</button>
                <h2>Dark mode is {state.isDark ? "on" : "off"}</h2>
            </main>
            <Helmet>
                <title>{`${title} | ${author}`}</title>
                <meta charSet={charSet}/>
                <meta name="author" content={author}/>
                <meta name="description" content={description}/>
                <meta name="robots" content={robots}/>
                <html lang={lang}/>
            </Helmet>
        </>
    )
};

export default IndexPage;