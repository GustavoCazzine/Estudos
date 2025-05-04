
import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BlogCategories from '../components/blog/BlogCategories';
import BlogNewsletter from '../components/blog/BlogNewsletter';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { allBlogPosts } from '../data/blogPosts';

const POSTS_PER_PAGE = 6;

const BlogAllPosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allBlogPosts.length / POSTS_PER_PAGE);
  
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = allBlogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Todos os Artigos | Hook & Catch';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-fishing-800 py-12 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1498125723885-933a0abbe39f?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Todos os Artigos</h1>
            <p className="text-fishing-100 max-w-2xl mx-auto">
              Explore nossa coleção completa de artigos sobre pesca, equipamentos, técnicas e muito mais.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="text-sm font-medium text-fishing-600 bg-fishing-50 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <Link to={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-bold mb-3 text-fishing-900 hover:text-fishing-600 transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{post.commentsCount} comentários</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {totalPages > 1 && (
                <Pagination className="mt-10">
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious onClick={() => paginate(currentPage - 1)} />
                      </PaginationItem>
                    )}
                    
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <PaginationItem key={index}>
                        <PaginationLink 
                          onClick={() => paginate(index + 1)}
                          isActive={currentPage === index + 1}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext onClick={() => paginate(currentPage + 1)} />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              )}
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

export default BlogAllPosts;
