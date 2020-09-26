import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, title, name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <S.Container>
      <S.InputBox>
        {Icon && <Icon size={24} color="rgba(0, 0, 0, 0.7)" />}
        <input
          autoComplete="off"
          ref={inputRef}
          name={name}
          defaultValue={defaultValue}
          {...rest}
        />
      </S.InputBox>
    </S.Container>
  );
};

export default Input;
