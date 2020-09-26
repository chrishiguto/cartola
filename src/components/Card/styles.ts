import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  > div + div {
    margin-left: 16px;
  }

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 16px;

    a {
      text-decoration: none;
      font-size: 10px;
      color: #ff7400;
      font-weight: 600;
      text-transform: uppercase;
    }
  }

  > header h2 {
    font-weight: 300;
    font-size: 13px;

    @media screen and (min-width: 768px) {
      font-size: 17px;
    }
  }
`;
