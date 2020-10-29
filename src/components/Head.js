import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import Context from "../store/context";
import useSiteMetadata from "../data/hooks/useSiteMetadata";
import usePersonalData from "../data/hooks/usePersonalData";
import StyledHeader from "./styled/StyledHeader";

export default () => {
    const { dispatch } = useContext(Context);
    const { title, charSet, author, description, lang, robots } = useSiteMetadata();
    const { name } = usePersonalData();

    return (
        <>
            <Helmet>
                <title>{ `${title} | ${author}` }</title>
                <meta charSet={ charSet } />
                <meta name="author" content={ author } />
                <meta name="description" content={ description } />
                <meta name="robots" content={ robots } />
                <html lang={ lang } />
            </Helmet>

            <StyledHeader>
                <header><h1>{ name }</h1></header>
                <button onClick={ () => dispatch({ type: "TOGGLE_DARK_MODE" }) }/>
            </StyledHeader>
        </>
    );
};
