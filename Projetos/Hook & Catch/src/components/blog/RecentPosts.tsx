
import React from 'react';
import { Calendar, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { allBlogPosts } from '../../data/blogPosts';

// Get posts 4-7 as recent posts
const recentPosts = allBlogPosts.slice(3, 7);

const RecentPosts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-fishing-900">Artigos Recentes</h2>
          <Link to="/blog/todos" className="text-fishing-600 hover:text-fishing-800 font-medium">
            Ver todos
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <span className="text-xs font-medium text-fishing-600 bg-fishing-50 px-2 py-1 rounded-full inline-block mb-2">
                  {post.category}
                </span>
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-lg font-bold mb-2 text-fishing-900 hover:text-fishing-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageSquare className="h-3 w-3" />
                    <span>{post.commentsCount}</span>
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

export default RecentPosts;
