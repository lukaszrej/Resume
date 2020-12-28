import { createGlobalStyle } from 'styled-components';
import * as theme from '../utils/theme';

export const Global = createGlobalStyle`
    body, #box {
        line-height: 1.625;
        background-color: ${props => props.isDark ? theme.dark.background : theme.light.background};
    }

    h1, h2, p, div, a {
        color: ${props => props.isDark ? theme.dark.fontColor : theme.light.fontColor};
    }

    button {
        background-image: url("${props => props.isDark ? theme.dark.sunWhite : theme.light.sunBlack}");
        background-color: transparent;
    }

    .icon-location {
        background-image: url("${props => props.isDark ? theme.dark.locationWhite : theme.light.locationBlack}");
    }

    .icon-phone {
        background-image: url("${props => props.isDark ? theme.dark.phoneWhite : theme.light.phoneBlack}");
    }

    .icon-mail {
        background-image: url("${props => props.isDark ? theme.dark.mailWhite : theme.light.mailBlack}");
    }

    .icon-linkedIn {
        background-image: url("${props => props.isDark ? theme.dark.linkedInWhite : theme.light.linkedInBlack}");
    }

    .icon-github {
        background-image: url("${props => props.isDark ? theme.dark.githubWhite : theme.light.githubBlack}");
    }
`;
