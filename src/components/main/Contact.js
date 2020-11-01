import React, { useContext } from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import Context from "../../store/context";
import { Section } from "../styles/S.Section";
import { Link } from "../styles/S.Link";
import { LocationIcon, PhoneIcon, MailIcon } from "../styles/S.Icon";

export default () => {
    const { state } = useContext(Context);
    const { contact } = usePersonalData();

    return (
        <Section className="p-contact">
            <header><h2>Contact</h2></header>
            <address>
                <LocationIcon isDark={state.isDark} />{contact.location}

                <Link href={`tel:${contact.phone}`}>
                    <PhoneIcon isDark={state.isDark} />{contact.phone}
                </Link>

                <Link href="mailto:rejlukasz@gmail.com">
                    <MailIcon isDark={state.isDark} />{contact.email}
                </Link>
            </address>
        </Section>
    );
};
