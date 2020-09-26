import React from 'react';

import getFormatDate from '../../utils/getFormatDate';

import * as S from './styles';

interface MatchProps {
  clube_casa_id: number;
  clube_casa_posicao: number;
  clube_visitante_id: number;
  clube_visitante_posicao: number;
  aproveitamento_mandante: string[];
  aproveitamento_visitante: string[];
  partida_data: string;
  local: string;
  valida: string;
  placar_oficial_mandante: number;
  placar_oficial_visitante: number;
  url_confronto: string;
  clubes: ClubProps;
}

interface ClubProps {
  [key: number]: {
    id: number;
    nome: string;
    abreviacao: string;
    escudos: {
      [size: string]: string;
    };
  };
}

const Match: React.FC<MatchProps> = ({ clubes, ...match }) => {
  return (
    <S.Container>
      <p>{`${getFormatDate(match.partida_data)} (${match.local})`}</p>
      {!match.valida && <p>ESTA PARTIDA NÃO É VÁLIDA PARA A RODADA</p>}

      <section>
        <S.History>
          {match.aproveitamento_mandante &&
            match.aproveitamento_mandante.map((resultado, index) => {
              let color;
              const key = `game-${index}-${resultado}`;

              switch (resultado) {
                case 'v':
                  color = '#26ca5e';
                  break;

                case 'd':
                  color = '#ff0621';
                  break;

                case 'e':
                  color = '#b9b9b9';
                  break;

                default:
                  break;
              }

              return <span key={key} style={{ backgroundColor: color }} />;
            })}
        </S.History>

        <span>{`${match.clube_casa_posicao}º`}</span>

        <S.Team>
          <img
            src={clubes[match.clube_casa_id].escudos['30x30']}
            alt={clubes[match.clube_casa_id].nome}
          />
          <span>{clubes[match.clube_casa_id].abreviacao}</span>
        </S.Team>

        <S.Score placar={match.placar_oficial_mandante}>
          {match.placar_oficial_mandante && (
            <strong>{match.placar_oficial_mandante}</strong>
          )}
          <span>╳</span>
          {match.placar_oficial_visitante && (
            <strong>{match.placar_oficial_visitante}</strong>
          )}
        </S.Score>

        <S.Team>
          <span>{clubes[match.clube_visitante_id].abreviacao}</span>
          <img
            src={clubes[match.clube_visitante_id].escudos['30x30']}
            alt={clubes[match.clube_visitante_id].nome}
          />
        </S.Team>

        <span>{`${match.clube_visitante_posicao}º`}</span>

        <S.History>
          {match.aproveitamento_visitante &&
            match.aproveitamento_visitante.map((resultado, index) => {
              let color;
              const key = `game-${index}-${resultado}`;

              switch (resultado) {
                case 'v':
                  color = '#26ca5e';
                  break;

                case 'd':
                  color = '#ff0621';
                  break;

                case 'e':
                  color = '#b9b9b9';
                  break;

                default:
                  break;
              }

              return <span key={key} style={{ backgroundColor: color }} />;
            })}
        </S.History>
      </section>
      {!!match.url_confronto && <a href="gogole.com">Veja como foi</a>}
    </S.Container>
  );
};

export default Match;
