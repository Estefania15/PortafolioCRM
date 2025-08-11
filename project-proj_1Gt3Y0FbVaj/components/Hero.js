function Hero() {
  try {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
      setIsVisible(true);
    }, []);

    return (
      <section id="inicio" className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden" data-name="hero" data-file="components/Hero.js">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white opacity-5 rounded-full"></div>
        </div>

        <div className={`container mx-auto px-6 text-center text-white relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Foto circular con marco animado */}
          <div className="flex justify-center mb-8">
            <div className="profile-image">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Estefania Cruz Muñoz"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Estefania Cruz Muñoz
          </h1>

          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Estudiante de Tecnología de la Información en los Negocios
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-[var(--primary-color)] rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Ver Proyectos
            </button>
            <button 
              onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300"
            >
              Contactar
            </button>
          </div>

          {/* Ubicación */}
          <div className="mt-8 flex items-center justify-center gap-2 opacity-80">
            <div className="icon-map-pin text-lg"></div>
            <span className="text-lg">Ciudad de México</span>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="icon-chevron-down text-white text-2xl opacity-70"></div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}