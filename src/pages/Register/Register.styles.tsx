import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const RegisterBg = styled.Image`
  width: 100%;
  height: 60%;
  position: absolute;
`;

export const Container = styled.View`
  background-color: ${colors.whileLight};
  flex: 1;
`;

export const ContainerScroll = styled.ScrollView``;

export const KeyboardAvoid = styled.KeyboardAvoidingView`
  flex: 1;
  flex-direction: column;
`;
