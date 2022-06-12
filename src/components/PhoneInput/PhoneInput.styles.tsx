import styled from 'styled-components/native';
import {screenWidth} from '../../helpers/device/dimension';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  width: 100%;
  margin-top: 30px;
`;

export const InputPhoneContainer = styled.View`
  width: ${screenWidth - 50}px;
  border-bottom-width: 1px;
  border-color: ${colors.borderColor};
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
`;

export const CountryFlag = styled.Image`
  width: 32px;
  height: 25px;
  border-radius: 5px;
`;

export const NextImg = styled.Image`
  width: 32px;
  height: 32px;
`;

export const NextButtonAction = styled.TouchableOpacity`
  position: absolute;
  right: 0px;
  z-index: 1;
`;

export const InputPhone = styled.TextInput`
  width: 100%;
  font-size: 15px;
  font-family: ${fonts.montserratMedium};
`;
