import React, {useContext} from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import {css, Global} from "@emotion/core";
import { useTheme } from "emotion-theming";
import Context from "../../store/context";
import StyledSection from "../styled/StyledSection";
import StyledIcon from "../styled/StyledIcon";
import StyledLink from "../styled/StyledLink";

export default () => {
    const { contact } = usePersonalData();
    const { state } = useContext(Context);
    const theme = useTheme();

    return (
        <>
            <Global
                styles={css`
                    .p-contact__location { background-image: url("${state.isDark ? theme.dark.locationWhite : theme.light.locationBlack}") }
                    .p-contact__phone { background-image: url("${state.isDark ? theme.dark.phoneWhite : theme.light.phoneBlack}") }
                    .p-contact__mail { background-image: url("${state.isDark ? theme.dark.mailWhite : theme.light.mailBlack}") }
                `}
            />
            <StyledSection className="p-contact">
                <header><h2>Contact</h2></header>
                <address>
                    <StyledIcon className="p-contact__location"/>{ contact.location }

                    <StyledLink href={`tel:${contact.phone}`}>
                        <StyledIcon className="p-contact__phone"/>{ contact.phone }
                    </StyledLink>

                    <StyledLink href="mailto:rejlukasz@gmail.com">
                        <StyledIcon className="p-contact__mail"/>{ contact.email }
                    </StyledLink>
                </address>
            </StyledSection>
        </>
    );
};
