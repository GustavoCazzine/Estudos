
import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CommunityLeaderboard from '../components/community/CommunityLeaderboard';
import FishingPostsGrid from '../components/community/FishingPostsGrid';
import CreateFishingPostButton from '../components/community/CreateFishingPostButton';
import { useAuth } from '../hooks/useAuth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Users, TrendingUp, BookOpen } from 'lucide-react';
import FishingStories from '../components/community/FishingStories';
import { useLocation, useNavigate } from 'react-router-dom';

// Tipo para os posts de pesca compartilhados pelos usuários
export type FishingPost = {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  fishName: string;
  weight: number; // em kg
  length: number; // em cm
  location: string;
  date: string;
  description: string;
  photos: string[];
  likes: number;
  comments: number;
  score: number;
};

const FishingCommunity = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam || 'posts');
  const { isAuthenticated, user } = useAuth();
  
  useEffect(() => {
    document.title = 'Comunidade de Pesca | Hook & Catch';
    
    // Se recebermos um parâmetro tab na URL, definimos a aba ativa
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Atualizar a URL com o parâmetro tab
    navigate(`/community?tab=${value}`, { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 pt-24 md:pt-32">
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold text-fishing-800">Comunidade de Pescadores</h1>
            <p className="text-muted-foreground">
              Compartilhe suas capturas, veja os melhores pescadores e participe de nossa comunidade.
            </p>
            
            {isAuthenticated && (
              <div className="mb-4">
                <CreateFishingPostButton />
              </div>
            )}
            
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="posts" className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Capturas Recentes</span>
                  <span className="sm:hidden">Recentes</span>
                </TabsTrigger>
                <TabsTrigger value="top" className="flex items-center">
                  <Trophy className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Melhores da Semana</span>
                  <span className="sm:hidden">Top</span>
                </TabsTrigger>
                <TabsTrigger value="stories" className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Histórias de Pescador</span>
                  <span className="sm:hidden">Histórias</span>
                </TabsTrigger>
                <TabsTrigger value="leaderboard" className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Ranking de Pescadores</span>
                  <span className="sm:hidden">Ranking</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="posts">
                <FishingPostsGrid sortBy="recent" />
              </TabsContent>
              
              <TabsContent value="top">
                <FishingPostsGrid sortBy="top" />
              </TabsContent>
              
              <TabsContent value="stories">
                <FishingStories />
              </TabsContent>
              
              <TabsContent value="leaderboard">
                <CommunityLeaderboard />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FishingCommunity;
