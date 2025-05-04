
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  googleLogin: () => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verifica se há usuário salvo no localStorage
    const savedUser = localStorage.getItem('fishing_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Falha ao carregar usuário do localStorage', e);
      }
    }
    setIsLoading(false);
  }, []);

  // Salva usuário no localStorage sempre que mudar
  useEffect(() => {
    if (user) {
      localStorage.setItem('fishing_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('fishing_user');
    }
  }, [user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // Simulação de login
      // Em uma aplicação real, isso seria uma chamada à API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock do usuário para demonstração
      if (email === 'demo@exemplo.com' && password === 'senha123') {
        const mockUser = {
          id: '1',
          name: 'Usuário Demonstração',
          email: 'demo@exemplo.com',
          avatar: 'https://ui-avatars.com/api/?name=Usuario+Demo&background=0D8ABC&color=fff'
        };
        
        setUser(mockUser);
        toast.success('Login realizado com sucesso!');
        return true;
      }
      
      toast.error('E-mail ou senha incorretos');
      return false;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      toast.error('Falha ao fazer login. Tente novamente.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const googleLogin = async (): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // Simulação de login com Google
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser = {
        id: '2',
        name: 'Usuário Google',
        email: 'usuario@gmail.com',
        avatar: 'https://ui-avatars.com/api/?name=Usuario+Google&background=DB4437&color=fff'
      };
      
      setUser(mockUser);
      toast.success('Login com Google realizado com sucesso!');
      return true;
    } catch (error) {
      console.error('Erro ao fazer login com Google:', error);
      toast.error('Falha ao fazer login com Google. Tente novamente.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // Simulação de registro
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser = {
        id: Date.now().toString(),
        name,
        email,
        avatar: `https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&background=0D8ABC&color=fff`
      };
      
      setUser(mockUser);
      toast.success('Registro realizado com sucesso!');
      return true;
    } catch (error) {
      console.error('Erro ao registrar:', error);
      toast.error('Falha ao registrar. Tente novamente.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    toast.success('Logout realizado com sucesso');
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated: !!user, 
        isLoading, 
        login, 
        googleLogin, 
        register, 
        logout 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
