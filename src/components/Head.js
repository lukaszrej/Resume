import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../data/hooks/useSiteMetadata";

export default () => {
    const { title, charSet, author, description, lang, robots } = useSiteMetadata();

    return (
        <Helmet>
            <title>{ `${title} | ${author}` }</title>
            <meta charSet={ charSet } />
            <meta name="author" content={ author } />
            <meta name="description" content={ description } />
            <meta name="robots" content={ robots } />
            <html lang={ lang } />
        </Helmet>
    );
};
