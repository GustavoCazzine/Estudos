
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Tag, Clock, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

// Mock blog posts data - in a real application, this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: "10 Dicas para Manter suas Sobrancelhas Perfeitas em Casa",
    excerpt: "Aprenda como cuidar das suas sobrancelhas entre as visitas ao salão com essas dicas simples e eficazes...",
    category: "Cuidados",
    author: "Ana Silva",
    date: "10 Jun 2023",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1506112573664-1a1b58c9b66b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true,
    tags: ["sobrancelhas", "cuidados em casa", "beleza natural"]
  },
  {
    id: 2,
    title: "A Evolução dos Cílios Postiços: Das Celebridades para o Dia a Dia",
    excerpt: "Entenda como os cílios postiços saíram das passarelas e se tornaram um item essencial na maquiagem diária...",
    category: "Tendências",
    author: "Carla Mendes",
    date: "02 Mai 2023",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1588778272105-1ff4b47d3b75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false,
    tags: ["cílios", "tendências", "história da beleza"]
  },
  {
    id: 3,
    title: "Como Escolher o Design de Sobrancelhas Ideal para Seu Formato de Rosto",
    excerpt: "Descubra qual formato de sobrancelha valoriza os seus traços naturais e harmoniza seu rosto...",
    category: "Design",
    author: "Paula Oliveira",
    date: "15 Abr 2023",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false,
    tags: ["design de sobrancelhas", "formato de rosto", "harmonização facial"]
  },
  {
    id: 4,
    title: "Extensão de Cílios: Mitos e Verdades que Você Precisa Saber",
    excerpt: "Esclarecemos as principais dúvidas e derrubamos mitos sobre a técnica que revolucionou o olhar...",
    category: "Informativo",
    author: "Juliana Costa",
    date: "28 Mar 2023",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1579612801570-a7c09be9fbf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true,
    tags: ["extensão de cílios", "mitos e verdades", "cuidados"]
  },
  {
    id: 5,
    title: "Sobrancelhas e Cílios: Como Esses Detalhes Transformam sua Expressão",
    excerpt: "Entenda como pequenas mudanças no enquadramento do olhar podem renovar completamente sua aparência...",
    category: "Transformação",
    author: "Mariana Santos",
    date: "05 Fev 2023",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1542833807-e04dcad8e563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false,
    tags: ["expressão facial", "transformação", "autoestima"]
  },
  {
    id: 6,
    title: "Tendências de Beleza para 2023: O que Esperar para Sobrancelhas e Cílios",
    excerpt: "As principais tendências que prometem dominar o mundo da beleza neste ano, com foco no olhar...",
    category: "Tendências",
    author: "Fernanda Lima",
    date: "10 Jan 2023",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false,
    tags: ["tendências 2023", "previsões", "moda e beleza"]
  }
];

// Popular categories
const categories = [
  "Cuidados",
  "Tendências",
  "Design",
  "Informativo",
  "Transformação",
  "Tutoriais",
  "Eventos",
  "Curiosidades"
];

