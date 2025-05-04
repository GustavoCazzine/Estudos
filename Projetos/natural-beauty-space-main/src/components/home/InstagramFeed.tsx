
const InstagramFeed = () => {
  return (
    <section className="section-padding bg-salon-beige/50">
      <div className="container-salon">
        <div className="text-center mb-16">
          <span className="inline-block bg-salon-pink/30 text-salon-dark-text px-4 py-1 rounded-full text-sm font-medium mb-4">
            Instagram
          </span>
          <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-4">
            Siga-nos no Instagram
          </h2>
          <div className="w-24 h-1 bg-salon-dourado-claro mx-auto mb-6"></div>
          <p className="text-salon-light-text max-w-2xl mx-auto">
            Acompanhe nosso trabalho, veja transformações reais e fique por dentro das novidades e promoções.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[1, 2, 3, 4].map((item) => (
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              key={item}
              className="group relative overflow-hidden rounded-lg aspect-square hover-shine shadow-salon"
            >
              <img 
                src={`https://source.unsplash.com/random/600x600?eyelashes,eyebrows&sig=${item}`} 
                alt="Instagram post" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center text-lg shadow-md">
                {item % 2 === 0 ? '✨' : '👁️'}
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-salon-dourado-claro hover:text-salon-terracota transition-colors font-medium"
          >
            <span className="mr-2">@naturalbeautyspace</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
