
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ImageProvider } from "./context/ImageContext";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cancellation from "./pages/Cancellation";
import Cookies from "./pages/Cookies";
import ImageManagement from "./pages/ImageManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ImageProvider>
        <BrowserRouter>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cancellation" element={<Cancellation />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/images" element={<ImageManagement />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </TooltipProvider>
        </BrowserRouter>
      </ImageProvider>
    </QueryClientProvider>
  );
};

export default App;
