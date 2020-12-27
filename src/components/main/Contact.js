import React, { useContext } from "react";
import { GlobalStateContext } from "../../store/ContextProvider";
import usePersonalData from "../../data/hooks/usePersonalData";
import * as S from "../styles";

export default () => {
    const { contact } = usePersonalData();
    const state = useContext(GlobalStateContext);

    return (
        <S.Section>
            <header><h2>Contact</h2></header>
            <address>
                <S.Icon className="icon-location" isDark={state.isDark} />{contact.location}

                <S.Link href={`tel:${contact.phone}`}>
                    <S.Icon className="icon-phone" isDark={state.isDark} />{contact.phone}
                </S.Link>

                <S.Link href="mailto:rejlukasz@gmail.com">
                    <S.Icon className="icon-mail" isDark={state.isDark} />{contact.email}
                </S.Link>
            </address>
        </S.Section>
    );
};
