import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
`;

export const Big = styled.section`
  background: #fff;

  padding: 20px 16px;

  div + div {
    @media screen and (min-width: 891px) {
      margin-left: 32px;
    }
  }
`;

export const Small = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  background: #d8d8d8;
  color: rgba(51, 51, 51, 0.58);

  font-size: 12px;
`;

export const Centralize = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  max-width: 1220px;
  margin: 24px auto;

  @media screen and (min-width: 891px) {
    flex-direction: row;
    align-items: initial;
  }
`;
export const Ad = styled.div`
  display: none;
  flex-direction: column;

  justify-content: space-between;

  font-weight: 300;
  line-height: 22px;
  color: #333;

  @media screen and (min-width: 891px) {
    display: flex;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    letter-spacing: 0.02rem;

    background: #ff7400;
    height: 40px;

    font-size: 11px;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;

    border-radius: 4px;

    box-shadow: inset 0 -1.2px 0 0 rgba(0, 0, 0, 0.3);
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  max-width: 280px;

  nav {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;

    min-width: 138px;

    ul {
      font-size: 12px;
      li {
        & + li {
          margin-top: 12px;
        }
        a {
          color: #333;
        }
      }
    }
  }
`;

export const Download = styled.div`
  display: flex;
  align-items: flex-start;

  margin-top: 24px;

  a:first-child {
    padding: 10px 0;
  }

  @media screen and (min-width: 891px) {
    margin-top: -16px;
  }

  a + a {
    img {
      width: 155px;
      max-height: 60px;
    }
  }
`;
