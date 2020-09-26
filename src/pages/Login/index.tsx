import React, { useRef, useCallback, useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/cartola.png';

import Input from '../../components/Input';
import Loader from '../../components/Loader';

import * as S from './styles';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async ({ email, pass: password }) => {
      try {
        setLoading(true);
        await signIn({ email, password });
      } catch (err) {
        throw new Error('Authentication failed.');
      }
    },
    [signIn],
  );

  return (
    <S.Container>
      <img src={logoImg} alt="Cartola FC" />
      <section>
        {loading && <Loader />}

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            icon={FiMail}
            title="Digite seu e-mail"
            name="email"
            type="text"
            placeholder="email@email.com.br"
          />
          <Input
            icon={FiLock}
            title="Digite sua senha"
            name="pass"
            type="password"
            placeholder="123456"
          />

          <button type="submit">Entrar</button>
        </Form>
      </section>
    </S.Container>
  );
};

export default Login;
