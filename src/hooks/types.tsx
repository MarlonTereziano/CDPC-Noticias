import React,{createContext, useCallback, useContext} from 'react';
import { api } from '../services/api';

interface News{
  titulo: String;
  id: Number;
}

interface AuthContextData {
    getNews(): Promise<News[]>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {

  const getNews = useCallback(async() => {
    const response = await api.get('/?tipo=noticias');
    let noticias = response.data.items;
    
    return noticias;
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