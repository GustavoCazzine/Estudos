
import type { FishingPost } from '../../pages/FishingCommunity';
import { calculateFishScore } from './scoring';

// Mock de posts de pesca para a comunidade
export const mockFishingPosts: FishingPost[] = [
  {
    id: 'post1',
    userId: 'user1',
    userName: 'Carlos Pescador',
    userAvatar: 'https://ui-avatars.com/api/?name=Carlos+Pescador&background=0D8ABC&color=fff',
    fishName: 'Tucunaré',
    weight: 8.5,
    length: 78,
    location: 'Rio Negro, Amazônia',
    date: '15/05/2024',
    description: 'Incrível captura após 2 horas de batalha. Utilizei isca artificial e foi uma experiência inesquecível!',
    photos: [
      'https://images.unsplash.com/photo-1516093604101-0a6645d33969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1589656329732-464b40e44e05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    ],
    likes: 87,
    comments: 15,
    score: calculateFishScore('Tucunaré', 8.5, 78)
  },
  {
    id: 'post2',
    userId: 'user2',
    userName: 'Marina Silva',
    userAvatar: 'https://ui-avatars.com/api/?name=Marina+Silva&background=518554&color=fff',
    fishName: 'Dourado',
    weight: 12.3,
    length: 92,
    location: 'Rio Paraná, MS',
    date: '28/05/2024',
    description: 'Meu recorde pessoal! Esta captura foi feita em uma expedição de 3 dias. Valeu cada minuto!',
    photos: [
      'https://images.unsplash.com/photo-1598966369523-36613c8c2291?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    ],
    likes: 142,
    comments: 33,
    score: calculateFishScore('Dourado', 12.3, 92)
  },
  {
    id: 'post3',
    userId: 'user3',
    userName: 'Pedro Anzol',
    userAvatar: 'https://ui-avatars.com/api/?name=Pedro+Anzol&background=A52A2A&color=fff',
    fishName: 'Marlim',
    weight: 98.6,
    length: 245,
    location: 'Litoral de Cabo Frio, RJ',
    date: '10/06/2024',
    description: 'Pesca oceânica em alto mar. Luta de mais de 3 horas para trazer este gigante. Praticamos o pesque e solte após as fotos.',
    photos: [
      'https://images.unsplash.com/photo-1587547066385-a0a4a21582aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1627558009643-7c3640d0f575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1589048891260-09803bed839a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    ],
    likes: 215,
    comments: 42,
    score: calculateFishScore('Marlim', 98.6, 245)
  },
  {
    id: 'post4',
    userId: 'user4',
    userName: 'Ana Pesca',
    userAvatar: 'https://ui-avatars.com/api/?name=Ana+Pesca&background=F0A500&color=fff',
    fishName: 'Robalo',
    weight: 4.2,
    length: 56,
    location: 'Barra de Guaratiba, RJ',
    date: '05/06/2024',
    description: 'Pescaria matinal com minha família. Este robalo deu um belo jantar!',
    photos: [
      'https://images.unsplash.com/photo-1621120690441-f6f22b4cc0af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    ],
    likes: 65,
    comments: 12,
    score: calculateFishScore('Robalo', 4.2, 56)
  },
  {
    id: 'post5',
    userId: 'user5',
    userName: 'João Isca',
    userAvatar: 'https://ui-avatars.com/api/?name=Joao+Isca&background=1E5945&color=fff',
    fishName: 'Tambaqui',
    weight: 18.7,
    length: 88,
    location: 'Lago do Janauacá, AM',
    date: '01/06/2024',
    description: 'Um verdadeiro gigante da Amazônia! Isca natural de fruta e muita paciência.',
    photos: [
      'https://images.unsplash.com/photo-1539125530496-3ca408f9c2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      'https://images.unsplash.com/photo-1597230208616-8b22119e1d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    ],
    likes: 98,
    comments: 22,
    score: calculateFishScore('Tambaqui', 18.7, 88)
  },
  {
    id: 'post6',
    userId: 'user6',
    userName: 'Rafael Costa',
    userAvatar: 'https://ui-avatars.com/api/?name=Rafael+Costa&background=3498db&color=fff',
    fishName: 'Atum',
    weight: 45.3,
    length: 158,
    location: 'Ilhas Canárias, Espanha',
    date: '25/05/2024',
    description: 'Expedição internacional rendeu esta captura incrível! Uma experiência inesquecível pescando no Atlântico.',
    photos: [
      'https://images.unsplash.com/photo-1531159184231-b3f9a31b01cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    ],
    likes: 178,
    comments: 37,
    score: calculateFishScore('Atum', 45.3, 158)
  },
];

// Estrutura para o mock de leaderboard
export const mockLeaderboard = {
  week: [
    { id: 'user1', name: 'Carlos Pescador', avatar: 'https://ui-avatars.com/api/?name=Carlos+Pescador&background=0D8ABC&color=fff', score: 1250, catches: 5, bestCatch: { fishName: 'Tucunaré', weight: 8.5, score: 145 }, badges: ['amazon', 'masterCatcher'], rank: 1 },
    { id: 'user3', name: 'Pedro Anzol', avatar: 'https://ui-avatars.com/api/?name=Pedro+Anzol&background=A52A2A&color=fff', score: 980, catches: 3, bestCatch: { fishName: 'Marlim', weight: 98.6, score: 580 }, badges: ['ocean', 'bigGame'], rank: 2 },
    { id: 'user2', name: 'Marina Silva', avatar: 'https://ui-avatars.com/api/?name=Marina+Silva&background=518554&color=fff', score: 780, catches: 7, bestCatch: { fishName: 'Dourado', weight: 12.3, score: 220 }, badges: ['river'], rank: 3 },
    { id: 'user6', name: 'Rafael Costa', avatar: 'https://ui-avatars.com/api/?name=Rafael+Costa&background=3498db&color=fff', score: 650, catches: 2, bestCatch: { fishName: 'Atum', weight: 45.3, score: 450 }, badges: ['international'], rank: 4 },
    { id: 'user5', name: 'João Isca', avatar: 'https://ui-avatars.com/api/?name=Joao+Isca&background=1E5945&color=fff', score: 480, catches: 4, bestCatch: { fishName: 'Tambaqui', weight: 18.7, score: 260 }, badges: ['amazon'], rank: 5 },
    { id: 'user4', name: 'Ana Pesca', avatar: 'https://ui-avatars.com/api/?name=Ana+Pesca&background=F0A500&color=fff', score: 320, catches: 6, bestCatch: { fishName: 'Robalo', weight: 4.2, score: 70 }, badges: ['coastal'], rank: 6 },
    { id: 'user7', name: 'Lucas Martins', avatar: 'https://ui-avatars.com/api/?name=Lucas+Martins&background=8E44AD&color=fff', score: 290, catches: 3, bestCatch: { fishName: 'Tilápia', weight: 2.8, score: 45 }, badges: [], rank: 7 },
    { id: 'user8', name: 'Fernando Rios', avatar: 'https://ui-avatars.com/api/?name=Fernando+Rios&background=D35400&color=fff', score: 210, catches: 2, bestCatch: { fishName: 'Pintado', weight: 15.4, score: 180 }, badges: [], rank: 8 },
  ],
  month: [
    { id: 'user3', name: 'Pedro Anzol', avatar: 'https://ui-avatars.com/api/?name=Pedro+Anzol&background=A52A2A&color=fff', score: 3250, catches: 12, bestCatch: { fishName: 'Marlim', weight: 98.6, score: 580 }, badges: ['ocean', 'bigGame', 'master'], rank: 1 },
    { id: 'user1', name: 'Carlos Pescador', avatar: 'https://ui-avatars.com/api/?name=Carlos+Pescador&background=0D8ABC&color=fff', score: 2980, catches: 18, bestCatch: { fishName: 'Tucunaré', weight: 8.5, score: 145 }, badges: ['amazon', 'masterCatcher', 'river'], rank: 2 },
    { id: 'user6', name: 'Rafael Costa', avatar: 'https://ui-avatars.com/api/?name=Rafael+Costa&background=3498db&color=fff', score: 2340, catches: 8, bestCatch: { fishName: 'Atum', weight: 45.3, score: 450 }, badges: ['international', 'ocean'], rank: 3 },
    { id: 'user2', name: 'Marina Silva', avatar: 'https://ui-avatars.com/api/?name=Marina+Silva&background=518554&color=fff', score: 1780, catches: 15, bestCatch: { fishName: 'Dourado', weight: 12.3, score: 220 }, badges: ['river', 'consistent'], rank: 4 },
    { id: 'user5', name: 'João Isca', avatar: 'https://ui-avatars.com/api/?name=Joao+Isca&background=1E5945&color=fff', score: 1480, catches: 10, bestCatch: { fishName: 'Tambaqui', weight: 18.7, score: 260 }, badges: ['amazon', 'pioneer'], rank: 5 },
    { id: 'user9', name: 'Clara Águas', avatar: 'https://ui-avatars.com/api/?name=Clara+Aguas&background=27AE60&color=fff', score: 1350, catches: 7, bestCatch: { fishName: 'Pirarucu', weight: 32.8, score: 410 }, badges: ['amazon'], rank: 6 },
    { id: 'user4', name: 'Ana Pesca', avatar: 'https://ui-avatars.com/api/?name=Ana+Pesca&background=F0A500&color=fff', score: 980, catches: 14, bestCatch: { fishName: 'Robalo', weight: 4.2, score: 70 }, badges: ['coastal', 'consistent'], rank: 7 },
    { id: 'user7', name: 'Lucas Martins', avatar: 'https://ui-avatars.com/api/?name=Lucas+Martins&background=8E44AD&color=fff', score: 850, catches: 9, bestCatch: { fishName: 'Tilápia', weight: 2.8, score: 45 }, badges: ['freshwater'], rank: 8 },
  ],
  allTime: [
    { id: 'user3', name: 'Pedro Anzol', avatar: 'https://ui-avatars.com/api/?name=Pedro+Anzol&background=A52A2A&color=fff', score: 15680, catches: 87, bestCatch: { fishName: 'Marlim', weight: 115.3, score: 680 }, badges: ['ocean', 'bigGame', 'master', 'legend', 'pioneer'], rank: 1 },
    { id: 'user1', name: 'Carlos Pescador', avatar: 'https://ui-avatars.com/api/?name=Carlos+Pescador&background=0D8ABC&color=fff', score: 12450, catches: 134, bestCatch: { fishName: 'Tucunaré', weight: 12.8, score: 210 }, badges: ['amazon', 'masterCatcher', 'river', 'legend'], rank: 2 },
    { id: 'user10', name: 'Roberto Pescaria', avatar: 'https://ui-avatars.com/api/?name=Roberto+Pescaria&background=C0392B&color=fff', score: 9870, catches: 102, bestCatch: { fishName: 'Peixe-vela', weight: 68.5, score: 520 }, badges: ['ocean', 'international', 'champion'], rank: 3 },
    { id: 'user6', name: 'Rafael Costa', avatar: 'https://ui-avatars.com/api/?name=Rafael+Costa&background=3498db&color=fff', score: 8340, catches: 56, bestCatch: { fishName: 'Atum', weight: 85.7, score: 580 }, badges: ['international', 'ocean', 'explorer'], rank: 4 },
    { id: 'user2', name: 'Marina Silva', avatar: 'https://ui-avatars.com/api/?name=Marina+Silva&background=518554&color=fff', score: 7560, catches: 98, bestCatch: { fishName: 'Dourado', weight: 18.9, score: 320 }, badges: ['river', 'consistent', 'veteran'], rank: 5 },
    { id: 'user9', name: 'Clara Águas', avatar: 'https://ui-avatars.com/api/?name=Clara+Aguas&background=27AE60&color=fff', score: 6980, catches: 45, bestCatch: { fishName: 'Pirarucu', weight: 78.3, score: 620 }, badges: ['amazon', 'master', 'bigCatch'], rank: 6 },
    { id: 'user5', name: 'João Isca', avatar: 'https://ui-avatars.com/api/?name=Joao+Isca&background=1E5945&color=fff', score: 5430, catches: 76, bestCatch: { fishName: 'Tambaqui', weight: 25.4, score: 340 }, badges: ['amazon', 'pioneer', 'veteran'], rank: 7 },
    { id: 'user11', name: 'André Barcos', avatar: 'https://ui-avatars.com/api/?name=Andre+Barcos&background=2980B9&color=fff', score: 4870, catches: 63, bestCatch: { fishName: 'Garoupa', weight: 22.6, score: 280 }, badges: ['coastal', 'veteran'], rank: 8 },
  ]
};
