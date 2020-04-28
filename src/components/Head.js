import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import {css, Global} from "@emotion/core";
import { useTheme } from "emotion-theming";
import Context from "../store/context";
import useSiteMetadata from "../hooks/useSiteMetadata";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { state, dispatch } = useContext(Context);
    const theme = useTheme();
    const { title, charSet, author, description, lang, robots } = useSiteMetadata();
    const { name } = usePersonalData();

    return (
        <>
            <Helmet>
                <title>{`${ title } | ${ author }`}</title>
                <meta charSet={ charSet }/>
                <meta name="author" content={ author }/>
                <meta name="description" content={ description }/>
                <meta name="robots" content={ robots }/>
                <html lang={ lang }/>
            </Helmet>
            <Global
                styles={css`                    
                    body { background-color: ${state.isDark ? theme.dark.background : theme.light.background} }
                    h1, h2, p, div, a { color: ${state.isDark ? theme.dark.fontColor : theme.light.fontColor} }
                    div.p-header__button { background-image: url("${state.isDark ? theme.dark.sunWhite : theme.light.sunBlack}") }
                `}
            />
            <div className="p-header">
                <header><h1 className="p-header__title">{ name }</h1></header>
                <div className='p-header__button'
                     onClick={ () => dispatch({type: "TOGGLE_DARK_MODE" }) }
                     onKeyDown={ () => dispatch({type: "TOGGLE_DARK_MODE" }) }
                     role="button" tabIndex="0" />
            </div>
        </>
    );
};