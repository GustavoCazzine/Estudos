
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogAllPosts from "./pages/BlogAllPosts";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./hooks/useCart";
import { AuthProvider } from "./hooks/useAuth";
import { FavoritesProvider } from "./hooks/useFavorites";
import ProductDetail from "./pages/ProductDetail";
import UserProfile from "./pages/UserProfile";
import Checkout from "./pages/Checkout";
import LegalPolicies from "./pages/LegalPolicies";
import FishingMap from "./pages/FishingMap";
import FishingCommunity from "./pages/FishingCommunity";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <FavoritesProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/events" element={<Events />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:slug" element={<ProductDetail />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/blog/todos" element={<BlogAllPosts />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/terms" element={<LegalPolicies />} />
                <Route path="/privacy" element={<LegalPolicies />} />
                <Route path="/refund-policy" element={<LegalPolicies />} />
                <Route path="/cookies" element={<LegalPolicies />} />
                <Route path="/fishing-map" element={<FishingMap />} />
                <Route path="/community" element={<FishingCommunity />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/shipping" element={<LegalPolicies />} />
                <Route path="/warranty" element={<LegalPolicies />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </FavoritesProvider>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
