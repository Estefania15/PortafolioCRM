function About() {
  try {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      const element = document.getElementById('sobre-mi');
      if (element) observer.observe(element);

      return () => observer.disconnect();
    }, []);

    const education = [
      {
        institution: "Universidad Simón Bolívar",
        period: "2023 - Actualidad",
        degree: "Tecnología de la Información en los Negocios"
      }
    ];

    const certifications = [
      { name: "Python Programming", icon: "code", description: "Programación avanzada en Python para desarrollo de aplicaciones" },
      { name: "JavaScript Development", icon: "globe", description: "Desarrollo web moderno con JavaScript y frameworks" }, 
      { name: "Cisco Networking", icon: "wifi", description: "Configuración y administración de redes empresariales" },
      { name: "Scrum Methodology", icon: "users", description: "Metodologías ágiles para gestión de proyectos" },
      { name: "SQL Database Management", icon: "database", description: "Gestión y administración de bases de datos relacionales" },
      { name: "Arduino Programming", icon: "cpu", description: "Programación de microcontroladores y sistemas embebidos" }
    ];

    return (
      <section id="sobre-mi" className="py-20 bg-white" data-name="about" data-file="components/About.js">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
              Perfil Profesional
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] mx-auto mb-16"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Descripción personal */}
              <div className="space-y-6">
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  Soy una estudiante entusiasta con habilidades sólidas en programación, análisis de datos y gestión de proyectos. 
                  Mi pasión por la tecnología me impulsa a buscar soluciones innovadoras que generen impacto real en el mundo empresarial.
                </p>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  Me caracterizo por mi capacidad de aprendizaje rápido, pensamiento analítico y habilidades de comunicación, 
                  lo que me permite colaborar efectivamente en equipos multidisciplinarios.
                </p>
              </div>

              {/* Estadísticas */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl card-hover">
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">6+</div>
                  <div className="text-sm text-[var(--text-secondary)] font-medium">Certificaciones</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl card-hover">
                  <div className="text-3xl font-bold text-[var(--secondary-color)] mb-2">4+</div>
                  <div className="text-sm text-[var(--text-secondary)] font-medium">Proyectos</div>
                </div>
              </div>
            </div>

            {/* Educación */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center">Formación Académica</h3>
              {education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 card-hover">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2">{edu.degree}</h4>
                      <p className="text-[var(--text-secondary)] font-medium">{edu.institution}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="inline-block px-4 py-2 bg-[var(--primary-color)] text-white rounded-full text-sm font-medium">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certificaciones */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center">Certificaciones Profesionales</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 card-hover shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center`}>
                        <div className={`icon-${cert.icon} text-xl text-white`}></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[var(--text-primary)] mb-2 text-base">{cert.name}</h4>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{cert.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}