
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Send } from 'lucide-react';

const BlogNewsletter = () => {
  return (
    <section className="bg-primary-800 py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1559554451-0c0b818f338d?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-3 bg-primary-500/20 rounded-full mb-4">
                <Mail className="h-6 w-6 text-primary-300" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Inscreva-se no Nosso Newsletter</h2>
              <p className="text-white/80 mb-0">
                Receba dicas de pesca, notícias sobre novos produtos, guias de técnicas e ofertas exclusivas diretamente no seu email.
              </p>
            </div>
            
            <form className="max-w-md mx-auto">
              <div className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-white mb-1.5 block">Nome</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Seu nome" 
                    className="w-full bg-white/10 border-primary-700 text-white placeholder:text-white/60 focus:border-primary-400 h-12"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white mb-1.5 block">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Seu email" 
                    className="w-full bg-white/10 border-primary-700 text-white placeholder:text-white/60 focus:border-primary-400 h-12"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                >
                  <span>Inscrever-se</span>
                  <Send className="h-4 w-4 ml-2" />
                </button>
              </div>
              
              <p className="text-white/60 text-xs mt-5 text-center">
                Nós respeitamos sua privacidade. Você pode cancelar a inscrição a qualquer momento.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsletter;
