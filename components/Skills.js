function Skills() {
  try {
    const [isVisible, setIsVisible] = React.useState(false);
    const [animatedBars, setAnimatedBars] = React.useState(false);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(() => setAnimatedBars(true), 500);
          }
        },
        { threshold: 0.1 }
      );

      const element = document.getElementById('habilidades');
      if (element) observer.observe(element);

      return () => observer.disconnect();
    }, []);

    const technicalSkills = [
      { name: 'Python', level: 85, color: 'from-blue-500 to-blue-600' },
      { name: 'JavaScript', level: 80, color: 'from-yellow-500 to-yellow-600' },
      { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-red-500' },
      { name: 'SQL', level: 75, color: 'from-green-500 to-green-600' },
      { name: 'C Programming', level: 70, color: 'from-purple-500 to-purple-600' },
      { name: 'Arduino', level: 80, color: 'from-teal-500 to-teal-600' }
    ];

    const tools = [
      { name: 'Git', icon: 'git-branch' },
      { name: 'VS Code', icon: 'code' },
      { name: 'ProjectLibre', icon: 'calendar' },
      { name: 'Packet Tracer', icon: 'network' }
    ];

    const softSkills = [
      { 
        name: 'Comunicación Efectiva', 
        icon: 'message-circle', 
        description: 'Habilidad excepcional para transmitir ideas complejas de manera clara y comprensible, facilitando la colaboración en equipos multidisciplinarios y la presentación de resultados técnicos a audiencias diversas.'
      },
      { 
        name: 'Liderazgo Colaborativo', 
        icon: 'users', 
        description: 'Capacidad demostrada para guiar y motivar equipos de trabajo, fomentando un ambiente de colaboración y crecimiento mutuo mientras se alcanzan objetivos organizacionales.'
      },
      { 
        name: 'Pensamiento Crítico', 
        icon: 'brain', 
        description: 'Análisis profundo y sistemático de problemas complejos, evaluando múltiples perspectivas para desarrollar soluciones innovadoras y efectivas en entornos tecnológicos.'
      },
      { 
        name: 'Adaptabilidad Tecnológica', 
        icon: 'refresh-cw', 
        description: 'Flexibilidad excepcional para adaptarse rápidamente a nuevas tecnologías, metodologías y cambios en el entorno empresarial, manteniendo siempre un alto rendimiento.'
      }
    ];

    return (
      <section id="habilidades" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" data-name="skills" data-file="components/Skills.js">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
              Habilidades
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] mx-auto mb-16"></div>

            {/* Habilidades Técnicas */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center">Lenguajes de Programación</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-[var(--text-primary)]">{skill.name}</span>
                      <span className="text-sm text-[var(--text-secondary)]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: animatedBars ? `${skill.level}%` : '0%' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Herramientas */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center">Herramientas</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {tools.map((tool, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 text-center card-hover shadow-lg">
                    <div className={`icon-${tool.icon} text-3xl text-[var(--primary-color)] mb-4`}></div>
                    <p className="font-medium text-[var(--text-primary)]">{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Habilidades Blandas */}
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center">Competencias Profesionales</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {softSkills.map((skill, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 card-hover shadow-lg">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--secondary-color)] to-[var(--primary-color)] flex items-center justify-center flex-shrink-0">
                        <div className={`icon-${skill.icon} text-2xl text-white`}></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[var(--text-primary)] mb-3 text-lg">{skill.name}</h4>
                        <p className="text-base text-[var(--text-secondary)] leading-relaxed">{skill.description}</p>
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
    console.error('Skills component error:', error);
    return null;
  }
}