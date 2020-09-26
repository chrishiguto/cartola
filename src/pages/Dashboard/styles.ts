import styled, { css } from 'styled-components';

import Card from '../../components/Card';
import Button from '../../components/Button';

interface ContentProps {
  height?: string;
  noPadding?: boolean;
}

interface FlexProps {
  isColumn?: boolean;
}

interface PlayerCircleProps {
  isNull?: boolean;
}

export const CardNoPadding = styled(Card)`
  padding: 0;
`;

export const Container = styled.main`
  padding: 16px;
  height: 100%;
  max-width: 1220px;
  margin: 0 auto;

  @media screen and (min-width: 644px) {
    display: grid;
    grid-template-columns: 304px auto;
    grid-column-gap: 32px;
  }

  @media screen and (min-width: 1220px) {
    padding: 16px 0;
  }

  aside {
    max-width: 600px;

    @media screen and (min-width: 768px) {
      max-width: 304px;
    }
  }

  main {
    display: grid;
    grid-template-rows: 1fr auto auto auto;
    grid-template-areas:
      'bemvindo'
      'maisescalados'
      'competicoes'
      'jogos';
    grid-row-gap: 64px;

    flex: 1;
    width: 100%;

    > div {
      display: flex;

      > div + div {
        margin-left: 16px;
      }
    }
  }
`;

export const Content = styled.div<ContentProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: #fff;
  border-radius: 4px;

  ${({ noPadding }) =>
    (noPadding && css``) ||
    css`
      padding: 16px 0;
    `}

  height: ${({ height }) => height || '350px'};

  > p {
    font-size: 12px;
    color: #999;
    line-height: 22px;
    padding: 0 16px;
  }

  > section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    justify-content: space-evenly;
    max-height: 126px;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1 1 100px;

      strong {
        font-size: 14px;
        font-weight: 500;
      }

      p {
        color: #999;
        font-size: 12px;
      }

      section {
        border-width: 2px;
        border-style: solid;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        position: relative;
        margin-bottom: 8px;

        > img {
          width: 30px;
          position: absolute;

          right: -16px;
          bottom: 0;
        }

        > div {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;

          img {
            width: 90px;
          }
        }
      }
    }
  }
`;

export const ContentAd = styled(Content)`
  background-color: #fff;
  background: radial-gradient(
      77% 95% at 15% 4%,
      #ff9400 14%,
      #ff7400 100%,
      rgba(0, 151, 141, 0) 0,
      #fff 0
    )
    no-repeat 48% 50%/100% 100%;

  position: relative;

  padding: 32px 0 16px 32px;

  align-items: flex-start;

  > div {
    display: flex;
    justify-content: space-between;
    color: #fff;

    height: 100%;
    width: 100%;

    div {
      display: flex;
      flex-direction: column;

      overflow: hidden;

      max-width: 280px;

      @media screen and (min-width: 1024px) {
        max-width: 140px;
      }
    }

    h3 {
      font-size: 16px;
      line-height: 21px;
      letter-spacing: 1px;
    }

    p {
      margin-top: 14px;
      font-size: 12px;
      line-height: 16px;
    }

    img {
      align-self: flex-end;

      width: 60%;
      height: auto;

      max-width: 235px;

      @media screen and (min-width: 712px) {
        width: 100%;
        max-height: 315px;
      }
    }
  }
`;

export const FloatingButton = styled(Button)`
  position: absolute;
  bottom: 16px;
  z-index: 1;

  left: 50%;
  transform: translateX(-50%);
`;

export const PlayerCircle = styled.section<PlayerCircleProps>`
  border-color: ${({ isNull }) => (isNull ? '#d0021b' : ' #ffbf20')};
`;

export const BemVindo = styled.section`
  display: flex;
  flex-direction: column;
  grid-area: bemvindo;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }

  > div + div {
    margin-top: 48px;
    @media screen and (min-width: 1024px) {
      margin-left: 16px;
      margin-top: 0;
    }
  }
`;

export const MaisEscalados = styled.section`
  grid-area: maisescalados;
`;

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }

  > div + div {
    margin-top: 16px;
    @media screen and (min-width: 1024px) {
      margin-left: 16px;
      margin-top: 0;
    }
  }

  ${({ isColumn }) =>
    isColumn &&
    css`
      flex-direction: column;
      @media screen and (min-width: 1024px) {
        flex-direction: column;
      }
      > div + div {
        margin-left: 0;
        margin-top: 16px;
      }
    `}
`;

export const Jogos = styled.div`
  grid-area: jogos;
`;

export const Competicoes = styled.div`
  grid-area: competicoes;
`;

export const Player = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  section:first-child {
    display: flex;
    position: relative;
    margin-left: 12px;

    > h3 {
      position: absolute;
      top: 10px;
      left: -4px;
      font-size: 15px;
      font-family: 'Roboto Slab', serif;
    }

    img {
      width: 96px;
      height: 96px;
      align-self: flex-end;
    }

    img + img {
      width: 30px;
      height: 30px;
      flex-shrink: 0;
      position: absolute;
      right: -8px;
      bottom: 8px;
    }
  }

  section + section {
    display: flex;
    flex: 1;
    margin-left: 24px;
    flex-direction: column;
    justify-content: center;

    h3 {
      font-size: 14px;
    }

    p {
      font-size: 10px;
      color: #999;
      justify-content: flex-end;
      margin-top: 12px;
    }

    div {
      strong {
        color: #999;
        font-size: 12px;
      }

      span {
        margin-left: 8px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const League = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  padding: 0 12px;

  section {
    display: flex;

    div {
      display: flex;
      flex-direction: column;

      justify-content: space-between;
    }

    img {
      width: 50px;
    }

    div {
      display: flex;
      flex-direction: column;

      margin-left: 22px;

      span {
        font-size: 10px;
        color: #999;
      }

      strong {
        font-size: 14px;
      }

      p {
        font-size: 13px;
        color: #999;
      }
    }
  }

  section + section {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      margin-right: 6px;
      font-size: 12px;
      font-weight: 600;
    }
  }
`;
