
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { mockLeaderboard } from './mockCommunityData';

interface LeaderboardUser {
  id: string;
  name: string;
  avatar?: string;
  score: number;
  catches: number;
  bestCatch: {
    fishName: string;
    weight: number;
    score: number;
  };
  badges: string[];
  rank: number;
}

const CommunityLeaderboard = () => {
  const [timeFrame, setTimeFrame] = useState<'week' | 'month' | 'allTime'>('week');
  
  // Filtrar usuários com base no período selecionado
  const users = React.useMemo(() => {
    return mockLeaderboard[timeFrame].sort((a, b) => b.score - a.score);
  }, [timeFrame]);
  
  const topThree = users.slice(0, 3);
  const otherUsers = users.slice(3);
  
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center mb-4">
          <CardTitle className="text-xl">Ranking de Pescadores</CardTitle>
          <Tabs defaultValue="week" onValueChange={(v) => setTimeFrame(v as any)} className="w-auto">
            <TabsList className="grid grid-cols-3 w-auto">
              <TabsTrigger value="week" className="text-xs px-2.5 py-1">Semana</TabsTrigger>
              <TabsTrigger value="month" className="text-xs px-2.5 py-1">Mês</TabsTrigger>
              <TabsTrigger value="allTime" className="text-xs px-2.5 py-1">Total</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        {/* Top 3 em destaque */}
        <div className="flex justify-center items-end gap-4 my-6">
          {topThree.map((user, index) => {
            const positions = [1, 0, 2]; // Ordena para o 1º lugar ficar no meio, 2º à esquerda, 3º à direita
            const heights = ['h-24', 'h-32', 'h-20']; // Alturas diferentes para cada posição
            const position = positions[index];
            
            return (
              <div key={user.id} className="flex flex-col items-center">
                <div className={`relative ${heights[position]} flex items-end mb-2`}>
                  <div className={`
                    absolute top-0 w-full flex justify-center
                    ${position === 0 ? '-mt-6' : position === 1 ? '-mt-10' : '-mt-3'}
                  `}>
                    <Badge className={`
                      px-2.5 py-1.5 text-white font-bold text-lg rounded-full
                      ${position === 0 ? 'bg-gray-400' : position === 1 ? 'bg-yellow-500' : 'bg-amber-700'}
                    `}>
                      {position === 0 ? '2º' : position === 1 ? '1º' : '3º'}
                    </Badge>
                  </div>
                  
                  <div className={`
                    w-full rounded-t-lg flex items-center justify-center
                    ${position === 0 ? 'bg-gray-400' : position === 1 ? 'bg-yellow-500' : 'bg-amber-700'}
                  `}>
                    <Avatar className={`
                      border-4 border-white -mt-6
                      ${position === 0 ? 'h-16 w-16' : position === 1 ? 'h-20 w-20' : 'h-14 w-14'}
                    `}>
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm">{user.score} pontos</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-2">
          {otherUsers.map((user) => (
            <div 
              key={user.id} 
              className="flex items-center justify-between py-2 px-4 rounded-md hover:bg-muted/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 text-center font-medium text-gray-500">
                  {user.rank}º
                </div>
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-xs text-gray-500">
                    Melhor captura: {user.bestCatch.fishName} ({user.bestCatch.weight}kg)
                  </p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-semibold text-ocean-700">{user.score} pts</p>
                <p className="text-xs text-gray-500">{user.catches} capturas</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Button variant="outline">Ver ranking completo</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunityLeaderboard;
