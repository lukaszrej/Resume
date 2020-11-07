import React, {useContext} from "react";
import usePersonalData from "../../data/hooks/usePersonalData";
import * as S from "../styles";
import { GlobalStateContext } from "../../store/GlobalContextProvider";

export default () => {
    const { socialMedia } = usePersonalData();
    const state = useContext(GlobalStateContext);

    const linkedInURL = socialMedia.linkedInUrl;
    const linkedInLabel = socialMedia.linkedInLabel;
    const githubURL = socialMedia.githubUrl;
    const githubLabel = socialMedia.githubLabel;

    return (
        <S.Section>
            <header><h2>Social media</h2></header>

            <S.List>
                <li>
                    <S.Link href={ linkedInURL } target="_blank" rel="noopener noreferrer">
                        <S.LinkedInIcon isDark={state.isDark} />{ linkedInLabel }
                    </S.Link>
                </li>
                <li>
                    <S.Link href={ githubURL } target="_blank" rel="noopener noreferrer">
                        <S.GithubIcon isDark={state.isDark} />{ githubLabel }
                    </S.Link>
                </li>
            </S.List>
        </S.Section>
    );
};
