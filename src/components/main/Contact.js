import React from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import StyledSection from "../styled/StyledSection";
import StyledIcon from "../styled/StyledIcon";
import StyledLink from "../styled/StyledLink";

export default () => {
    const { contact } = usePersonalData();

    return (
        <StyledSection className="p-contact">
            <header><h2>Contact</h2></header>
            <address>
                <StyledIcon className="p-contact__location" />{ contact.location }

                <StyledLink href={ `tel:${contact.phone}` }>
                    <StyledIcon className="p-contact__phone" />{ contact.phone }
                </StyledLink>

                <StyledLink href="mailto:rejlukasz@gmail.com">
                    <StyledIcon className="p-contact__mail" />{ contact.email }
                </StyledLink>
            </address>
        </StyledSection>
    );
};
