
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-salon-pink/10 py-16">
      <div className="text-center max-w-md px-4">
        <h1 className="text-5xl font-playfair font-bold mb-4 text-salon-gold">404</h1>
        <p className="text-2xl text-salon-dark-text mb-6">Ops! Página não encontrada</p>
        <p className="text-salon-light-text mb-8">
          A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center justify-center">
          Voltar para Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
