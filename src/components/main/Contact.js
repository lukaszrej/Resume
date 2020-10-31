import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import { Section } from "../styles/S.Section";
import { Icon } from "../styles/S.Icon";
import { Link } from "../styles/S.Link";

export default () => {
    const { contact } = usePersonalData();

    return (
        <Section className="p-contact">
            <header><h2>Contact</h2></header>
            <address>
                <Icon className="p-contact__location" />{contact.location}

                <Link href={`tel:${contact.phone}`}>
                    <Icon className="p-contact__phone" />{contact.phone}
                </Link>

                <Link href="mailto:rejlukasz@gmail.com">
                    <Icon className="p-contact__mail" />{contact.email}
                </Link>
            </address>
        </Section>
    );
};
