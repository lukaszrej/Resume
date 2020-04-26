import React, {useContext} from "react";
import usePersonalData from "../hooks/usePersonalData";
import {css, Global} from "@emotion/core";
import { useTheme } from "emotion-theming";
import Context from "../store/context";

export default () => {
    const { contact } = usePersonalData();
    const { state } = useContext(Context);
    const theme = useTheme();

    return (
        <>
            <Global
                styles={css`
                    .p-contact__phone { background-image: url("${state.isDark ? theme.dark.phoneWhite : theme.light.phoneBlack}") }
                    .p-contact__mail { background-image: url("${state.isDark ? theme.dark.mailWhite : theme.light.mailBlack}") }
                `}
            />
            <section className="p-contact">
                <h2 className="c-title">Contact</h2>
                <p><i className="c-icon p-contact__phone"/>{ contact.phone }</p>
                <p><i className="c-icon p-contact__mail"/>{ contact.email }</p>
            </section>
        </>
    );
};