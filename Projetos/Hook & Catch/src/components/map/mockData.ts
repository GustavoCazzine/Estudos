
import type { FishingSpot } from '../../pages/FishingMap';

// Países disponíveis para filtro
export const mockCountries = [
  'Brasil',
  'Argentina',
  'Estados Unidos',
  'Portugal',
  'Espanha'
];

// Regiões disponíveis para cada país
export const mockRegions: Record<string, string[]> = {
  'Brasil': ['Amazônia', 'Pantanal', 'Sudeste', 'Sul', 'Nordeste'],
  'Argentina': ['Patagônia', 'Pampas', 'Córdoba'],
  'Estados Unidos': ['Flórida', 'Califórnia', 'Alaska', 'Texas'],
  'Portugal': ['Algarve', 'Lisboa', 'Porto', 'Madeira'],
  'Espanha': ['Costa Brava', 'Ilhas Canárias', 'Catalunha']
};

// Tipos de locais de pesca
export const spotTypes = [
  { value: 'river', label: 'Rio' },
  { value: 'lake', label: 'Lago' },
  { value: 'sea', label: 'Mar' },
  { value: 'reservoir', label: 'Represa' },
  { value: 'estuary', label: 'Estuário' },
  { value: 'pier', label: 'Pier/Trapiche' },
  { value: 'dam', label: 'Barragem' },
  { value: 'waterfall', label: 'Cachoeira' }
];

