import React, {useState} from 'react';
import {When} from 'react-if';
import {Heading5} from '../../styles/typography';
import {cellphoneMask} from '../../utils/masks';

import {
  Container,
  CountryFlag,
  InputPhoneContainer,
  InputPhone,
  NextImg,
  NextButtonAction,
} from './PhoneInput.styles';
import {PhoneInputProps} from './PhoneInput.types';

const PhoneInput = (props: PhoneInputProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <Container>
      <InputPhoneContainer>
        <CountryFlag source={require('../../assets/images/brazil-flag.png')} />
        <Heading5 marginLeft={10} marginRight={5}>
          +55
        </Heading5>
        <When condition={phoneNumber.length > 14}>
          <NextButtonAction activeOpacity={0.8} onPress={props.onNextPress}>
            <NextImg source={require('../../assets/images/next-green.png')} />
          </NextButtonAction>
        </When>

        <InputPhone
          onChangeText={setPhoneNumber}
          value={cellphoneMask(phoneNumber)}
          keyboardType="phone-pad"
        />
      </InputPhoneContainer>
    </Container>
  );
};

export default PhoneInput;
