
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BlogHeader from '../components/blog/BlogHeader';
import FeaturedPosts from '../components/blog/FeaturedPosts';
import RecentPosts from '../components/blog/RecentPosts';
import BlogCategories from '../components/blog/BlogCategories';
import BlogNewsletter from '../components/blog/BlogNewsletter';

const Blog = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Blog | Hook & Catch';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <BlogHeader />
        <FeaturedPosts />
        <RecentPosts />
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {/* Espaço para conteúdo adicional do blog */}
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

export default Blog;
