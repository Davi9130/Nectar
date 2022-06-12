import React from 'react';
import Button from '../../components/Button/Button.component';
import {ContainerIcon} from '../../components/Button/Button.styles';
import PhoneInput from '../../components/PhoneInput/PhoneInput.component';
import {isIos} from '../../helpers/device/platform';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import {Heading3Bold, Heading4} from '../../styles/typography';
import {
  RegisterBg,
  Container,
  KeyboardAvoid,
  ContainerScroll,
} from './Register.styles';

const Register = () => {
  return (
    <KeyboardAvoid behavior={isIos() ? 'padding' : 'height'} enabled>
      <Container>
        <RegisterBg
          resizeMode="cover"
          source={require('../../assets/images/register-bg.png')}
        />
        <ContainerScroll
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{
            width: '100%',
            height: '100%',
            justifyContent: 'flex-end',
            paddingBottom: 50,
          }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <Heading3Bold
            fontFamily={fonts.montserratMedium}
            fontWeight={600}
            marginLeft={25}
            fontSize={25}
            textAlign="left">
            {`Get your groceries${'\n'}with nectar`}
          </Heading3Bold>
          <PhoneInput onNextPress={() => console.log('next')} />
          <Heading4
            fontSize={13}
            alignSelf="center"
            marginBottom={40}
            marginTop={40}
            color={colors.grayText}>
            Or connect with your social media
          </Heading4>
          <Button
            icon={
              <ContainerIcon
                right={22}
                source={require('../../assets/icons/gmail-icon.png')}
              />
            }
            backgroundColor={colors.gmail}
            marginBottom={20}
            onPress={() => {}}
            text="Continue with Google"
          />
          <Button
            icon={
              <ContainerIcon
                width={11}
                height={24}
                right={15}
                source={require('../../assets/icons/fb-icon.png')}
              />
            }
            backgroundColor={colors.facebook}
            onPress={() => {}}
            text="Continue with Facebook"
          />
        </ContainerScroll>
      </Container>
    </KeyboardAvoid>
  );
};

export default Register;
