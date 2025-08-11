function Navigation() {
  try {
    const [activeSection, setActiveSection] = React.useState('inicio');
    const [isExpanded, setIsExpanded] = React.useState(false);
    const [isMinimized, setIsMinimized] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        const sections = ['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'contacto'];
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
            }
          }
        });
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const navItems = [
      { id: 'inicio', label: 'Inicio', icon: 'home' },
      { id: 'sobre-mi', label: 'Perfil', icon: 'user' },
      { id: 'habilidades', label: 'Habilidades', icon: 'cpu' },
      { id: 'proyectos', label: 'Proyectos', icon: 'briefcase' },
      { id: 'contacto', label: 'Contacto', icon: 'mail' }
    ];

    if (isMinimized) {
      return (
        <div className="fixed top-6 right-6 z-50">
          <button
            onClick={() => setIsMinimized(false)}
            className="w-12 h-12 floating-nav rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <div className="icon-menu text-[var(--primary-color)] text-xl"></div>
          </button>
        </div>
      );
    }

    return (
      <nav className="fixed top-6 right-6 z-50 floating-nav rounded-2xl shadow-lg overflow-hidden" data-name="navigation" data-file="components/Navigation.js">
        {/* Header con botones de control */}
        <div className="flex items-center justify-between p-3 border-b border-gray-200">
          <span className="text-sm font-medium text-[var(--text-primary)]">Navegación</span>
          <div className="flex gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-6 h-6 rounded hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <div className={`icon-${isExpanded ? 'chevron-up' : 'chevron-down'} text-sm text-[var(--text-secondary)]`}></div>
            </button>
            <button
              onClick={() => setIsMinimized(true)}
              className="w-6 h-6 rounded hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <div className="icon-minus text-sm text-[var(--text-secondary)]"></div>
            </button>
          </div>
        </div>

        {/* Items de navegación */}
        <div className={`transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
          <div className="p-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium mb-1 ${
                  activeSection === item.id 
                    ? 'bg-[var(--primary-color)] text-white shadow-md' 
                    : 'text-[var(--text-primary)] hover:bg-gray-100'
                }`}
              >
                <div className={`icon-${item.icon} text-lg`}></div>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navigation component error:', error);
    return null;
  }
}
