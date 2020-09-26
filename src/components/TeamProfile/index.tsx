import React, { useState, useEffect } from 'react';

import Button from '../Button';

import cartolaImg from '../../assets/perfil.png';

import * as S from './styles';

interface TeamInfoProps {
  pontos: number;
  patrimonio: number;
  time: {
    nome: string;
    nome_cartola: string;
    url_escudo_png: string;
  };
  market: Date;
}

export const TeamProfile: React.FC<TeamInfoProps> = ({ market, ...rest }) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    if (Math.abs(market.getTime() - now.getTime()) / 36e5 < 24) {
      const timer = setInterval(() => setNow(new Date()), 1000);

      return function cleanup() {
        clearInterval(timer);
      };
    }
  }, [now, market]);

  function renderTimer() {
    const countdownInMs = Math.abs((market.getTime() - now.getTime()) / 36e5);

    if (countdownInMs < 24) {
      const minInHours = (countdownInMs - Math.floor(countdownInMs)) * 60;
      const msInHours = (minInHours - Math.floor(minInHours)) * 60;

      const hour =
        Math.trunc(countdownInMs).toString().length === 1
          ? `0${Math.trunc(countdownInMs)}`
          : Math.trunc(countdownInMs);

      const minutes =
        Math.trunc(minInHours).toString().length === 1
          ? `0${Math.trunc(minInHours)}`
          : Math.trunc(minInHours);

      const seconds =
        Math.trunc(msInHours).toString().length === 1
          ? `0${Math.trunc(msInHours)}`
          : Math.trunc(msInHours);

      return <strong>{`${hour}:${minutes}:${seconds}`}</strong>;
    }

    const daysToGo = Math.trunc(countdownInMs / 24);

    return <strong>{`${daysToGo} dias`}</strong>;
  }

  return (
    <S.Container>
      <S.MarketInfo>
        <p>Mercado fecha em:</p>
        {renderTimer()}
      </S.MarketInfo>

      <S.LogoBox>
        <img
          src={rest.time && rest.time.url_escudo_png}
          alt="Cartoleiro free"
        />
        <img src={cartolaImg} alt="Cartoleiro free" />
      </S.LogoBox>
      <S.InfoBox>
        <strong>{rest.time && rest.time.nome}</strong>
        <p>{rest.time && rest.time.nome_cartola}</p>
        <Button text="Ver perfil" style={{ maxWidth: 140, marginTop: 16 }} />
      </S.InfoBox>
      <S.AdditionalData>
        <S.Data>
          <p>Patrimônio</p>
          <strong>
            C$
            {rest.patrimonio}
          </strong>
        </S.Data>
        <S.Data>
          <p>Última pontuação</p>
          <strong>{rest.pontos && rest.pontos.toFixed(2)}</strong>
        </S.Data>
      </S.AdditionalData>
    </S.Container>
  );
};

export default TeamProfile;
