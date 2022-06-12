import React from 'react';
import {Else, If, Then} from 'react-if';
import colors from '../../styles/colors';
import {Heading5Bold} from '../../styles/typography';
import {Container, BtnBody, Spinner} from './Button.styles';
import {ButtonTypes} from './Button.types';

const Button = (props: ButtonTypes) => {
  return (
    <Container marginBottom={props.marginBottom}>
      <BtnBody
        backgroundColor={props.backgroundColor}
        activeOpacity={0.9}
        onPress={props.onPress}>
        {props.icon}
        <If condition={props.isLoading}>
          <Then>
            <Spinner color={colors.white} />
          </Then>
          <Else>
            <Heading5Bold color={colors.white}>{props.text}</Heading5Bold>
          </Else>
        </If>
      </BtnBody>
    </Container>
  );
};

export default Button;
