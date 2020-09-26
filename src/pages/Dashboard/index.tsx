import React, { useEffect, useState } from 'react';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import Header from '../../components/Header';
import TeamProfile from '../../components/TeamProfile';
import Card from '../../components/Card';
import Match from '../../components/Match';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import Button from '../../components/Button';

import cartolaMobileImg from '../../assets/cartola-mobile.png';
import leagueImg from '../../assets/liga.svg';

import * as S from './styles';

interface TeamProps {
  apelido: string;
  foto: string;
  clube_id: number;
  status_id: number;
}

interface MatchProps {
  clubes: ClubProps;
  partidas: Match[];
  rodada: string;
}

interface Match {
  clube_casa_id: number;
  clube_casa_posicao: number;
  clube_visitante_id: number;
  clube_visitante_posicao: number;
  aproveitamento_mandante: string[];
  aproveitamento_visitante: string[];
  partida_data: string;
  local: string;
  valida: string;
  partida_id: number;
  placar_oficial_mandante: number;
  placar_oficial_visitante: number;
  url_confronto: string;
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

interface TeamInfoProps {
  atletas: TeamProps[];
  pontos: number;
  patrimonio: number;
  time: {
    nome: string;
    nome_cartola: string;
    url_escudo_png: string;
  };
}

interface TopAthletesProps {
  Atleta: Omit<TeamProps, 'clube_id' | 'status_id'>;
  escalacoes: number;
  clube_nome: string;
  escudo_clube: string;
  posicao_abreviacao: string;
}

interface LeagueProps {
  camp_ranking_num: number;
  camp_variacao_num: number;
  /* editorial: boolean; */
  nome: string;
  /* sem_capitao: boolean; */
  time_dono_id: number;
  url_flamula_png: string;
  total_times_liga: number;
}

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [teamInfo, setTeamInfo] = useState<TeamInfoProps | null>(null);
  const { token } = useAuth();
  // const [team, setTeam] = useState<TeamProps[]>({} as TeamProps[]);
  const [matchs, setMatchs] = useState<MatchProps>({} as MatchProps);
  const [topAthletes, setTopAthletes] = useState<TopAthletesProps[] | null>(
    null,
  );
  const [leagues, setLeagues] = useState<LeagueProps[] | null>(null);
  const [marketStatus, setMarketStatus] = useState<Date>(new Date());

  useEffect(() => {
    async function fetchTeamInfo(): Promise<void> {
      try {
        const res = await api.get('auth/time', {
          headers: { 'X-GLB-Token': token },
        });

        setTeamInfo({ ...res.data });
      } catch (err) {
        throw new Error(err);
      }
    }

    async function fetchMatchs(): Promise<void> {
      try {
        const res = await api.get('/partidas');

        setMatchs({ ...res.data });
      } catch (err) {
        throw new Error(err);
      }
    }

    async function fetchTopAthletes(): Promise<void> {
      try {
        const res = await api.get('/mercado/destaques');

        setTopAthletes([...res.data]);
      } catch (err) {
        throw new Error(err);
      }
    }

    async function fetchLeagues(): Promise<void> {
      try {
        const res = await api.get('/auth/ligas', {
          headers: { 'X-GLB-Token': token },
        });

        setLeagues([...res.data.ligas]);
      } catch (err) {
        throw new Error(err);
      }
    }

    async function fetchMarketStatus(): Promise<void> {
      try {
        const res = await api.get('/mercado/status');

        const { ano, mes, dia, hora, minuto } = res.data.fechamento;

        const closingDate = new Date(ano, mes - 1, dia, hora, minuto);

        setMarketStatus(closingDate);
      } catch (err) {
        throw new Error(err);
      }
    }

    setLoading(true);
    Promise.all([
      fetchMatchs(),
      fetchTeamInfo(),
      fetchTopAthletes(),
      fetchLeagues(),
      fetchMarketStatus(),
    ]).then(res => res && setLoading(false));
  }, [token]);

