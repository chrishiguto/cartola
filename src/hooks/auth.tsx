import React, { createContext, useCallback, useState, useContext } from 'react';

import axios from 'axios';

interface User {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
}

interface AuthContextData {
  token: string;
  signIn(credentials: User): Promise<void>;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Cartola:token');

    if (token) {
      return { token };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const res = await axios.post(
      'https://cors-anywhere.herokuapp.com/https://login.globo.com/api/authentication',
      {
        payload: {
          email,
          password,
          serviceId: 6860,
        },
        captcha: '',
      },
    );

    localStorage.setItem('@Cartola:token', res.data.glbId);

    setData({ token: res.data.glbId });
  }, []);

  return (
    <AuthContext.Provider value={{ token: data.token, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Must be used within a Auth Provider');
  }

  return context;
}

export { AuthProvider, useAuth };