// Popular tags
const popularTags = [
  "sobrancelhas", "cílios", "beauty", "designdesobrancelhas", "extensãodecílios",
  "tendências", "cuidadosemcasa", "belezanatural", "henna", "microblading"
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMobile = useIsMobile();
  const [searchTerm, setSearchTerm] = useState("");
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className={`${isMobile ? 'pt-20' : 'pt-24'} pb-16`}>
      {/* Hero Section with SEO-optimized headings */}
      <section className="bg-salon-pink/10 py-12 md:py-24">
        <div className="container-salon">
          <div className="text-center max-w-3xl mx-auto px-4">
            <span className="inline-block bg-salon-pink/50 text-salon-dark-text px-4 py-1 rounded-full text-sm font-medium mb-4 fade-in-up">
              Blog
            </span>
            <h1 className="text-3xl md:text-5xl font-playfair font-bold mb-4 md:mb-6 fade-in-up delay-100">
              Dicas e Tendências de Beleza
            </h1>
            <p className="text-base md:text-lg text-salon-light-text mb-8 fade-in-up delay-200">
              Informações, tendências e cuidados para manter suas sobrancelhas e cílios sempre impecáveis.
              Conteúdo exclusivo criado por especialistas em beleza.
            </p>
            
            {/* Search bar optimized for mobile */}
            <div className="relative max-w-lg mx-auto fade-in-up delay-300">
              <div className="flex items-center border border-salon-gold/30 rounded-full bg-white overflow-hidden shadow-sm">
                <div className="pl-4">
                  <Search className="h-5 w-5 text-salon-light-text" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar artigos, dicas e tutoriais..."
                  className="w-full py-3 px-4 text-salon-dark-text focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-10 md:py-16">
        <div className="container-salon">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-8 px-4">Em Destaque</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 px-4">
            {featuredPosts.map(post => (
              <div key={post.id} className="bg-white rounded-xl shadow-salon overflow-hidden hover:shadow-salon-hover transition-shadow group">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-salon-pink text-salon-dark-text text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-salon-light-text mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-playfair font-bold mb-3 group-hover:text-salon-gold transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-salon-light-text mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-salon-cream px-2 py-1 rounded-full text-salon-light-text">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="flex items-center text-salon-gold font-medium hover:text-salon-terracota transition-colors"
                  >
                    Ler mais
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles + Sidebar */}
      <section className="py-10 md:py-16 bg-salon-cream/30">
        <div className="container-salon">
          <div className="flex flex-col lg:flex-row gap-8 px-4">
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-8">Artigos Recentes</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {regularPosts.map(post => (
                  <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-salon transition-shadow group">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-salon-pink text-salon-dark-text text-xs font-medium px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center text-xs text-salon-light-text mb-2 space-x-3">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-playfair font-bold mb-2 group-hover:text-salon-gold transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-sm text-salon-light-text mb-3">{post.excerpt}</p>
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="flex items-center text-sm text-salon-gold font-medium hover:text-salon-terracota transition-colors"
                      >
                        Ler mais
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Load More Button */}
              <div className="mt-10 text-center">
                <button className="btn-secondary">Carregar mais artigos</button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-1/3 space-y-8">
              {/* Categories */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-playfair font-bold mb-4">Categorias</h3>
                <ul className="space-y-2">
                  {categories.map((category, idx) => (
                    <li key={idx}>
                      <Link 
                        to={`/blog/category/${category.toLowerCase()}`}
                        className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-salon-cream transition-colors"
                      >
                        <span>{category}</span>
                        <span className="bg-salon-cream w-7 h-7 rounded-full flex items-center justify-center text-sm">
                          {idx + 2}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Popular Tags */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-playfair font-bold mb-4">Tags Populares</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, idx) => (
                    <Link 
                      key={idx}
                      to={`/blog/tag/${tag.toLowerCase()}`}
                      className="text-sm bg-salon-cream px-3 py-1 rounded-full text-salon-light-text hover:bg-salon-pink/20 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="bg-salon-pink/10 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-playfair font-bold mb-3">Fique por dentro</h3>
                <p className="text-salon-light-text mb-4">Receba as últimas tendências e dicas de beleza diretamente no seu email</p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Seu melhor email" 
                    className="w-full px-4 py-2 rounded-lg border border-salon-gold/30 focus:outline-none focus:ring-2 focus:ring-salon-gold/30"
                    required
                  />
                  <button type="submit" className="w-full btn-primary">
                    Inscrever-se
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Topics Section */}
      <section className="py-10 md:py-16">
        <div className="container-salon px-4">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-3 text-center">Tópicos Populares</h2>
          <p className="text-salon-light-text text-center max-w-2xl mx-auto mb-10">
            Explore nossos conteúdos organizados por temas específicos para encontrar exatamente o que você procura
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <TopicCard 
              title="Cuidados com Sobrancelhas" 
              count="12 artigos"
              icon="✨"
              color="bg-[#FFE9E4]"
            />
            <TopicCard 
              title="Extensão de Cílios" 
              count="9 artigos"
              icon="👁️"
              color="bg-[#E6F2FF]"
            />
            <TopicCard 
              title="Tendências de Design" 
              count="7 artigos"
              icon="🔍"
              color="bg-[#FFF5E1]"
            />
            <TopicCard 
              title="Cursos e Workshops" 
              count="5 artigos"
              icon="🎓"
              color="bg-[#E6FFE9]"
            />
            <TopicCard 
              title="Produtos Recomendados" 
              count="8 artigos"
              icon="🛍️"
              color="bg-[#F5E1FF]"
            />
            <TopicCard 
              title="Tutoriais Passo a Passo" 
              count="11 artigos"
              icon="📝"
              color="bg-[#E1FAFF]"
            />
            <TopicCard 
              title="Eventos e Novidades" 
              count="6 artigos"
              icon="📅"
              color="bg-[#FFE1E1]"
            />
            <TopicCard 
              title="Histórias de Sucesso" 
              count="4 artigos"
              icon="🌟"
              color="bg-[#E1FFE9]"
            />
          </div>
        </div>
      </section>
      
      {/* SEO Footer */}
      <section className="py-8 bg-salon-cream/50">
        <div className="container-salon px-4">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-playfair font-bold mb-4">Explore Nosso Blog de Beleza</h2>
            <p className="text-salon-light-text mb-6 max-w-3xl mx-auto">
              No Blog Natural Beauty Space, você encontra tudo sobre design de sobrancelhas, extensão de cílios, 
              tendências de beleza, tutoriais e dicas profissionais para realçar sua beleza natural.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 text-sm text-salon-light-text">
              <Link to="/blog/sobrancelhas" className="hover:text-salon-gold transition-colors">Sobrancelhas</Link>
              <span>•</span>
              <Link to="/blog/cilios" className="hover:text-salon-gold transition-colors">Cílios</Link>
              <span>•</span>
              <Link to="/blog/tendencias" className="hover:text-salon-gold transition-colors">Tendências</Link>
              <span>•</span>
              <Link to="/blog/tutoriais" className="hover:text-salon-gold transition-colors">Tutoriais</Link>
              <span>•</span>
              <Link to="/blog/produtos" className="hover:text-salon-gold transition-colors">Produtos</Link>
              <span>•</span>
              <Link to="/blog/cursos" className="hover:text-salon-gold transition-colors">Cursos</Link>
              <span>•</span>
              <Link to="/blog/eventos" className="hover:text-salon-gold transition-colors">Eventos</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Topic Card Component
const TopicCard = ({ title, count, icon, color }) => (
  <Link to={`/blog/topic/${title.toLowerCase().replace(/\s+/g, '-')}`} className="block">
    <div className={`${color} p-5 rounded-xl transition-all hover:shadow-md hover:-translate-y-1 text-center`}>
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-medium text-salon-dark-text mb-1">{title}</h3>
      <p className="text-sm text-salon-light-text">{count}</p>
    </div>
  </Link>
);

export default Blog;
