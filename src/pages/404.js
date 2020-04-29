import React  from "react";
import "../styles/main.scss"
import { Link } from "gatsby";
import Head from "../components/Head";

export default () => {
    return (
        <main className="p-container">
            <Head/>
            <section className="c-section">
                <h1 className="c-section__title">Section not found</h1>
                <p>The page wasn't found. Go back to see the resume.</p>
                <Link to="/" className="c-button">go back</Link>
            </section>
        </main>
    )
};
