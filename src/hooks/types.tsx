import React,{createContext, useCallback, useContext} from 'react';
import { api } from '../services/api';

interface NewsCrendentials{
}

interface AuthContextData {
    getNews(credentials: NewsCrendentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {

  const getNews = useCallback(async() => {
    const response = await api.get(`/?tipo=noticias`);
    let noticias = response.data.noticias;
    
    return JSON.parse(noticias);
    }, []);

    return (
        <AuthContext.Provider 
          value={{ 
            getNews,
          }}
        >
          {children}
        </AuthContext.Provider>
      );

};

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  }

export { AuthProvider, useAuth };