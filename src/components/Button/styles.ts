import styled from 'styled-components';

interface ContainerProps {
  textColor?: string;
  bgColor?: string;
}

export const Container = styled.button<ContainerProps>`
  background: ${({ bgColor }) => bgColor || '#fff'};
  width: 100%;
  max-width: 280px;
  padding: 12px 8px;

  border: none;
  border-radius: 4px;
  box-shadow: inset 0 -1.2px 0 0 rgba(0, 0, 0, 0.3);

  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ textColor }) => textColor || '#000'};
`;
