import React, {useContext} from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import { GlobalStateContext } from "../../store/GlobalContextProvider";
import * as S from "../styles";

export default () => {
    const { contact } = usePersonalData();
    const state = useContext(GlobalStateContext);

    return (
        <S.Section>
            <header><h2>Contact</h2></header>
            <address>
                <S.LocationIcon isDark={state.isDark} />{ contact.location }

                <S.Link href={ `tel:${contact.phone}` }>
                    <S.PhoneIcon isDark={state.isDark} />{ contact.phone }
                </S.Link>

                <S.Link href="mailto:rejlukasz@gmail.com">
                    <S.MailIcon isDark={state.isDark} />{ contact.email }
                </S.Link>
            </address>
        </S.Section>
    );
};
