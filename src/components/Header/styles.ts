import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 70px;

  background: linear-gradient(270deg, #ff7400, #ff7b0d);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  height: 100%;
  max-width: 1220px;

  margin: 0 auto;

  nav {
    display: flex;

    > svg {
      margin-right: 16px;
    }
    ul {
      display: none;
      align-items: center;
      justify-content: space-between;

      @media screen and (min-width: 674px) {
        display: flex;
      }

      li {
        height: 100%;

        display: flex;
        align-items: center;

        & + li {
          display: none;

          margin-left: 16px;

          @media screen and (min-width: 674px) {
            display: block;
          }
        }
      }

      a {
        font-weight: 700;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
        letter-spacing: 0.02rem;
      }
    }
  }

  > img {
    width: 106px;
  }
`;

export const Search = styled.div`
  display: none;
  align-items: center;

  width: 164px;
  height: 30px;

  margin-left: 12px;

  background: #fff;
  border-radius: 6px;

  @media screen and (min-width: 674px) {
    display: flex;
  }

  svg {
    flex-shrink: 0;
    margin: 0 6px;
  }

  input {
    border: 0;
    outline: 0;
    padding: 10px 8px 8px 0;

    width: 100%;
    height: calc(100% - 8px);

    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.02rem;
    color: #ff7400;

    &::placeholder {
      color: #ff7400;
    }
  }
`;

export const Utils = styled.div`
  display: flex;

  > svg:last-child {
    display: initial;
    margin-left: 12px;

    @media screen and (min-width: 674px) {
      display: none;
    }
  }
`;
