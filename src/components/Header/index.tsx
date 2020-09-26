import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiSearch, FiBell } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';

import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <nav>
          <FiMenu size={22} color="#fff" />
          <ul>
            <li>
              <NavLink exact activeStyle={{ color: '#fff' }} to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink exact activeStyle={{ color: '#fff' }} to="/">
                Escalação
              </NavLink>
            </li>
            <li>
              <NavLink exact activeStyle={{ color: '#fff' }} to="/">
                Competições
              </NavLink>
            </li>
          </ul>
        </nav>
        <img src={logoImg} alt="Cartola FC" />
        <S.Utils>
          <FiBell size={28} color="#fff" />
          <S.Search>
            <FiSearch size={18} color="#ff7400" />
            <input type="text" placeholder="Buscar" />
          </S.Search>
          <FiSearch size={28} color="#fff" />
        </S.Utils>
      </S.Content>
    </S.Container>
  );
};

export default Header;
