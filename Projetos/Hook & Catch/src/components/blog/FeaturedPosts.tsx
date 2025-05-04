
import React from 'react';
import { Calendar, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { allBlogPosts } from '../../data/blogPosts';

// Get the first 3 posts as featured posts
const featuredPosts = allBlogPosts.slice(0, 3);

const FeaturedPosts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-fishing-900">Artigos em Destaque</h2>
          <Link to="/blog/todos" className="text-fishing-600 hover:text-fishing-800 font-medium">
            Ver todos
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
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
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
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
      </div>
    </section>
  );
};

export default FeaturedPosts;
