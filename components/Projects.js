function Projects() {
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

      const element = document.getElementById('proyectos');
      if (element) observer.observe(element);

      return () => observer.disconnect();
    }, []);

    const projects = [
      {
        title: "Sistema CRM Funcional",
        description: "Desarrollo de un sistema completo de gestión de relaciones con clientes, incluyendo seguimiento de leads, gestión de contactos y análisis de ventas.",
        technologies: ["Python", "JavaScript", "MondongoDB", "React","HTML/CSS"],
        icon: "users",
        color: "from-blue-500 to-purple-600",
        features: ["Gestión de contactos", "Dashboard analítico", "Reportes automatizados"],
        hasLink: true,
        link: "https://estefania15.github.io/CRMtech",
        linkText: "Ver Sistema CRM"
      },
      {
        title: "Sistema ERP Empresarial",
        description: "Creación y dirección de un sistema integral de planificación de recursos empresariales que optimiza procesos de inventario, finanzas, recursos humanos y operaciones.",
        technologies: ["Python", "Javascrpt", "MondongoDB", "React","HTML/CSS"],
        icon: "building",
        color: "from-purple-500 to-pink-600",
        features: ["Gestión de inventario", "Control financiero", "Recursos humanos", "Reportes ejecutivos"],
        hasLink: true,
        linkText: "Ver Sistema ERP",
        link: "https://er-ptest-estefanias-projects-3ecf5e82.vercel.app/"
      },
      {
        title: "Robot Recolector Arduino",
        description: "Diseño e implementación de un robot autónomo capaz de recolectar objetos utilizando sensores y algoritmos de navegación inteligente.",
        technologies: ["Arduino", "C++", "Sensores infrarrojos", "Electrónica"],
        icon: "cpu",
        color: "from-green-500 to-teal-600",
        features: ["Navegación autónoma", "Detección de objetos","Senoser Laser","Control remoto"],
        hasLink: false
      },
      {
        title: "Simulación de Redes",
        description: "Configuración y simulación de redes complejas utilizando Cisco Packet Tracer, implementando protocolos de enrutamiento y seguridad.",
        technologies: ["Packet Tracer", "Networking", "Cisco", "Protocolos"],
        icon: "network",
        color: "from-orange-500 to-red-600",
        features: ["Configuración VLAN", "Protocolos de enrutamiento", "Seguridad de red"],
        hasLink: false
      }
    ];

    return (
      <section id="proyectos" className="py-20 bg-white" data-name="projects" data-file="components/Projects.js">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
              Proyectos Destacados
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] mx-auto mb-16"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden card-hover group">
                  {/* Header del proyecto */}
                  <div className={`h-32 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`icon-${project.icon} text-4xl text-white`}></div>
                    </div>
                    {/* Elementos decorativos */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white bg-opacity-20 rounded-full"></div>
                    <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white bg-opacity-15 rounded-full"></div>
                  </div>

                  {/* Contenido del proyecto */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{project.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{project.description}</p>
                    
                    {/* Características */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Características:</h4>
                      <ul className="text-xs text-[var(--text-secondary)] space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <div className="icon-check text-green-500 text-sm"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>

{/* Botón de enlace si está disponible */}
{project.hasLink && project.link && (
  <div className="pt-4 border-t border-gray-100">
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
    >
      <div className="icon-external-link text-sm"></div>
      {project.linkText}
    </a>
  </div>
)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}
