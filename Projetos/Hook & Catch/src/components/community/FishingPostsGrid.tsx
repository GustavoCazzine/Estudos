
import React, { useState } from 'react';
import { Heart, MessageCircle, Scale, Ruler, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { mockFishingPosts } from './mockCommunityData';
import type { FishingPost } from '../../pages/FishingCommunity';
import { calculateFishScore } from './scoring';
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';

interface FishingPostsGridProps {
  sortBy: 'recent' | 'top';
}

const FishingPostsGrid: React.FC<FishingPostsGridProps> = ({ sortBy }) => {
  const { isAuthenticated } = useAuth();
  const [selectedPost, setSelectedPost] = useState<FishingPost | null>(null);
  const [likes, setLikes] = useState<Record<string, boolean>>({});
  
  const posts = React.useMemo(() => {
    let filteredPosts = [...mockFishingPosts];
    
    // Ordenar posts de acordo com o critério
    if (sortBy === 'recent') {
      // Ordenar por data (mais recentes primeiro)
      filteredPosts = filteredPosts.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sortBy === 'top') {
      // Ordenar por pontuação (maior pontuação primeiro)
      filteredPosts = filteredPosts.sort((a, b) => b.score - a.score);
    }
    
    return filteredPosts;
  }, [sortBy]);
  
  const handleLike = (postId: string) => {
    if (!isAuthenticated) {
      toast.error("Você precisa estar logado para curtir um post");
      return;
    }
    
    setLikes(prev => {
      const isLiked = prev[postId];
      
      if (isLiked) {
        toast.info("Você removeu sua curtida");
      } else {
        toast.success("Você curtiu esse post!");
      }
      
      return {
        ...prev,
        [postId]: !isLiked
      };
    });
  };
  
  const handleComment = (postId: string) => {
    if (!isAuthenticated) {
      toast.error("Você precisa estar logado para comentar");
      return;
    }
    
    // Abrir modal de detalhes com a seção de comentários ativa
    const post = posts.find(p => p.id === postId);
    if (post) {
      setSelectedPost(post);
    }
  };
  
  const handleShare = (post: FishingPost) => {
    // Verificar se a API Web Share está disponível
    if (navigator.share) {
      navigator.share({
        title: `Captura de ${post.fishName} por ${post.userName}`,
        text: `Confira essa incrível captura de ${post.fishName} pesando ${post.weight}kg e medindo ${post.length}cm por ${post.userName}!`,
        url: window.location.href,
      })
        .then(() => toast.success("Compartilhado com sucesso!"))
        .catch((error) => toast.error("Erro ao compartilhar"));
    } else {
      // Fallback para navegadores que não suportam a API Web Share
      navigator.clipboard.writeText(window.location.href)
        .then(() => toast.success("Link copiado para a área de transferência!"))
        .catch(() => toast.error("Não foi possível copiar o link"));
    }
  };
  
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Nenhuma captura foi compartilhada ainda.</p>
        <Button variant="ocean" className="mt-4">Seja o primeiro a compartilhar</Button>
      </div>
    );
  }
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <CardHeader className="p-0">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={post.photos[0]} 
                  alt={`${post.fishName} capturado por ${post.userName}`}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="flex items-center gap-1 px-2 py-1.5 font-bold">
                    <Trophy className="h-3.5 w-3.5" />
                    {post.score} pts
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-4">
              <div className="flex items-center mb-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.userAvatar} alt={post.userName} />
                  <AvatarFallback>{post.userName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-2">
                  <p className="text-sm font-medium">{post.userName}</p>
                  <p className="text-xs text-gray-500 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </p>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-1">{post.fishName}</h3>
              
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Scale className="h-4 w-4 mr-1.5" />
                  <span>{post.weight} kg</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Ruler className="h-4 w-4 mr-1.5" />
                  <span>{post.length} cm</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 col-span-2 truncate">
                  <MapPin className="h-4 w-4 mr-1.5 flex-shrink-0" />
                  <span className="truncate">{post.location}</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-700 line-clamp-2">{post.description}</p>
            </CardContent>
            
            <CardFooter className="flex justify-between p-4 pt-0">
              <div className="flex space-x-3">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`h-8 px-2 ${likes[post.id] ? 'text-red-500' : 'text-gray-600'}`}
                  onClick={() => handleLike(post.id)}
                >
                  <Heart className={`h-4 w-4 mr-1.5 ${likes[post.id] ? 'fill-current' : ''}`} />
                  <span>{likes[post.id] ? post.likes + 1 : post.likes}</span>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 px-2 text-gray-600"
                  onClick={() => handleComment(post.id)}
                >
                  <MessageCircle className="h-4 w-4 mr-1.5" />
                  <span>{post.comments}</span>
                </Button>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="h-8"
                onClick={() => setSelectedPost(post)}
              >
                Ver detalhes
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* Modal de detalhes do post */}
      {selectedPost && (
        <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-xl">{selectedPost.fishName}</DialogTitle>
              <DialogDescription className="flex items-center text-sm">
                Por {selectedPost.userName} • {selectedPost.date}
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-md overflow-hidden">
                <img 
                  src={selectedPost.photos[0]} 
                  alt={`${selectedPost.fishName} capturado por ${selectedPost.userName}`}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-lg">Detalhes</h3>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Scale className="h-4 w-4 mr-1.5" />
                      <span>Peso: {selectedPost.weight} kg</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Ruler className="h-4 w-4 mr-1.5" />
                      <span>Comprimento: {selectedPost.length} cm</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 col-span-2">
                      <MapPin className="h-4 w-4 mr-1.5 flex-shrink-0" />
                      <span>{selectedPost.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 col-span-2">
                      <Trophy className="h-4 w-4 mr-1.5" />
                      <span>Pontuação: {selectedPost.score} pontos</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg">Descrição</h3>
                  <p className="text-sm text-gray-700 mt-2">{selectedPost.description}</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg">Comentários ({selectedPost.comments})</h3>
                  <div className="mt-2 space-y-2 max-h-40 overflow-y-auto">
                    <div className="bg-gray-50 p-2 rounded-md">
                      <div className="flex items-center">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback>P</AvatarFallback>
                        </Avatar>
                        <span className="ml-2 text-sm font-medium">Pedro</span>
                      </div>
                      <p className="text-xs text-gray-700 mt-1">Incrível captura! Qual isca você usou?</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-md">
                      <div className="flex items-center">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <span className="ml-2 text-sm font-medium">Ana</span>
                      </div>
                      <p className="text-xs text-gray-700 mt-1">Caramba, esse é um dos maiores que já vi! Parabéns!</p>
                    </div>
                  </div>
                  
                  {isAuthenticated ? (
                    <div className="mt-2">
                      <input 
                        type="text" 
                        placeholder="Adicione um comentário..."
                        className="w-full text-sm border rounded-md p-2"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            toast.success("Comentário adicionado!");
                            (e.target as HTMLInputElement).value = '';
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <p className="text-xs text-center mt-2 text-gray-500">
                      Faça login para comentar
                    </p>
                  )}
                </div>
              </div>
            </div>
            
            <DialogFooter className="flex-col sm:flex-row gap-2 sm:justify-between">
              <div className="flex gap-2">
                <Button 
                  variant={likes[selectedPost.id] ? "default" : "outline"} 
                  size="sm"
                  onClick={() => handleLike(selectedPost.id)}
                >
                  <Heart className={`h-4 w-4 mr-1.5 ${likes[selectedPost.id] ? 'fill-current' : ''}`} />
                  {likes[selectedPost.id] ? 'Curtido' : 'Curtir'}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleShare(selectedPost)}
                >
                  Compartilhar
                </Button>
              </div>
              <Button 
                variant="default" 
                onClick={() => setSelectedPost(null)}
              >
                Fechar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

const Trophy = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

export default FishingPostsGrid;
