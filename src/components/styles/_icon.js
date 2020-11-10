import styled from 'styled-components';
import { theme as mode } from '../../utils/theme';

const { linkedInBlack, githubBlack, phoneBlack, mailBlack, locationBlack } = mode.light;
const { linkedInWhite, githubWhite, phoneWhite, mailWhite, locationWhite } = mode.dark;

const Icon = styled.i`
    background-color: transparent;
    color: transparent;
    background-repeat: no-repeat;
    background-size: 21px;
    height: 21px;
    width: 21px;
    border: none;
    display: inline-block;
    position: relative;
    top: 6px;
    margin-right: 6px;
`;

export const LinkedInIcon = styled(Icon)`
    background-image: url(${linkedInWhite});
    background-image: url("${props => !props.isDark ? linkedInWhite : linkedInBlack}");
`;

export const GithubIcon = styled(Icon)`
    background-image: url(${githubWhite});
    background-image: url("${props => !props.isDark ? githubWhite : githubBlack}");
`;

export const LocationIcon = styled(Icon)`
    background-image: url(${locationWhite});
    background-image: url("${props => !props.isDark ? locationWhite : locationBlack}");
`;

export const PhoneIcon = styled(Icon)`
    background-image: url(${phoneWhite});
    background-image: url("${props => !props.isDark ? phoneWhite : phoneBlack}");
`;

export const MailIcon = styled(Icon)`
    background-image: url(${mailWhite});
    background-image: url("${props => !props.isDark ? mailWhite : mailBlack}");
`;
