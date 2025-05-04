
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BlogCategories from '../components/blog/BlogCategories';
import BlogNewsletter from '../components/blog/BlogNewsletter';
import { Card } from '@/components/ui/card';
import { Calendar, MessageSquare } from 'lucide-react';
import { allBlogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = allBlogPosts.find(post => post.slug === slug);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = post ? `${post.title} | Hook & Catch` : 'Artigo | Hook & Catch';
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <div className="container mx-auto px-4 py-16">
            <Card className="p-8 text-center">
              <h1 className="text-2xl font-bold text-fishing-900 mb-4">Artigo não encontrado</h1>
              <p className="text-gray-600">O artigo que você está procurando não existe ou foi removido.</p>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div 
          className="bg-fishing-800 relative py-20 overflow-hidden"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url('${post.imageUrl}')` }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <span className="text-sm font-medium text-fishing-300 bg-fishing-800/50 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">{post.title}</h1>
            <div className="flex items-center space-x-4 text-fishing-100">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageSquare className="h-4 w-4" />
                <span>{post.commentsCount} comentários</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="p-6 md:p-8">
                <div className="aspect-video overflow-hidden rounded-md mb-8">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="prose max-w-none">
                  <p className="text-gray-700 text-lg mb-6">{post.excerpt}</p>
                  
                  <h2 className="text-2xl font-bold text-fishing-900 mb-4">Sobre {post.title}</h2>
                  <p className="text-gray-700 mb-4">
                    {post.content || `Este é um artigo detalhado sobre ${post.title}. Aqui você encontrará informações valiosas, 
                    dicas práticas e conhecimento para melhorar suas habilidades de pesca.`}
                  </p>
                  
                  <p className="text-gray-700 mb-4">
                    A pesca não é apenas um hobby, mas uma tradição que conecta gerações e nos aproxima da natureza.
                    Seja você um iniciante curioso ou um pescador experiente, há sempre algo novo para aprender.
                  </p>
                  
                  <h3 className="text-xl font-bold text-fishing-900 mb-3">Principais Pontos</h3>
                  <ul className="list-disc pl-6 mb-6">
                    <li className="text-gray-700 mb-2">Compreender o comportamento dos peixes e seus habitats</li>
                    <li className="text-gray-700 mb-2">Escolher o equipamento adequado para cada tipo de pescaria</li>
                    <li className="text-gray-700 mb-2">Técnicas de arremesso e recuperação para melhores resultados</li>
                    <li className="text-gray-700 mb-2">Práticas de conservação para garantir a sustentabilidade</li>
                  </ul>
                  
                  <p className="text-gray-700 italic">
                    "A paciência é a virtude de todo bom pescador. A natureza tem seu próprio tempo, e aprender a respeitá-lo
                    é parte essencial da arte da pesca." - Pescador anônimo
                  </p>
                </div>
              </Card>
            </div>
            <div className="md:col-span-1">
              <BlogCategories />
            </div>
          </div>
        </div>
        <BlogNewsletter />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
