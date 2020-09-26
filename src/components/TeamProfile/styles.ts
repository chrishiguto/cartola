import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  position: sticky;
  top: 0;

  height: calc(100vh - 102px);
  max-height: 450px;
  width: 100%;
`;

export const LogoBox = styled.div`
  height: 122px;
  width: 122px;
  position: relative;

  margin-top: 40px;

  > img {
    width: 100%;
  }

  > img + img {
    position: absolute;
    width: 56px;

    bottom: 0;
    right: -10px;
  }
`;

export const InfoBox = styled.div`
  text-align: center;

  > strong {
    font-weight: 500;
  }

  > p {
    font-size: 12px;
    color: #999;
    margin-top: 4px;
  }
`;

export const MarketInfo = styled.div`
  text-align: center;

  p {
    font-size: 12px;
    color: #999;
  }

  > strong {
    font-family: 'Roboto Slab', serif;
    font-size: 46px;
    line-height: 46px;
  }
`;

export const AdditionalData = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: inset 0 -1.2px 0 0 rgba(0, 0, 0, 0.3);

  width: 100%;
  height: 72px;

  padding: 16px;

  background: #fff;
  border-radius: 4px;

  > div + div {
    border-left: 1px dotted #999;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;

  > p {
    font-size: 12px;
    color: #999;
  }

  > strong {
    font-family: 'Roboto Slab', serif;
    margin-top: 2px;
    font-size: 20px;
  }
`;
