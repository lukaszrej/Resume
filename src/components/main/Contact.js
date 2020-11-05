import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import * as S from "../styles";

export default () => {
    const { contact } = usePersonalData();

    return (
        <S.Section>
            <header><h2>Contact</h2></header>
            <address>
                <S.LocationIcon />{ contact.location }

                <S.Link href={ `tel:${contact.phone}` }>
                    <S.PhoneIcon />{ contact.phone }
                </S.Link>

                <S.Link href="mailto:rejlukasz@gmail.com">
                    <S.MailIcon />{ contact.email }
                </S.Link>
            </address>
        </S.Section>
    );
};
