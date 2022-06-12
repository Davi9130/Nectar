import React, {useState} from 'react';
import {Container, LoginBg, ContainerText, LogoImage} from './Welcome.styles';
import {Heading1Bold, Heading5} from '../../styles/typography';
import colors from '../../styles/colors';
import {navigateTo} from '../../utils/navigationUtils';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button/Button.component';

const Welcome = () => {
  const [fakeLoading, setFakeLoading] = useState(false);
  const navigation = useNavigation();

  const goToRegister = () => {
    setFakeLoading(true);
    setTimeout(() => {
      navigateTo('Register', navigation, {});
      setFakeLoading(false);
    }, 500);
  };

  return (
    <Container>
      <LoginBg
        resizeMode="cover"
        source={require('../../assets/images/login-bg.png')}>
        <ContainerText>
          <LogoImage source={require('../../assets/images/logo.png')} />
          <Heading1Bold
            marginBottom={5}
            textAlign="center"
            fontSize={48}
            color={colors.white}>
            {`Welcome${'\n'}to our store`}
          </Heading1Bold>
          <Heading5 marginBottom={40} color={colors.whiteTransparent}>
            Ger your groceries in as fast as one hour
          </Heading5>
          <Button
            onPress={goToRegister}
            isLoading={fakeLoading}
            text="Get Started"
          />
        </ContainerText>
      </LoginBg>
    </Container>
  );
};

export default Welcome;
