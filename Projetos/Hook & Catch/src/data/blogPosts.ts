
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  imageUrl: string;
  date: string;
  commentsCount: number;
  category: string;
  slug: string;
}

// Combining featured and recent posts for the full blog data
export const allBlogPosts: BlogPost[] = [
  // Featured posts
  {
    id: 1,
    title: 'Os 5 Melhores Lagos para Pesca no Brasil',
    excerpt: 'Descubra os lagos mais ricos em diversidade de peixes e com as melhores estruturas para pescadores no Brasil.',
    imageUrl: 'https://images.unsplash.com/photo-1563432069419-f2075b94f14a?q=80&w=2070&auto=format&fit=crop',
    date: '15 de Junho, 2023',
    commentsCount: 24,
    category: 'Locais de Pesca',
    slug: 'melhores-lagos-pesca-brasil'
  },
  {
    id: 2,
    title: 'Guia Completo: Equipamentos Essenciais para Iniciantes',
    excerpt: 'Tudo o que você precisa saber antes de comprar seu primeiro equipamento de pesca. Dicas para não errar na escolha.',
    imageUrl: 'https://images.unsplash.com/photo-1542422139-3470a7c3ad48?q=80&w=2070&auto=format&fit=crop',
    date: '3 de Julho, 2023',
    commentsCount: 18,
    category: 'Equipamentos',
    slug: 'guia-equipamentos-iniciantes'
  },
  {
    id: 3,
    title: 'Técnicas Avançadas de Pesca com Iscas Artificiais',
    excerpt: 'Aprenda como utilizar diferentes tipos de iscas artificiais e maximize suas chances de sucesso na pescaria.',
    imageUrl: 'https://images.unsplash.com/photo-1500586402663-a104cb4fbeca?q=80&w=2070&auto=format&fit=crop',
    date: '22 de Agosto, 2023',
    commentsCount: 32,
    category: 'Técnicas',
    slug: 'tecnicas-avancadas-iscas-artificiais'
  },
  
  // Recent posts
  {
    id: 4,
    title: 'Conservação de Peixes: Por Que o Pesque e Solte é Importante',
    excerpt: 'Entenda como a prática do pesque e solte ajuda na preservação das espécies e na sustentabilidade da pesca esportiva.',
    imageUrl: 'https://images.unsplash.com/photo-1599407064918-8d72704c1c75?q=80&w=2071&auto=format&fit=crop',
    date: '10 de Setembro, 2023',
    commentsCount: 15,
    category: 'Conservação',
    slug: 'importancia-pesque-solte'
  },
  {
    id: 5,
    title: 'Como Escolher a Linha de Pesca Ideal para Cada Situação',
    excerpt: 'Monofilamento, fluorocarbono ou trançada? Aprenda a escolher a linha certa para diferentes tipos de pesca e ambientes.',
    imageUrl: 'https://images.unsplash.com/photo-1512629746222-84ff15f853ae?q=80&w=2070&auto=format&fit=crop',
    date: '28 de Agosto, 2023',
    commentsCount: 11,
    category: 'Equipamentos',
    slug: 'escolhendo-linha-pesca-ideal'
  },
  {
    id: 6,
    title: 'Calendário de Pesca: As Melhores Épocas para Pescar Cada Espécie',
    excerpt: 'Um guia completo sobre as estações e períodos ideais para pescar as principais espécies de água doce e salgada no Brasil.',
    imageUrl: 'https://images.unsplash.com/photo-1593532440466-4404e3a6e67c?q=80&w=2070&auto=format&fit=crop',
    date: '15 de Agosto, 2023',
    commentsCount: 19,
    category: 'Dicas',
    slug: 'calendario-pesca-especies'
  },
  {
    id: 7,
    title: 'Receitas Deliciosas para Preparar seu Pescado',
    excerpt: 'Dez receitas simples e saborosas para aproveitar o peixe fresco da sua pescaria. Do tradicional ao gourmet.',
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop',
    date: '5 de Agosto, 2023',
    commentsCount: 27,
    category: 'Culinária',
    slug: 'receitas-deliciosas-pescado'
  },
  
  // Additional posts for pagination
  {
    id: 8,
    title: 'Os Segredos da Pesca Noturna',
    excerpt: 'Aprenda técnicas especiais para pescar durante a noite e aumente suas chances de capturar espécies que são mais ativas nesse período.',
    imageUrl: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2070&auto=format&fit=crop',
    date: '20 de Julho, 2023',
    commentsCount: 22,
    category: 'Técnicas',
    slug: 'segredos-pesca-noturna'
  },
  {
    id: 9,
    title: 'Pesca em Alto Mar: Guia Completo para Iniciantes',
    excerpt: 'Tudo o que você precisa saber antes de embarcar em sua primeira aventura de pesca oceânica. Dicas, equipamentos e cuidados essenciais.',
    imageUrl: 'https://images.unsplash.com/photo-1564762861003-0cfa1107760e?q=80&w=2070&auto=format&fit=crop',
    date: '12 de Julho, 2023',
    commentsCount: 31,
    category: 'Locais de Pesca',
    slug: 'pesca-alto-mar-iniciantes'
  },
  {
    id: 10,
    title: 'Como Fotografar Suas Capturas: Um Guia para Pescadores',
    excerpt: 'Dicas profissionais para registrar seus momentos de pesca com fotos incríveis, mesmo sem equipamentos caros.',
    imageUrl: 'https://images.unsplash.com/photo-1678017712664-bebd58a2ae4e?q=80&w=2070&auto=format&fit=crop',
    date: '5 de Julho, 2023',
    commentsCount: 16,
    category: 'Dicas',
    slug: 'fotografar-capturas-guia'
  }
];
