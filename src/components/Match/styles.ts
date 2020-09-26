import styled from 'styled-components';

interface ScoreProps {
  placar: number | null;
}

export const Container = styled.div`
  width: 100%;
  text-align: center;

  padding: 0 16px;

  > a {
    text-decoration: none;
    font-size: 10px;
    color: #ff7400;
    font-weight: 600;
    text-transform: uppercase;
  }

  > p {
    font-size: 12px;

    & + p {
      margin-top: 4px;
    }
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    max-width: 220px;

    margin: 16px auto;

    @media screen and (min-width: 1024px) {
      max-width: 700px;
    }

    > span {
      font-family: 'Roboto Slab', serif;
      color: #999;
    }

    div:first-child,
    div:last-child {
      display: none;

      @media screen and (min-width: 1024px) {
        display: flex;
      }
    }

    div:first-child {
      span:last-child {
        background: red;
        width: 10px;
        height: 10px;
      }
    }

    div:last-child {
      span:first-child {
        background: red;
        width: 10px;
        height: 10px;
      }
    }

    div {
      display: flex;
      align-items: center;
      flex: 1;

      span {
        font-size: 12px;
        color: #999;
      }

      img {
        width: 30px;
      }
    }
  }
`;

export const Team = styled.div`
  justify-content: center;

  margin: 0 10px;

  span {
    display: none;

    @media screen and (min-width: 643px) {
      display: inline;
    }
  }

  img:first-child {
    margin-right: 16px;
  }

  span:first-child {
    margin-right: 16px;
  }
`;

export const Score = styled.div<ScoreProps>`
  justify-content: ${({ placar }) => (placar ? 'space-around' : 'center')};

  font-family: 'Roboto Slab', serif;

  min-width: 50px;
  max-width: 100px;
`;

export const History = styled.div`
  display: flex;
  justify-content: center;

  span {
    width: 6px;
    height: 6px;

    background: #999;

    border-radius: 50%;

    & + span {
      margin-left: 2px;
    }
  }
`;