  return (
    <>
      <Header />

      {loading && <Loader />}

      <S.Container>
        <aside>
          {teamInfo && <TeamProfile market={marketStatus} {...teamInfo} />}
        </aside>

        <main>
          <S.BemVindo>
            <Card title="Escalação">
              <S.Content>
                {teamInfo && teamInfo.atletas && (
                  <p>
                    {`Seu time tem ${
                      teamInfo.atletas.filter(atleta => atleta.status_id !== 7)
                        .length
                    } jogadores que podem não jogar na rodada`}
                  </p>
                )}
                <section>
                  {teamInfo &&
                    teamInfo.atletas
                      .filter(atleta => atleta.status_id !== 7)
                      .map((atleta, index) => {
                        return (
                          index < 3 && (
                            <div key={atleta.apelido}>
                              <S.PlayerCircle
                                isNull={
                                  atleta.status_id === 6 ||
                                  atleta.status_id === 5
                                }
                              >
                                <div>
                                  <img
                                    src={atleta.foto.replace(
                                      'FORMATO',
                                      '140x140',
                                    )}
                                    alt={atleta.apelido}
                                  />
                                </div>
                                <img
                                  src={
                                    matchs.clubes[atleta.clube_id].escudos[
                                      '30x30'
                                    ]
                                  }
                                  alt={matchs.clubes[atleta.clube_id].nome}
                                />
                              </S.PlayerCircle>
                              <strong>{atleta.apelido}</strong>
                              <p>Dúvida</p>
                            </div>
                          )
                        );
                      })}
                </section>
                <Button
                  text="Substituir jogadores"
                  bgColor="#d0021b"
                  textColor="#fff"
                />
              </S.Content>
            </Card>

            <Card title="Bem-vindo, cartoleiro.">
              <S.ContentAd>
                <div>
                  <div>
                    <h3>Bom, bom mesmo é ser cartoleiro PRO!</h3>
                    <p>
                      Cartoleiro PRO 2020 tem mais competições, recebe avisos
                      exclusivos, análise de especialistas e ainda concorre a
                      prêmios!
                    </p>
                  </div>

                  <img src={cartolaMobileImg} alt="Cartola mobile" />
                </div>

                <S.FloatingButton text="Quero ser pro" />
              </S.ContentAd>
            </Card>
          </S.BemVindo>

          <S.MaisEscalados>
            {topAthletes && (
              <S.CardNoPadding
                title={`Os mais escalados da rodada ${matchs.rodada} `}
                link={{ title: 'Rever escalação', to: '#' }}
              >
                <S.Flex>
                  {topAthletes.map((atleta, index) => {
                    return (
                      index < 3 && (
                        <S.Content
                          key={atleta.Atleta.apelido}
                          height="106px"
                          noPadding
                        >
                          <S.Player>
                            <section>
                              <h3>{`${index + 1}º`}</h3>
                              <img
                                src={atleta.Atleta.foto.replace(
                                  'FORMATO',
                                  '140x140',
                                )}
                                alt={atleta.Atleta.apelido}
                              />
                              <img
                                src={atleta.escudo_clube}
                                alt={atleta.clube_nome}
                              />
                            </section>
                            <section>
                              <h3>{atleta.Atleta.apelido}</h3>
                              <div>
                                <strong>{atleta.posicao_abreviacao}</strong>
                                <span>{atleta.clube_nome}</span>
                              </div>
                              <p>
                                {atleta.escalacoes}
                                <br />
                                pessoas escalaram.
                              </p>
                            </section>
                          </S.Player>
                        </S.Content>
                      )
                    );
                  })}
                </S.Flex>
              </S.CardNoPadding>
            )}
          </S.MaisEscalados>

          <S.Competicoes>
            <Card title="Competições" link={{ title: 'Ver todas', to: '#' }}>
              {leagues &&
                leagues.map(
                  league =>
                    league.time_dono_id && (
                      <S.Flex key={league.nome}>
                        <S.Content height="70px" noPadding>
                          <S.League>
                            <section>
                              <img src={leagueImg} alt="Olha o tuin" />
                              <div>
                                <span>Clássica</span>
                                <strong>{league.nome}</strong>
                                <p>{`Fechada • ${league.total_times_liga} Cartoleiros`}</p>
                              </div>
                            </section>
                            <section>
                              <span>{`${league.camp_ranking_num}º`}</span>
                              {league.camp_variacao_num > 0 ? (
                                <FiArrowUp size={14} color="rgb(38, 202, 94)" />
                              ) : (
                                <FiArrowDown
                                  size={14}
                                  color="rgb(208, 2, 27)"
                                />
                              )}
                            </section>
                          </S.League>
                        </S.Content>
                      </S.Flex>
                    ),
                )}
            </Card>
          </S.Competicoes>

          <S.Jogos>
            <Card
              title={`Jogos da Rodada ${matchs.rodada} `}
              link={{ title: 'Ver mais no GE', to: '#' }}
            >
              <S.Flex isColumn>
                {matchs.partidas &&
                  matchs.partidas.map(match => (
                    <S.Content key={match.partida_id}>
                      <Match clubes={matchs.clubes} {...match} />
                    </S.Content>
                  ))}
              </S.Flex>
            </Card>
          </S.Jogos>
        </main>
      </S.Container>

      <Footer />
    </>
  );
};

export default Dashboard;
