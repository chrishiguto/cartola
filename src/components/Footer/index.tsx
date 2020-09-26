import React from 'react';

import appleImg from '../../assets/appstore-lrg.svg';
import googleImg from '../../assets/google-play.png';

import * as S from './styles';

const Footer: React.FC = () => {
  return (
    <S.Container>
      <S.Big>
        <S.Centralize>
          <S.Ad>
            <p>
              Seja PRO por apenas
              <br />
              <strong>R$ 49,90 </strong>
              por temporada. Confira as opções de parcelamento.
            </p>
            <a href="google.com">Quero virar PRO</a>
          </S.Ad>

          <S.Links>
            <nav>
              <ul>
                <li>
                  <strong>
                    <a href="google.com">Entenda mais</a>
                  </strong>
                </li>
                <li>
                  <a href="google.com">Tudo sobre o cartola PRO</a>
                </li>
                <li>
                  <a href="google.com">Termos e políticas</a>
                </li>
                <li>
                  <a href="google.com">Dicas para mitar</a>
                </li>
                <li>
                  <a href="google.com">Ajuda</a>
                </li>
              </ul>
            </nav>

            <nav>
              <ul>
                <li>
                  <strong>
                    <a href="google.com">Siga-nos:</a>
                  </strong>
                </li>
                <li>
                  <a href="google.com">Facebook</a>
                </li>
                <li>
                  <a href="google.com">Twitter</a>
                </li>
                <li>
                  <a href="google.com">Instagram</a>
                </li>
              </ul>
            </nav>
          </S.Links>

          <S.Download>
            <a href="google.com">
              <img src={appleImg} alt="Baixar na Apple Store" />
            </a>
            <a href="google.com">
              <img src={googleImg} alt="Baixar no Google Play" />
            </a>
          </S.Download>
        </S.Centralize>
      </S.Big>

      <S.Small>
        <strong>&copy; 2000-2020 Globo Comunicação e Participações S.A.</strong>
      </S.Small>
    </S.Container>
  );
};

export default Footer;
