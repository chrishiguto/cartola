import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  textColor?: string;
  bgColor?: string;
}

const Button: React.FC<ButtonProps> = ({ text, ...rest }) => (
  <S.Container type="button" {...rest}>
    {text}
  </S.Container>
);

export default Button;
