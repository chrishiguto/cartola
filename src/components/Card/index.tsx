import React from 'react';

import * as S from './styles';

interface CardProps {
  children: React.ReactNode;
  title: string;
  link?: {
    title: string;
    to: string;
  };
}

const Card: React.FC<CardProps> = ({ children, link, title }) => (
  <S.Container>
    <header>
      <h2>{title}</h2>
      {link && <a href={link.to}>{link.title}</a>}
    </header>
    {children}
  </S.Container>
);

export default Card;
