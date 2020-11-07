import React from "react";
import { Link } from "gatsby";
import Layout from "../components/_Layout";
import Header from "../components/Header";
import * as S from "../components/styles";

export default () => {
    return (
        <Layout>
            <Header />
            <S.Section>
                <h1>Section not found</h1>
                <p>The page wasn't found. Go back to see the resume.</p>
                <Link to="/">
                    <S.Link primary inline>Go back</S.Link>
                </Link>
            </S.Section>
        </Layout>
    )
};
