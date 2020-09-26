import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);

  img {
    width: 150px;
  }

  section {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 32px;
    border-radius: 8px;

    margin-top: 16px;

    form {
      display: flex;
      flex-direction: column;

      width: 100%;

      button {
        height: 48px;

        margin-top: 32px;

        background: #fff;
        color: rgba(0, 0, 0, 0.8);
        font-weight: 700px;
        font-family: 'Roboto Slab', serif;

        border-radius: 4px;
        border: 0;
        box-shadow: inset 0 -1.2px 0 0 rgba(0, 0, 0, 0.3);
        outline: none;
      }
    }
  }
`;
