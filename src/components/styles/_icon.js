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
    background-image: ${props => props.isDark ? `url("${linkedInBlack}")` : `url("${linkedInWhite}")` };
`;

export const GithubIcon = styled(Icon)`
    background-image: ${props => props.isDark ? `url("${githubBlack}")` : `url("${githubWhite}")` };
`;

export const LocationIcon = styled(Icon)`
    background-image: ${props => props.isDark ? `url("${locationBlack}")` : `url("${locationWhite}")` };
`;

export const PhoneIcon = styled(Icon)`
    background-image: ${props => props.isDark ? `url("${phoneBlack}")` : `url("${phoneWhite}")` };
`;

export const MailIcon = styled(Icon)`
    background-image: ${props => !props.isDark ? `url("${mailWhite}")` : `url("${mailBlack}")` };
`;
