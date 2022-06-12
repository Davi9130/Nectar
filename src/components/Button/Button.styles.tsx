import styled from 'styled-components/native';
import colors from '../../styles/colors';
import {GeneralStyleProps} from '../../typings/general';

export const Container = styled.View<GeneralStyleProps>`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({marginBottom}) => marginBottom || 0}px;
`;

export const BtnBody = styled.TouchableOpacity<GeneralStyleProps>`
  width: 90%;
  height: 67px;
  justify-content: center;
  align-items: center;
  background-color: ${({backgroundColor}) => backgroundColor || colors.primary};
  border-radius: 19px;
  flex-direction: row;
`;

export const ContainerIcon = styled.Image<GeneralStyleProps>`
  width: ${({width}) => width || 22}px;
  height: ${({height}) => height || 24}px;
  right: ${({right}) => right || 0}px;
`;

export const Spinner = styled.ActivityIndicator``;
