
export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  brand: string;
  isNew?: boolean;
  isBestseller?: boolean;
  stock: number;
  features?: string[];
  specifications?: Record<string, string>;
  relatedProducts?: number[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Vara de Pesca Telescópica Albatroz Fishing Canario 2.70m",
    slug: "vara-telescopica-albatroz-canario",
    description: "Vara telescópica leve e resistente, ideal para pesca em água doce. Feita em fibra de carbono de alta qualidade, oferece excelente sensibilidade e resistência. Perfeita para pescadores iniciantes e intermediários.",
    price: 189.90,
    discount: 15,
    rating: 4.7,
    reviewCount: 126,
    image: "https://images.unsplash.com/photo-1578861256457-87c3bb02c246?q=80&w=1974&auto=format&fit=crop",
    category: "varas",
    brand: "albatroz",
    isNew: true,
    stock: 25,
    features: [
      "Comprimento: 2.70m",
      "Material: Fibra de carbono",
      "Ação: Média",
      "Potência: 6-12 lb",
      "Seções: 8"
    ],
    specifications: {
      "Comprimento": "2.70m",
      "Material": "Fibra de carbono",
      "Ação": "Média",
      "Potência": "6-12 lb",
      "Seções": "8",
      "Peso": "230g",
      "Garantia": "1 ano"
    },
    relatedProducts: [2, 5, 9]
  },
  {
    id: 2,
    name: "Carretilha Marine Sports Ventura 30000 Digital",
    slug: "carretilha-marine-sports-ventura",
    description: "Carretilha de alta performance com sistema digital de contagem das linhas. Possui sistema anti-reverso e freio preciso, ideal para pescas pesadas e em mar aberto.",
    price: 599.90,
    rating: 4.8,
    reviewCount: 87,
    image: "https://images.unsplash.com/photo-1583149811744-b85c763f2d0a?q=80&w=2070&auto=format&fit=crop",
    category: "carretilhas",
    brand: "marine",
    isBestseller: true,
    stock: 12,
    features: [
      "7 rolamentos",
      "Freio magnético ajustável",
      "Sistema anti-reverso",
      "Contador digital de linhas",
      "Capacidade de linha: 0.40mm - 190m"
    ],
    specifications: {
      "Rolamentos": "7+1",
      "Material": "Alumínio",
      "Capacidade de linha": "0.40mm - 190m",
      "Relação de recuperação": "6.3:1",
      "Peso": "347g",
      "Garantia": "2 anos"
    },
    relatedProducts: [3, 7, 14]
  },
  {
    id: 3,
    name: "Linha de Pesca Multifilamento Monster 3X 100m Verde",
    slug: "linha-multifilamento-monster-3x",
    description: "Linha multifilamento de alta resistência e baixa visibilidade. Excelente para pescas em locais com vegetação e estruturas. Oferece grande sensibilidade e força para combates intensos.",
    price: 89.90,
    discount: 10,
    rating: 4.5,
    reviewCount: 204,
    image: "https://images.unsplash.com/photo-1550951298-5c7b95a66da2?q=80&w=1780&auto=format&fit=crop",
    category: "linhas",
    brand: "monster3x",
    stock: 50,
    features: [
      "100 metros",
      "Diâmetro: 0.40mm",
      "Resistência: 40 lb",
      "Cor: Verde",
      "Baixa visibilidade na água"
    ],
    specifications: {
      "Comprimento": "100m",
      "Diâmetro": "0.40mm",
      "Resistência": "40 lb",
      "Material": "Multifilamento",
      "Cor": "Verde",
      "Visibilidade": "Baixa"
    },
    relatedProducts: [4, 6, 12]
  },
  {
    id: 4,
    name: "Isca Artificial Rapala Rattlin' 07 Cor Fire Tiger",
    slug: "isca-rapala-rattlin-fire-tiger",
    description: "Isca artificial com sistema de chocalho interno que produz sons atrativos para os peixes. Excelente acabamento e design que imita perfeitamente um peixe ferido. Ideal para pesca de tucunarés, robalos e traíras.",
    price: 49.90,
    rating: 4.9,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1590059297029-3ab26a96bd5d?q=80&w=2078&auto=format&fit=crop",
    category: "iscas",
    brand: "rapala",
    isBestseller: true,
    stock: 35,
    features: [
      "Comprimento: 7cm",
      "Peso: 8g",
      "Cor: Fire Tiger",
      "Sistema de chocalho interno",
      "Anzóis triplicados"
    ],
    specifications: {
      "Comprimento": "7cm",
      "Peso": "8g",
      "Cor": "Fire Tiger",
      "Tipo": "Minnow com chocalho",
      "Anzóis": "2 triplicados",
      "Profundidade": "0.5-1.5m"
    },
    relatedProducts: [11, 13, 15]
  },
  {
    id: 5,
    name: "Vara de Pesca Shimano SLX 6'6\" 8-17lb",
    slug: "vara-shimano-slx",
    description: "Vara de pesca profissional da linha Shimano SLX, confeccionada com materiais de alta tecnologia para máxima performance. Excelente sensibilidade e resistência, ideal para pescadores experientes.",
    price: 899.90,
    rating: 4.8,
    reviewCount: 52,
    image: "https://images.unsplash.com/photo-1583149884665-f922b6660ff7?q=80&w=2000&auto=format&fit=crop",
    category: "varas",
    brand: "shimano",
    isNew: true,
    stock: 8,
    features: [
      "Comprimento: 6'6\" (1.98m)",
      "Potência: 8-17 lb",
      "Ação: Moderada",
      "Material: Carbono XT60",
      "Passadores Fuji"
    ],
    specifications: {
      "Comprimento": "6'6\" (1.98m)",
      "Material": "Carbono XT60",
      "Ação": "Moderada",
      "Potência": "8-17 lb",
      "Seções": "1",
      "Peso": "126g",
      "Garantia": "3 anos"
    },
    relatedProducts: [1, 7, 9]
  },
  {
    id: 6,
    name: "Linha Monofilamento Shimano Technium 0.30mm 300m",
    slug: "linha-shimano-technium",
    description: "Linha monofilamento premium da Shimano, com tecnologia exclusiva que proporciona maior resistência à abrasão e menor memória. Perfeita para pesca em água doce e salgada.",
    price: 129.90,
    rating: 4.6,
    reviewCount: 73,
    image: "https://images.unsplash.com/photo-1627632951778-178374903d0c?q=80&w=1974&auto=format&fit=crop",
    category: "linhas",
    brand: "shimano",
    stock: 30,
    features: [
      "Comprimento: 300m",
      "Diâmetro: 0.30mm",
      "Resistência: 14 lb",
      "Cor: Transparente",
      "Baixa memória"
    ],
    specifications: {
      "Comprimento": "300m",
      "Diâmetro": "0.30mm",
      "Resistência": "14 lb",
      "Material": "Monofilamento",
      "Cor": "Transparente",
      "Visibilidade": "Baixa"
    },
    relatedProducts: [3, 12, 16]
  },
  {
    id: 7,
    name: "Molinete Daiwa Legalis LT 3000",
    slug: "molinete-daiwa-legalis",
    description: "Molinete de alta performance da série Legalis LT da Daiwa. Construído com a tecnologia Light & Tough, oferece leveza extrema sem comprometer a durabilidade e resistência.",
    price: 689.90,
    discount: 5,
    rating: 4.9,
    reviewCount: 38,
    image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=2070&auto=format&fit=crop",
    category: "carretilhas",
    brand: "daiwa",
    stock: 10,
    features: [
      "Rolamentos: 6+1",
      "Sistema Air Rotor",
      "Drag ATD",
      "Peso: 215g",
      "Relação: 5.3:1"
    ],
    specifications: {
      "Rolamentos": "6+1",
      "Material": "Graphite/Alumínio",
      "Capacidade de linha": "0.30mm - 150m",
      "Relação de recuperação": "5.3:1",
      "Peso": "215g",
      "Garantia": "2 anos"
    },
    relatedProducts: [2, 8, 14]
  },
  {
    id: 8,
    name: "Molinete Okuma Ceymar C-30",
    slug: "molinete-okuma-ceymar",
    description: "Molinete leve e resistente da linha Ceymar da Okuma. Ideal para pesca em água doce e salgada leve. Grande capacidade de linha e sistema de freio preciso e suave.",
    price: 399.90,
    rating: 4.5,
    reviewCount: 64,
    image: "https://images.unsplash.com/photo-1559214369-a6b1d7919865?q=80&w=1935&auto=format&fit=crop",
    category: "carretilhas",
    brand: "okuma",
    stock: 15,
    features: [
      "Rolamentos: 7+1",
      "Corpo em alumínio",
      "Sistema anti-reverso multidiscos",
      "Peso: 255g",
      "Relação: 5.0:1"
    ],
    specifications: {
      "Rolamentos": "7+1",
      "Material": "Alumínio",
      "Capacidade de linha": "0.30mm - 200m",
      "Relação de recuperação": "5.0:1",
      "Peso": "255g",
      "Garantia": "1 ano"
    },
    relatedProducts: [2, 7, 14]
  },
  {
    id: 9,
    name: "Vara Telescópica Marine Sports Evolution GT 3.60m",
    slug: "vara-marine-sports-evolution",
    description: "Vara telescópica versátil para diversas modalidades de pesca. Confeccionada em carbono, oferece excelente relação custo-benefício. Ideal para pescadores amadores e intermediários.",
    price: 219.90,
    discount: 12,
    rating: 4.3,
    reviewCount: 89,
    image: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=1974&auto=format&fit=crop",
    category: "varas",
    brand: "marine",
    stock: 18,
    features: [
      "Comprimento: 3.60m",
      "Material: Carbono",
      "Potência: 10-20 lb",
      "Seções: 7",
      "Passadores em cerâmica"
    ],
    specifications: {
      "Comprimento": "3.60m",
      "Material": "Carbono",
      "Ação": "Média",
      "Potência": "10-20 lb",
      "Seções": "7",
      "Peso": "335g",
      "Garantia": "1 ano"
    },
    relatedProducts: [1, 5, 10]
  },
  {
    id: 10,
    name: "Vara Saint Plus Carbono Strike 1.68m 8-17lb",
    slug: "vara-saint-plus-strike",
    description: "Vara de pesca em carbono de alta densidade, desenvolvida para pescaria com iscas artificiais. Excelente equilíbrio entre leveza e resistência. Passadores de qualidade superior e empunhadura confortável.",
    price: 299.90,
    rating: 4.6,
    reviewCount: 42,
    image: "https://images.unsplash.com/photo-1617874976590-4fe86339e7b0?q=80&w=1974&auto=format&fit=crop",
    category: "varas",
    brand: "marine",
    stock: 12,
    features: [
      "Comprimento: 1.68m",
      "Material: Carbono IM8",
      "Ação: Rápida",
      "Potência: 8-17 lb",
      "Seções: 2"
    ],
    specifications: {
      "Comprimento": "1.68m",
      "Material": "Carbono IM8",
      "Ação": "Rápida",
      "Potência": "8-17 lb",
      "Seções": "2",
      "Peso": "95g",
      "Garantia": "1 ano"
    },
    relatedProducts: [1, 5, 9]
  },
  {
    id: 11,
    name: "Isca Artificial Maruri Max Jig 30g Cor Azul/Prata",
    slug: "isca-maruri-max-jig",
    description: "Isca metálica estilo jig vertical para pesca de espécies de meia-água e fundo. Excelente acabamento e movimentação atrativa. Anzol resistente e afiado para fisgadas certeiras.",
    price: 39.90,
    discount: 5,
    rating: 4.7,
    reviewCount: 58,
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1170&auto=format&fit=crop",
    category: "iscas",
    brand: "maruri",
    stock: 40,
    features: [
      "Peso: 30g",
      "Cor: Azul/Prata",
      "Anzol reforçado",
      "Ideal para peixes de fundo",
      "Acabamento holográfico"
    ],
    specifications: {
      "Peso": "30g",
      "Cor": "Azul/Prata",
      "Tipo": "Jig vertical",
      "Anzol": "Single forte",
      "Material": "Metal fundido",
      "Acabamento": "Holográfico"
    },
    relatedProducts: [4, 13, 15]
  },
  {
    id: 12,
    name: "Linha Fluorocarbono Marine Sports 0.40mm 50m",
    slug: "linha-fluorocarbono-marine-sports",
    description: "Linha de fluorocarbono de alta qualidade, praticamente invisível na água. Alta resistência à abrasão e tração. Ideal para uso como linha de ataque em águas claras e pesca de espécies desconfiadas.",
    price: 69.90,
    rating: 4.4,
    reviewCount: 33,
    image: "https://images.unsplash.com/photo-1525683879097-d4fb3580ae2d?q=80&w=2070&auto=format&fit=crop",
    category: "linhas",
    brand: "marine",
    stock: 22,
    features: [
      "Comprimento: 50m",
      "Diâmetro: 0.40mm",
      "Resistência: 22 lb",
      "Invisível na água",
      "Alta resistência à abrasão"
    ],
    specifications: {
      "Comprimento": "50m",
      "Diâmetro": "0.40mm",
      "Resistência": "22 lb",
      "Material": "Fluorocarbono",
      "Cor": "Transparente",
      "Visibilidade": "Ultra baixa"
    },
    relatedProducts: [3, 6, 16]
  },
  {
    id: 13,
    name: "Isca Artificial Albatroz Fishing Crank Y38 9cm",
    slug: "isca-albatroz-crank",
    description: "Isca estilo crankbait com corpo compacto e nadadeira larga que proporciona natação vibrante e barulhenta. Excelente para pescas de traíras, tucunarés e peacocks em locais com estruturas submersas.",
    price: 29.90,
    rating: 4.2,
    reviewCount: 47,
    image: "https://images.unsplash.com/photo-1598111435660-070d5b2bdb04?q=80&w=2070&auto=format&fit=crop",
    category: "iscas",
    brand: "albatroz",
    stock: 35,
    features: [
      "Comprimento: 9cm",
      "Peso: 13g",
      "Cor: Dourado",
      "Profundidade: 2-3m",
      "Anzóis reforçados"
    ],
    specifications: {
      "Comprimento": "9cm",
      "Peso": "13g",
      "Cor": "Dourado",
      "Tipo": "Crankbait",
      "Anzóis": "2 triplicados",
      "Profundidade": "2-3m"
    },
    relatedProducts: [4, 11, 15]
  },
  {
    id: 14,
    name: "Carretilha Shimano Curado 200K",
    slug: "carretilha-shimano-curado",
    description: "Carretilha de alto desempenho da Shimano com tecnologia MicroModule Gear e X-Ship para suavidade extrema na operação. Freio SVS Infinity ajustável externamente para controle preciso dos arremessos.",
    price: 1299.90,
    rating: 4.9,
    reviewCount: 28,
    image: "https://images.unsplash.com/photo-1584178635844-6db819da820d?q=80&w=1974&auto=format&fit=crop",
    category: "carretilhas",
    brand: "shimano",
    isNew: true,
    stock: 5,
    features: [
      "Rolamentos: 7+1",
      "Freio SVS Infinity",
      "Corpo Hagane",
      "Capacidade: 0.35mm - 110m",
      "Relação: 6.2:1"
    ],
    specifications: {
      "Rolamentos": "7+1",
      "Material": "Alumínio/Hagane",
      "Capacidade de linha": "0.35mm - 110m",
      "Relação de recuperação": "6.2:1",
      "Peso": "215g",
      "Garantia": "3 anos"
    },
    relatedProducts: [2, 7, 8]
  },
  {
    id: 15,
    name: "Kit de Iscas Artificiais Soft Maruri Kit Xingu 15 peças",
    slug: "kit-iscas-maruri-xingu",
    description: "Kit com 15 iscas soft para diversas modalidades de pesca. Inclui shads, sapos e minhocas em cores variadas. Excelente opção para pescadores que querem versatilidade em um único kit.",
    price: 119.90,
    discount: 20,
    rating: 4.5,
    reviewCount: 75,
    image: "https://images.unsplash.com/photo-1541690860021-2f6b1428883e?q=80&w=1935&auto=format&fit=crop",
    category: "iscas",
    brand: "maruri",
    stock: 20,
    features: [
      "15 peças variadas",
      "Cores sortidas",
      "Tamanhos variados",
      "Estojo plástico incluso",
      "Ideal para águas doces"
    ],
    specifications: {
      "Quantidade": "15 peças",
      "Tipos": "Shads, sapos, minhocas",
      "Cores": "Variadas",
      "Material": "Silicone macio",
      "Aroma": "Camarão/peixe",
      "Estojo": "Incluído"
    },
    relatedProducts: [4, 11, 13]
  },
  {
    id: 16,
    name: "Linha de Pesca Multifilamento Daiwa J-Braid X8 150m",
    slug: "linha-daiwa-j-braid",
    description: "Linha multifilamento de 8 fios da Daiwa, que oferece extrema resistência e sensibilidade. Trançado redondo e suave, perfeito para arremessos de longa distância e pescas que exigem precisão.",
    price: 159.90,
    rating: 4.8,
    reviewCount: 56,
    image: "https://images.unsplash.com/photo-1578164417222-e209926ae85e?q=80&w=1974&auto=format&fit=crop",
    category: "linhas",
    brand: "daiwa",
    isBestseller: true,
    stock: 15,
    features: [
      "Comprimento: 150m",
      "Diâmetro: 0.28mm",
      "Resistência: 40 lb",
      "8 fios trançados",
      "Cor: Verde escuro"
    ],
    specifications: {
      "Comprimento": "150m",
      "Diâmetro": "0.28mm",
      "Resistência": "40 lb",
      "Material": "Multifilamento 8 fios",
      "Cor": "Verde escuro",
      "Visibilidade": "Média"
    },
    relatedProducts: [3, 6, 12]
  }
];
