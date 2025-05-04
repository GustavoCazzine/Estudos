
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import ProductCategories from '../components/home/ProductCategories';
import BestSellers from '../components/home/BestSellers';
import Newsletter from '../components/home/Newsletter';
import SecurityBadges from '../components/home/SecurityBadges';
import CommunityFeatures from '../components/home/CommunityFeatures';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Hook & Catch - Equipamentos Premium para Pesca';
    
    // Adicionar classe de transição de página ao body
    document.body.classList.add('page-transition-in');
    
    return () => {
      document.body.classList.remove('page-transition-in');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductCategories />
        <BestSellers />
        <SecurityBadges />
        <CommunityFeatures />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
