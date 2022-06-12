import styled from 'styled-components/native';
import fonts from './fonts';
import {GeneralStyleProps} from '../typings/general';
import {isAndroid} from '../helpers/device/platform';

const baseHeading = styled.Text<GeneralStyleProps>`
  align-self: ${props => props.alignSelf || 'auto'};
  text-align: ${props => props.textAlign || 'auto'};
  width: ${props => props.width || 'auto'};
  margin: ${props => props.marginTop || 0}px
    ${props => props.marginRight || 0}px ${props => props.marginBottom || 0}px
    ${props => props.marginLeft || 0}px;
  color: ${props => props.color || 'black'};
`;

export const Heading1Regular = styled(baseHeading)`
  font-family: ${props => props.fontFamily || fonts.montserratMedium};
  font-size: ${props => props.fontSize || 29}px;
  letter-spacing: ${props => props.letterSpacing || 0.4}px;
  line-height: ${props => (props.lineHeight || isAndroid() ? 40.4 : 35)}px;
`;

export const Heading1Bold = styled(baseHeading)`
  font-family: ${props => props.fontFamily || fonts.montserratBold};
  font-size: ${props => props.fontSize || 29}px;
  letter-spacing: ${props => props.letterSpacing || 0.4}px;
`;

export const Heading2 = styled(baseHeading)`
  font-family: ${props => props.fontFamily || fonts.montserratMedium};
  font-size: ${props => props.fontSize || 22}px;
  letter-spacing: ${props => props.letterSpacing || 0.4}px;
  line-height: ${props => (props.lineHeight || isAndroid() ? 30.5 : 26)}px;
`;

export const Heading2Bold = styled(baseHeading)`
  font-family: ${props => props.fontFamily || fonts.montserratBold};
  font-size: ${props => props.fontSize || 22}px;
  letter-spacing: ${props => props.letterSpacing || 0.4}px;
  line-height: ${props => (props.lineHeight || isAndroid() ? 30.5 : 26)}px;
  color: ${props => props.color || 'black'};
`;

export const Heading3 = styled(baseHeading)`
  font-family: ${props => props.fontFamily || fonts.montserratMedium};
  font-size: ${props => props.fontSize || 19}px;
  letter-spacing: ${props => props.letterSpacing || 0.4}px;
  line-height: ${props => (props.lineHeight || isAndroid() ? 26.5 : 25)}px;
`;

export const Heading3Bold = styled(baseHeading)`
  font-family: ${props => props.fontFamily || fonts.montserratBold};
  font-size: ${props => props.fontSize || 19}px;
  letter-spacing: ${props => props.letterSpacing || 0.4}px;
  line-height: ${props => (props.lineHeight || isAndroid() ? 26.5 : 25)}px;
`;

export const Heading4 = styled(baseHeading)`
  font-family: ${props => props.fontFamily || fonts.montserratMedium};
  font-size: ${props => props.fontSize || 17}px;
  letter-spacing: ${props => props.letterSpacing || 0.4}px;
  line-height: ${props => (props.lineHeight || isAndroid() ? 24 : 17)}px;
`;

export const Heading4Bold = styled(baseHeading)`
  font-family: ${props => props.fontFamily || fonts.montserratBold};
  font-size: ${props => props.fontSize || 17}px;
  letter-spacing: ${props => props.letterSpacing || 0.4}px;
  line-height: ${props => (props.lineHeight || isAndroid() ? 21.5 : 25)}px;
`;

export const Heading5 = styled(baseHeading)`
  font-family: ${props => props.fontFamily || fonts.montserratMedium};
  font-size: ${props => props.fontSize || 15}px;
  letter-spacing: ${props => props.letterSpacing || 0.4}px;
  line-height: ${props => (props.lineHeight || isAndroid() ? 21 : 18)}px;
`;

export const Heading5Bold = styled(baseHeading)`
  font-family: ${props => props.fontFamily || fonts.montserratBold};
  font-size: ${props => props.fontSize || 15}px;
  background-color: ${props => props.backgroundColor || 'transparent'};
  letter-spacing: ${props => props.letterSpacing || 0.4}px;
  line-height: ${props => (props.lineHeight || isAndroid() ? 20 : 18)}px;
`;

export const Paragraph = styled(baseHeading)`
  font-family: ${props => props.fontFamily || fonts.montserratMedium};
  font-size: ${props => props.fontSize || 14}px;
  letter-spacing: ${props => props.letterSpacing || 0.4}px;
  line-height: ${props => (props.lineHeight || isAndroid() ? 20 : 19)}px;
`;

export const ParagraphBold = styled(baseHeading)`
  font-family: ${props => props.fontFamily || fonts.montserratBold};
  font-size: ${props => props.fontSize || 14}px;
  letter-spacing: ${props => props.letterSpacing || 0.4}px;
  line-height: ${props => (props.lineHeight || isAndroid() ? 20 : 19)}px;
`;

export const Small = styled(baseHeading)`
  font-family: ${props => props.fontFamily || fonts.montserratMedium};
  font-size: ${props => props.fontSize || 13}px;
  letter-spacing: ${props => props.letterSpacing || 0.4}px;
  line-height: ${props => (props.lineHeight || isAndroid() ? 20 : 16)}px;
`;

export const SmallBold = styled(baseHeading)`
  font-family: ${props => props.fontFamily || fonts.montserratBold};
  font-size: ${props => props.fontSize || 13}px;
  letter-spacing: ${props => props.letterSpacing || 0.4}px;
  line-height: ${props => (props.lineHeight || isAndroid() ? 18.3 : 16)}px;
`;

export const Smaller = styled(baseHeading)`
  font-family: ${props => props.fontFamily || fonts.montserratMedium};
  font-size: ${props => props.fontSize || 12}px;
  letter-spacing: ${props => props.letterSpacing || 0.4}px;
  line-height: ${props => (props.lineHeight || isAndroid() ? 17 : 16)}px;
`;

export const SmallerBold = styled(baseHeading)`
  font-family: ${props => props.fontFamily || fonts.montserratBold};
  font-size: ${props => props.fontSize || 12}px;
  letter-spacing: ${props => props.letterSpacing || 0.4}px;
  line-height: ${props => (props.lineHeight || isAndroid() ? 17 : 16)}px;
`;
