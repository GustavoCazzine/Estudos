
import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedServices from '../components/home/FeaturedServices';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CommunityPreview from '../components/home/CommunityPreview';
import QuizSection from '../components/home/QuizSection';
import PromotionBanner from '../components/home/PromotionBanner';
import ReferralProgram from '../components/home/ReferralProgram';
import InstagramFeed from '../components/home/InstagramFeed';
import CallToAction from '../components/home/CallToAction';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="min-h-screen">
        <Hero />
        <FeaturedServices />
        <WhyChooseUs />
        <QuizSection />
        <CommunityPreview />
        <PromotionBanner />
        <Testimonials />
        <ReferralProgram />
        <InstagramFeed />
        <CallToAction />
      </div>
    </>
  );
};

export default Index;
