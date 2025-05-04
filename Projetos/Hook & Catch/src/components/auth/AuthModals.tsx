import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Mail, Lock, User, Loader2, AlertCircle } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/use-toast';

interface AuthModalsProps {
  loginOpen: boolean;
  registerOpen: boolean;
  onLoginOpenChange: (open: boolean) => void;
  onRegisterOpenChange: (open: boolean) => void;
}

const AuthModals: React.FC<AuthModalsProps> = ({
  loginOpen,
  registerOpen,
  onLoginOpenChange,
  onRegisterOpenChange
}) => {
  const { login, googleLogin, register, isLoading } = useAuth();
  const { toast } = useToast();
  
  // Estados para formulário de login
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  
  // Estados para formulário de registro
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  const [registerError, setRegisterError] = useState('');
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    
    if (!loginEmail || !loginPassword) {
      setLoginError('Por favor, preencha todos os campos');
      return;
    }
    
    const success = await login(loginEmail, loginPassword);
    if (success) {
      onLoginOpenChange(false);
    }
  };
  
  const handleGoogleLogin = async () => {
    const success = await googleLogin();
    if (success) {
      onLoginOpenChange(false);
    }
  };
  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterError('');
    
    if (!registerName || !registerEmail || !registerPassword || !registerConfirmPassword) {
      setRegisterError('Por favor, preencha todos os campos');
      return;
    }
    
    if (registerPassword !== registerConfirmPassword) {
      setRegisterError('As senhas não coincidem');
      return;
    }
    
    if (registerPassword.length < 6) {
      setRegisterError('A senha deve ter pelo menos 6 caracteres');
      return;
    }
    
    const success = await register(registerName, registerEmail, registerPassword);
    if (success) {
      onRegisterOpenChange(false);
    }
  };
  
  const switchToRegister = () => {
    onLoginOpenChange(false);
    setTimeout(() => onRegisterOpenChange(true), 100);
  };
  
  const switchToLogin = () => {
    onRegisterOpenChange(false);
    setTimeout(() => onLoginOpenChange(true), 100);
  };

  return (
    <>
      {/* Modal de Login */}
      <Dialog open={loginOpen} onOpenChange={onLoginOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center mb-2">Entrar</DialogTitle>
            <DialogDescription className="text-center">
              Acesse sua conta para gerenciar compras e favoritos
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleLogin} className="space-y-4 pt-4">
            {loginError && (
              <div className="bg-red-50 p-3 rounded-md flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2 shrink-0" />
                <p className="text-sm text-red-600">{loginError}</p>
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="exemplo@email.com" 
                  className="pl-10" 
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Senha</Label>
                <button 
                  type="button" 
                  className="text-sm text-fishing-600 hover:text-fishing-700"
                  onClick={() => toast({
                    title: "Recuperação de senha",
                    description: "Função ainda não implementada"
                  })}
                >
                  Esqueceu a senha?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  className="pl-10" 
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full bg-fishing-600 hover:bg-fishing-700" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Carregando
                </>
              ) : 'Entrar'}
            </Button>
            
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-sm">ou continue com</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
            
            <Button 
              type="button" 
              variant="outline" 
              className="w-full" 
              onClick={handleGoogleLogin}
              disabled={isLoading}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path 
                  fill="currentColor" 
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" 
                />
                <path 
                  fill="currentColor" 
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" 
                />
                <path 
                  fill="currentColor" 
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" 
                />
                <path 
                  fill="currentColor" 
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" 
                />
                <path fill="none" d="M1 1h22v22H1z" />
              </svg>
              Google
            </Button>
            
            <div className="text-center text-sm">
              Não tem uma conta?{' '}
              <button 
                type="button" 
                className="text-fishing-600 hover:text-fishing-700 font-medium"
                onClick={switchToRegister}
              >
                Cadastre-se
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      
      {/* Modal de Registro */}
      <Dialog open={registerOpen} onOpenChange={onRegisterOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center mb-2">Criar Conta</DialogTitle>
            <DialogDescription className="text-center">
              Junte-se à comunidade de pescadores e aproveite benefícios exclusivos
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleRegister} className="space-y-4 pt-4">
            {registerError && (
              <div className="bg-red-50 p-3 rounded-md flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2 shrink-0" />
                <p className="text-sm text-red-600">{registerError}</p>
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="register-name">Nome completo</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  id="register-name" 
                  type="text" 
                  placeholder="Seu nome" 
                  className="pl-10" 
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="register-email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  id="register-email" 
                  type="email" 
                  placeholder="exemplo@email.com" 
                  className="pl-10" 
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="register-password">Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  id="register-password" 
                  type="password" 
                  placeholder="Mínimo 6 caracteres" 
                  className="pl-10" 
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="register-confirm-password">Confirmar senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  id="register-confirm-password" 
                  type="password" 
                  placeholder="Confirme sua senha" 
                  className="pl-10" 
                  value={registerConfirmPassword}
                  onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full bg-fishing-600 hover:bg-fishing-700" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Carregando
                </>
              ) : 'Criar conta'}
            </Button>
            
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-sm">ou continue com</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
            
            <Button 
              type="button" 
              variant="outline" 
              className="w-full" 
              onClick={handleGoogleLogin}
              disabled={isLoading}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path 
                  fill="currentColor" 
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" 
                />
                <path 
                  fill="currentColor" 
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" 
                />
                <path 
                  fill="currentColor" 
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" 
                />
                <path 
                  fill="currentColor" 
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" 
                />
                <path fill="none" d="M1 1h22v22H1z" />
              </svg>
              Google
            </Button>
            
            <div className="text-center text-sm">
              Já tem uma conta?{' '}
              <button 
                type="button" 
                className="text-fishing-600 hover:text-fishing-700 font-medium"
                onClick={switchToLogin}
              >
                Faça login
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthModals;