// Mock de locais de pesca
export const mockFishingSpots: FishingSpot[] = [
  {
    id: 'spot1',
    name: 'Rio Negro',
    country: 'Brasil',
    region: 'Amazônia',
    type: 'river',
    description: 'O Rio Negro é um dos principais afluentes do Rio Amazonas, conhecido por suas águas escuras e rica biodiversidade. Excelente para pesca de tucunaré, tambaqui e outras espécies amazônicas.',
    coordinates: {
      lat: -3.0583,
      lng: -60.1750,
    },
    rating: 4.8,
    reviewCount: 124,
    fishTypes: ['Tucunaré', 'Tambaqui', 'Pirarucu', 'Traíra'],
    bestSeasons: ['Setembro', 'Outubro', 'Novembro'],
    photos: [
      'https://images.unsplash.com/photo-1542332213-31f87348057f',
      'https://images.unsplash.com/photo-1562109271-9d532a78ae04',
      'https://images.unsplash.com/photo-1606589557191-c13697f1ee9d',
    ]
  },
  {
    id: 'spot2',
    name: 'Pantanal Sul',
    country: 'Brasil',
    region: 'Pantanal',
    type: 'lake',
    description: 'O Pantanal é a maior área úmida do mundo e um paraíso para pescadores. Rico em rios, lagos e baías, é o lar de mais de 260 espécies de peixes, incluindo o dourado e o pintado.',
    coordinates: {
      lat: -19.9534,
      lng: -56.3324,
    },
    rating: 4.9,
    reviewCount: 187,
    fishTypes: ['Dourado', 'Pintado', 'Pacu', 'Piraputanga'],
    bestSeasons: ['Abril', 'Maio', 'Junho', 'Julho'],
    photos: [
      'https://images.unsplash.com/photo-1599407384144-6bfebb56a93d',
      'https://images.unsplash.com/photo-1619539465730-fea9ebf0a3d4',
    ]
  },
  {
    id: 'spot3',
    name: 'Lagoa dos Patos',
    country: 'Brasil',
    region: 'Sul',
    type: 'lake',
    description: 'A Lagoa dos Patos é a maior laguna do Brasil e uma das maiores do mundo. Oferece excelente pesca de tainha, linguado e outros peixes marinhos e de água doce.',
    coordinates: {
      lat: -31.0002,
      lng: -51.5146,
    },
    rating: 4.2,
    reviewCount: 98,
    fishTypes: ['Tainha', 'Linguado', 'Corvina', 'Bagre'],
    bestSeasons: ['Dezembro', 'Janeiro', 'Fevereiro'],
    photos: [
      'https://images.unsplash.com/photo-1526290780765-72b17c372a49',
      'https://images.unsplash.com/photo-1581001372982-f5df59c6b5a9',
    ]
  },
  {
    id: 'spot4',
    name: 'Key West',
    country: 'Estados Unidos',
    region: 'Flórida',
    type: 'sea',
    description: 'Key West é um destino de classe mundial para a pesca esportiva, oferecendo diversas opções tanto em águas rasas quanto em alto-mar.',
    coordinates: {
      lat: 24.5551,
      lng: -81.7800,
    },
    rating: 4.7,
    reviewCount: 215,
    fishTypes: ['Marlim', 'Atum', 'Barracuda', 'Peixe-vela'],
    bestSeasons: ['Março', 'Abril', 'Maio', 'Junho'],
    photos: [
      'https://images.unsplash.com/photo-1519567164689-ca20209ebb04',
      'https://images.unsplash.com/photo-1515296884506-bb29dbebe3d6',
    ]
  },
  {
    id: 'spot5',
    name: 'Lago Strobel',
    country: 'Argentina',
    region: 'Patagônia',
    type: 'lake',
    description: 'Conhecido como "Jurassic Lake", é famoso por suas trutas arco-íris gigantes. Um dos melhores locais do mundo para pesca de truta.',
    coordinates: {
      lat: -48.5100,
      lng: -71.2036,
    },
    rating: 4.9,
    reviewCount: 67,
    fishTypes: ['Truta Arco-Íris', 'Truta Marrom'],
    bestSeasons: ['Novembro', 'Dezembro', 'Janeiro', 'Fevereiro'],
    photos: [
      'https://images.unsplash.com/photo-1582657118090-af35eefc4e48',
      'https://images.unsplash.com/photo-1595501294785-e600b110ced7',
    ]
  },
  {
    id: 'spot6',
    name: 'Estuário do Tejo',
    country: 'Portugal',
    region: 'Lisboa',
    type: 'estuary',
    description: 'O estuário do rio Tejo oferece ótimas oportunidades para pesca de robalo, dourada e outros peixes marinhos que entram no estuário.',
    coordinates: {
      lat: 38.7223,
      lng: -9.1393,
    },
    rating: 4.3,
    reviewCount: 89,
    fishTypes: ['Robalo', 'Dourada', 'Tainha', 'Sargo'],
    bestSeasons: ['Maio', 'Junho', 'Julho', 'Agosto'],
    photos: [
      'https://images.unsplash.com/photo-1555881400-74d7acaacd8b',
      'https://images.unsplash.com/photo-1594743862327-305e3307c56c',
    ]
  },
  {
    id: 'spot7',
    name: 'Costa Brava',
    country: 'Espanha',
    region: 'Costa Brava',
    type: 'sea',
    description: 'A Costa Brava oferece excelentes oportunidades para pesca em alto mar e em praias, com uma grande variedade de espécies mediterrâneas.',
    coordinates: {
      lat: 41.8654,
      lng: 3.0752,
    },
    rating: 4.6,
    reviewCount: 134,
    fishTypes: ['Dentão', 'Pargo', 'Garoupa', 'Serrano'],
    bestSeasons: ['Junho', 'Julho', 'Agosto', 'Setembro'],
    photos: [
      'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da',
      'https://images.unsplash.com/photo-1582711012124-a56cf82307a0',
    ]
  },
  {
    id: 'spot8',
    name: 'Represa de Furnas',
    country: 'Brasil',
    region: 'Sudeste',
    type: 'reservoir',
    description: 'A Represa de Furnas é um dos melhores lugares para pesca de tucunaré, tilápia e outros peixes de água doce no sudeste do Brasil.',
    coordinates: {
      lat: -20.6667,
      lng: -46.3167,
    },
    rating: 4.5,
    reviewCount: 112,
    fishTypes: ['Tucunaré', 'Tilápia', 'Traíra', 'Lambari'],
    bestSeasons: ['Outubro', 'Novembro', 'Dezembro'],
    photos: [
      'https://images.unsplash.com/photo-1551501419-cb31cdd588d6',
      'https://images.unsplash.com/photo-1517544845501-bb7d1631c88a',
    ]
  },
  {
    id: 'spot9',
    name: 'Pier de Santa Mônica',
    country: 'Estados Unidos',
    region: 'Califórnia',
    type: 'pier',
    description: 'O famoso pier de Santa Mônica oferece pesca durante todo o ano com uma grande variedade de espécies do Pacífico.',
    coordinates: {
      lat: 34.0090,
      lng: -118.4973,
    },
    rating: 4.0,
    reviewCount: 207,
    fishTypes: ['Halibut', 'Corvina', 'Mackerel', 'Bonito'],
    bestSeasons: ['Primavera', 'Verão'],
    photos: [
      'https://images.unsplash.com/photo-1506404214625-2e27c4f38e93',
      'https://images.unsplash.com/photo-1504713215707-76349756c6c5',
    ]
  },
  {
    id: 'spot10',
    name: 'Cachoeira do Caracol',
    country: 'Brasil',
    region: 'Sul',
    type: 'waterfall',
    description: 'Além da beleza natural, a região da Cachoeira do Caracol oferece excelente pesca de trutas nos córregos e rios próximos.',
    coordinates: {
      lat: -29.3108,
      lng: -50.8308,
    },
    rating: 4.4,
    reviewCount: 76,
    fishTypes: ['Truta', 'Lambari', 'Jundiá'],
    bestSeasons: ['Abril', 'Maio', 'Setembro', 'Outubro'],
    photos: [
      'https://images.unsplash.com/photo-1564674116568-e647d261c69e',
      'https://images.unsplash.com/photo-1461301214746-1e109215d6d3',
    ]
  },
  {
    id: 'spot11',
    name: 'Delta do Parnaíba',
    country: 'Brasil',
    region: 'Nordeste',
    type: 'river',
    description: 'O Delta do Parnaíba é um paraíso para pescadores, com uma rica biodiversidade e excelentes condições para pesca esportiva.',
    coordinates: {
      lat: -2.7519,
      lng: -41.8256,
    },
    rating: 4.7,
    reviewCount: 93,
    fishTypes: ['Robalo', 'Pescada', 'Tainha', 'Camurim'],
    bestSeasons: ['Julho', 'Agosto', 'Setembro'],
    photos: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
      'https://images.unsplash.com/photo-1530124566582-a618bc2615dc',
    ]
  },
  {
    id: 'spot12',
    name: 'Barragem de Alqueva',
    country: 'Portugal',
    region: 'Algarve',
    type: 'dam',
    description: 'A Barragem de Alqueva é o maior lago artificial da Europa e oferece excelentes condições para pesca de achigã, carpa e outras espécies.',
    coordinates: {
      lat: 38.1997,
      lng: -7.4931,
    },
    rating: 4.8,
    reviewCount: 105,
    fishTypes: ['Achigã', 'Carpa', 'Lúcio', 'Pimpão'],
    bestSeasons: ['Primavera', 'Outono'],
    photos: [
      'https://images.unsplash.com/photo-1611505908502-5b67e53e3a76',
      'https://images.unsplash.com/photo-1520262494112-9fe481d36ec3',
    ]
  }
];
