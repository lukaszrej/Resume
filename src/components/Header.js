import React, { useContext } from "react";
import Context from "../store/context";
import usePersonalData from "../data/hooks/usePersonalData";
import StyledHeader from "./styled/StyledHeader";

export default () => {
    const { dispatch } = useContext(Context);
    const { name } = usePersonalData();

    return (
        <StyledHeader>
            <header><h1>{ name }</h1></header>
            <button onClick={ () => dispatch({ type: "TOGGLE_DARK_MODE" }) } />
        </StyledHeader>
    );
};
