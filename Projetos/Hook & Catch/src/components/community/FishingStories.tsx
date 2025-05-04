
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { MessageSquare, Heart, Share2, BookOpen, Award, ThumbsUp, X } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import { Textarea } from '../ui/textarea';

// Dados simulados para as histórias
const mockStories = [
  {
    id: '1',
    title: 'O Robalo que Quase Escapou',
    content: 'Era um dia de verão em Florianópolis quando saí com meu barco para a região da Barra da Lagoa. As águas estavam calmas e o sol começava a se pôr quando senti uma fisgada forte na minha isca. Foi uma luta de quase 40 minutos até conseguir trazer aquele robalo enorme para o barco. Quando já estava quase desistindo, ele deu um pulo impressionante, mas consegui manter a linha firme. Foi o maior peixe que já pesquei na minha vida!',
    author: {
      id: 'user1',
      name: 'Carlos Pescador',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    date: '10/05/2023',
    likes: 124,
    comments: 18,
    tags: ['robalo', 'pesca esportiva', 'Florianópolis'],
    category: 'Pesca de Mar',
    featured: true
  },
  {
    id: '2',
    title: 'A Lenda do Pirarucu Gigante',
    content: 'Na Amazônia, há histórias sobre um pirarucu gigante que ninguém consegue pescar. Durante minha expedição pelo Rio Negro, conheci um guia local que jurava ter visto o tal peixe. Passamos três dias seguindo rastros e relatos de ribeirinhos até que, numa manhã de neblina, vi algo enorme se movendo na água. Não conseguimos capturá-lo, mas aquela sombra na água era maior que qualquer pirarucu que já vi na vida. Será que era a lenda?',
    author: {
      id: 'user2',
      name: 'Antônio das Águas',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    date: '23/06/2023',
    likes: 87,
    comments: 31,
    tags: ['pirarucu', 'Amazônia', 'lendas'],
    category: 'Pesca de Rio',
    featured: true
  },
  {
    id: '3',
    title: 'Tempestade Inesperada',
    content: 'Estava pescando dourados no Pantanal quando, de repente, o céu escureceu. Não tive tempo de voltar ao acampamento e precisei amarrar meu barco numa árvore para esperar a tempestade passar. Foi assustador, mas também mágico ver a força da natureza tão de perto. Quando a chuva passou, peguei o maior dourado da viagem!',
    author: {
      id: 'user3',
      name: 'Joana Pescadora',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    date: '15/02/2023',
    likes: 65,
    comments: 12,
    tags: ['dourado', 'Pantanal', 'tempestade'],
    category: 'Pesca de Rio',
    featured: false
  },
  {
    id: '4',
    title: 'O Peixe Que Roubou Minha Vara',
    content: 'Isso aconteceu comigo no litoral de São Paulo. Estava pescando numa pedra quando fisgei algo muito pesado. A linha esticou tanto que achei que ia arrebentar. Num segundo de distração, o peixe puxou com tanta força que minha vara inteira foi arrastada para o mar! Meus amigos não acreditaram, mas um deles estava filmando e capturou o momento exato. Até hoje não sei que peixe era aquele!',
    author: {
      id: 'user4',
      name: 'Pedro Marítimo',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
    date: '08/09/2023',
    likes: 203,
    comments: 47,
    tags: ['acidente', 'pesca de pedra', 'história inacreditável'],
    category: 'Pesca de Mar',
    featured: true
  },
  {
    id: '5',
    title: 'A Traíra do Rio das Velhas',
    content: 'Meu avô sempre contava sobre uma traíra gigante que vivia no Rio das Velhas, em Minas Gerais. Todos achavam que era exagero de pescador, até que um dia, após uma chuva forte, encontrei um poço isolado onde algo se mexia. Usei uma isca artificial pequena e, para minha surpresa, fisgei uma traíra enorme, com mais de 10kg! Nunca tinha visto uma traíra daquele tamanho antes.',
    author: {
      id: 'user5',
      name: 'Mateus Mineiro',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    date: '17/03/2023',
    likes: 78,
    comments: 23,
    tags: ['traíra', 'Minas Gerais', 'recorde'],
    category: 'Pesca de Rio',
    featured: false
  }
];

interface StoryComment {
  id: string;
  authorName: string;
  authorAvatar?: string;
  date: string;
  content: string;
}

// Mock de comentários
const mockComments: Record<string, StoryComment[]> = {
  '1': [
    {
      id: 'c1',
      authorName: 'André Pescador',
      authorAvatar: 'https://i.pravatar.cc/150?img=8',
      date: '12/05/2023',
      content: 'Incrível! Também já pesquei na Barra da Lagoa, mas nunca peguei um robalo tão grande. Qual isca você usou?'
    },
    {
      id: 'c2',
      authorName: 'Maria Surfista',
      authorAvatar: 'https://i.pravatar.cc/150?img=9',
      date: '13/05/2023',
      content: 'Conheço bem essa região, é realmente um ótimo lugar para pesca. Parabéns pela captura!'
    }
  ],
  '2': [
    {
      id: 'c3',
      authorName: 'João Amazonas',
      authorAvatar: 'https://i.pravatar.cc/150?img=12',
      date: '25/06/2023',
      content: 'Essa história me lembrou das lendas que meu avô contava sobre o pirarucu gigante. Dizem que alguns chegam a mais de 3 metros!'
    }
  ]
};

const FishingStories = () => {
  const [currentCategory, setCurrentCategory] = useState<string>('all');
  const { isAuthenticated } = useAuth();
  const [selectedStory, setSelectedStory] = useState<(typeof mockStories)[0] | null>(null);
  const [storyComments, setStoryComments] = useState<Record<string, StoryComment[]>>(mockComments);
  const [newComment, setNewComment] = useState('');
  const [likes, setLikes] = useState<Record<string, boolean>>({});
  const [showNewStoryModal, setShowNewStoryModal] = useState(false);
  const [newStory, setNewStory] = useState({
    title: '',
    content: '',
    category: 'Pesca de Mar',
    tags: ''
  });
  
  // Filtragem por categoria
  const filteredStories = currentCategory === 'all' 
    ? mockStories 
    : mockStories.filter(story => story.category === currentCategory);
  
  // Destacar histórias em destaque
  const featuredStories = filteredStories.filter(story => story.featured);
  const regularStories = filteredStories.filter(story => !story.featured);
  
  const handleLike = (storyId: string) => {
    if (!isAuthenticated) {
      toast.error("Você precisa estar logado para curtir uma história");
      return;
    }
    
    setLikes(prev => {
      const isLiked = prev[storyId];
      
      if (isLiked) {
        toast.info("Você removeu sua curtida");
      } else {
        toast.success("Você curtiu essa história!");
      }
      
      return {
        ...prev,
        [storyId]: !isLiked
      };
    });
  };
  
  const handleComment = (storyId: string) => {
    if (!isAuthenticated) {
      toast.error("Você precisa estar logado para comentar");
      return;
    }
    
    // Abrir modal de detalhes com foco no campo de comentário
    const story = mockStories.find(s => s.id === storyId);
    if (story) {
      setSelectedStory(story);
    }
  };
  
  const handleSubmitComment = () => {
    if (!selectedStory || !newComment.trim()) return;
    
    const newCommentObj: StoryComment = {
      id: `new-${Date.now()}`,
      authorName: 'Você',
      date: new Date().toLocaleDateString('pt-BR'),
      content: newComment
    };
    
    setStoryComments(prev => {
      const storyId = selectedStory.id;
      const currentComments = prev[storyId] || [];
      
      return {
        ...prev,
        [storyId]: [...currentComments, newCommentObj]
      };
    });
    
    toast.success("Comentário adicionado com sucesso!");
    setNewComment('');
  };
  
  const handleShare = (story: typeof mockStories[0]) => {
    // Verificar se a API Web Share está disponível
    if (navigator.share) {
      navigator.share({
        title: story.title,
        text: `Confira esta história de pescador: ${story.title}`,
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
  
  const handleSubmitNewStory = () => {
    if (!newStory.title.trim() || !newStory.content.trim()) {
      toast.error("Por favor, preencha o título e o conteúdo da sua história");
      return;
    }
    
    toast.success("Sua história foi enviada e está em análise. Obrigado por compartilhar!");
    setShowNewStoryModal(false);
    setNewStory({
      title: '',
      content: '',
      category: 'Pesca de Mar',
      tags: ''
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-fishing-800 flex items-center">
          <BookOpen className="h-6 w-6 mr-2 text-fishing-600" />
          Histórias de Pescador
        </h2>
        
        <Tabs defaultValue="all" onValueChange={setCurrentCategory} className="w-auto">
          <TabsList className="grid grid-cols-3 w-auto">
            <TabsTrigger value="all" className="text-xs px-2.5 py-1">Todas</TabsTrigger>
            <TabsTrigger value="Pesca de Mar" className="text-xs px-2.5 py-1">Mar</TabsTrigger>
            <TabsTrigger value="Pesca de Rio" className="text-xs px-2.5 py-1">Rio</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      {isAuthenticated && (
        <div className="mb-6">
          <Button 
            className="w-full sm:w-auto" 
            variant="ocean"
            onClick={() => setShowNewStoryModal(true)}
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Compartilhar Sua História
          </Button>
        </div>
      )}
      
      {featuredStories.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Award className="h-5 w-5 mr-2 text-yellow-500" />
            Histórias em Destaque
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredStories.map((story) => (
              <Card key={story.id} className="hover:shadow-md transition-all border border-fishing-200/50 overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={story.author.avatar} />
                        <AvatarFallback>{story.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-xl">{story.title}</CardTitle>
                        <CardDescription className="flex items-center text-sm">
                          Por {story.author.name} • {story.date}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-fishing-50">
                      {story.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <p className="text-gray-700 line-clamp-4 text-sm md:text-base">
                    {story.content}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {story.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-fishing-100 text-fishing-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex justify-between">
                  <div className="flex space-x-4">
                    <button 
                      className={`flex items-center text-sm ${likes[story.id] ? 'text-red-500' : 'text-gray-500 hover:text-fishing-600'}`}
                      onClick={() => handleLike(story.id)}
                    >
                      <Heart className={`h-4 w-4 mr-1 ${likes[story.id] ? 'fill-current' : ''}`} />
                      {likes[story.id] ? story.likes + 1 : story.likes}
                    </button>
                    <button 
                      className="flex items-center text-sm text-gray-500 hover:text-fishing-600"
                      onClick={() => handleComment(story.id)}
                    >
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {storyComments[story.id]?.length || story.comments}
                    </button>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-fishing-600"
                    onClick={() => setSelectedStory(story)}
                  >
                    Ler mais
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Todas as Histórias</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularStories.map((story) => (
            <Card key={story.id} className="hover:shadow-sm transition-all">
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="text-lg">{story.title}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {story.category}
                  </Badge>
                </div>
                <CardDescription className="flex items-center text-xs">
                  <Avatar className="h-6 w-6 mr-2">
                    <AvatarImage src={story.author.avatar} />
                    <AvatarFallback>{story.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {story.author.name} • {story.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-gray-700 text-sm line-clamp-3">
                  {story.content}
                </p>
              </CardContent>
              <CardFooter className="pt-0 flex justify-between">
                <div className="flex space-x-3">
                  <button 
                    className={`flex items-center text-xs ${likes[story.id] ? 'text-red-500' : 'text-gray-500 hover:text-fishing-600'}`}
                    onClick={() => handleLike(story.id)}
                  >
                    <ThumbsUp className={`h-3 w-3 mr-1 ${likes[story.id] ? 'fill-current' : ''}`} />
                    {likes[story.id] ? story.likes + 1 : story.likes}
                  </button>
                  <button 
                    className="flex items-center text-xs text-gray-500 hover:text-fishing-600"
                    onClick={() => handleComment(story.id)}
                  >
                    <MessageSquare className="h-3 w-3 mr-1" />
                    {storyComments[story.id]?.length || story.comments}
                  </button>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-fishing-600 text-xs px-2 py-1 h-7"
                  onClick={() => setSelectedStory(story)}
                >
                  Ler mais
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-8">
        <Button variant="outline">Ver Mais Histórias</Button>
      </div>
      
      {/* Modal de detalhes da história */}
      {selectedStory && (
        <Dialog open={!!selectedStory} onOpenChange={() => setSelectedStory(null)}>
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedStory.title}</DialogTitle>
              <DialogDescription className="flex items-center text-sm">
                <Avatar className="h-6 w-6 mr-2">
                  <AvatarImage src={selectedStory.author.avatar} />
                  <AvatarFallback>{selectedStory.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                Por {selectedStory.author.name} • {selectedStory.date}
              </DialogDescription>
            </DialogHeader>
            
            <div>
              <Badge variant="outline" className="mb-4">
                {selectedStory.category}
              </Badge>
              <p className="text-gray-700 whitespace-pre-line">
                {selectedStory.content}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedStory.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-fishing-100 text-fishing-800">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="border-t pt-4 mt-4">
              <h4 className="font-medium text-lg flex items-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                Comentários ({storyComments[selectedStory.id]?.length || selectedStory.comments})
              </h4>
              
              <div className="space-y-3 mt-3 max-h-60 overflow-y-auto">
                {(storyComments[selectedStory.id] || []).map(comment => (
                  <div key={comment.id} className="bg-gray-50 p-3 rounded-md">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={comment.authorAvatar} />
                          <AvatarFallback>{comment.authorName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="ml-2 text-sm font-medium">{comment.authorName}</span>
                      </div>
                      <span className="text-xs text-gray-500">{comment.date}</span>
                    </div>
                    <p className="text-sm mt-2">{comment.content}</p>
                  </div>
                ))}
                
                {(!storyComments[selectedStory.id] || storyComments[selectedStory.id].length === 0) && (
                  <p className="text-center text-gray-500 text-sm">
                    Seja o primeiro a comentar nesta história!
                  </p>
                )}
              </div>
              
              {isAuthenticated ? (
                <div className="mt-4 space-y-2">
                  <Textarea 
                    placeholder="Escreva seu comentário..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full resize-none"
                  />
                  <Button 
                    onClick={handleSubmitComment}
                    disabled={!newComment.trim()}
                    className="w-full"
                  >
                    Enviar Comentário
                  </Button>
                </div>
              ) : (
                <p className="text-center text-sm text-gray-500 mt-4">
                  Faça login para comentar
                </p>
              )}
            </div>
            
            <DialogFooter className="flex-col sm:flex-row gap-2 sm:justify-between">
              <div className="flex gap-2">
                <Button 
                  variant={likes[selectedStory.id] ? "default" : "outline"} 
                  size="sm"
                  onClick={() => handleLike(selectedStory.id)}
                >
                  <Heart className={`h-4 w-4 mr-1.5 ${likes[selectedStory.id] ? 'fill-current' : ''}`} />
                  {likes[selectedStory.id] ? 'Curtido' : 'Curtir'}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleShare(selectedStory)}
                >
                  Compartilhar
                </Button>
              </div>
              <Button 
                variant="default" 
                onClick={() => setSelectedStory(null)}
              >
                Fechar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      
      {/* Modal para adicionar nova história */}
      <Dialog open={showNewStoryModal} onOpenChange={setShowNewStoryModal}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl">Compartilhar uma Nova História</DialogTitle>
            <DialogDescription>
              Conte sua melhor história de pescador para a comunidade!
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 mt-2">
            <div>
              <label className="block text-sm font-medium mb-1">Título da História</label>
              <input 
                type="text" 
                className="w-full border rounded-md p-2"
                placeholder="Ex: A maior traíra que já pesquei"
                value={newStory.title}
                onChange={(e) => setNewStory({...newStory, title: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Categoria</label>
              <select 
                className="w-full border rounded-md p-2"
                value={newStory.category}
                onChange={(e) => setNewStory({...newStory, category: e.target.value})}
              >
                <option value="Pesca de Mar">Pesca de Mar</option>
                <option value="Pesca de Rio">Pesca de Rio</option>
                <option value="Pesca Esportiva">Pesca Esportiva</option>
                <option value="Aventura">Aventura</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Tags (separadas por vírgula)</label>
              <input 
                type="text" 
                className="w-full border rounded-md p-2"
                placeholder="Ex: traíra, rio grande, pesca de barranco"
                value={newStory.tags}
                onChange={(e) => setNewStory({...newStory, tags: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Sua História</label>
              <Textarea 
                className="w-full border rounded-md p-2 min-h-[200px]"
                placeholder="Conte todos os detalhes da sua história..."
                value={newStory.content}
                onChange={(e) => setNewStory({...newStory, content: e.target.value})}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowNewStoryModal(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSubmitNewStory}>
              Enviar História
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FishingStories;
