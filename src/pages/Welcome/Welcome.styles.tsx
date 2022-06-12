import deviceInfo from 'react-native-device-info';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerText = styled.View`
  width: 100%;
  margin-bottom: ${deviceInfo.hasNotch() ? 55 : 60}px;
  align-items: center;
`;

export const LoginBg = styled.ImageBackground<any>`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const LogoImage = styled.Image`
  width: 48px;
  height: 56px;
  margin-bottom: 35px;
`;
