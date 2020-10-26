import React, { useContext } from "react";
import "../styles/main.scss"
import { Link } from "gatsby";
import Head from "../components/Head";
import Context from "../store/context";
import { css, Global } from "@emotion/core";
import { useTheme } from "emotion-theming";

export default () => {
    const { state } = useContext(Context)
    const theme = useTheme();

    return (
        <>
            <Global
                styles={ css`                    
                    body { background-color: ${state.isDark ? theme.dark.background : theme.light.background} }
                    h1, p, a { color: ${state.isDark ? theme.dark.fontColor : theme.light.fontColor} }
                `}
            />
            <main className="p-container">
                <Head />
                <section className="c-section">
                    <h1 className="c-section__title">Section not found</h1>
                    <p>The page wasn't found. Go back to see the resume.</p>
                    <Link to="/" className="c-button">go back</Link>
                </section>
            </main>
        </>
    )
};
