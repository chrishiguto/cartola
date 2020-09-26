import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  margin-bottom: 24px;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 4px;

  margin-top: 16px;
  padding: 8px;

  svg {
    margin: 0 16px;
  }

  input {
    width: 100%;
    height: 100%;

    background: transparent;

    color: rgba(0, 0, 0, 0.7);
    border: none;
    outline: none;

    padding: 8px 16px 8px 0;

    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }
`;
