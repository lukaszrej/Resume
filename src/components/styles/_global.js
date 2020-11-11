import { createGlobalStyle } from 'styled-components';
import { theme as mode } from '../../utils/theme';

const { fontColor: fontForDark, background: backgroundForDark, sunBlack } = mode.light;
const { fontColor: fontForLight, background: backgroundForLight, sunWhite } = mode.dark;

export const Global = createGlobalStyle`
    body {
        line-height: 1.625;
        background-color: ${props => props.isDark ? backgroundForLight : backgroundForDark};
    }

    h1, h2, p, div, a {
        color: ${props => props.isDark ? fontForLight : fontForDark};
    }

    button {
        background-image: url("${props => props.isDark ? sunWhite : sunBlack}");
        background-color: transparent;
    }
`;
