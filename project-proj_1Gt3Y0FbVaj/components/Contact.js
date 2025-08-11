function Contact() {
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

      const element = document.getElementById('contacto');
      if (element) observer.observe(element);

      return () => observer.disconnect();
    }, []);

    const contactInfo = [
      {
        icon: 'mail',
        label: 'Email',
        value: 'estefcruz15@gmail.com',
        link: 'mailto:estefcruz15@gmail.com'
      },
      {
        icon: 'phone',
        label: 'Teléfono',
        value: '5540826509',
        link: 'tel:5540826509'
      },
      {
        icon: 'map-pin',
        label: 'Ubicación',
        value: 'Ciudad de México',
        link: null
      }
    ];

    const socialLinks = [
      {
        name: 'LinkedIn',
        icon: 'linkedin',
        url: '#',
        color: 'from-blue-600 to-blue-700'
      },
      {
        name: 'GitHub',
        icon: 'github',
        url: '#',
        color: 'from-gray-700 to-gray-800'
      }
    ];

    return (
      <section id="contacto" className="py-20 gradient-bg" data-name="contact" data-file="components/Contact.js">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
              Contacto
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-16"></div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Información de contacto */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-6">¿Te gustaría colaborar?</h3>
                <p className="text-white opacity-90 text-lg leading-relaxed">
                  Estoy disponible para explorar nuevas oportunidades profesionales y colaboraciones estratégicas.  
                  No dudes en contactarme para discutir proyectos o propuestas de valor compartido.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-white bg-opacity-20 flex items-center justify-center">
                        <div className={`icon-${info.icon} text-xl text-white`}></div>
                      </div>
                      <div>
                        <p className="text-white opacity-75 text-sm">{info.label}</p>
                        {info.link ? (
                          <a href={info.link} className="text-white font-medium text-lg hover:opacity-75 transition-opacity">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium text-lg">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enlaces sociales */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-6">Sígueme</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center gap-4 p-4 bg-white bg-opacity-10 rounded-2xl hover:bg-opacity-20 transition-all duration-300 card-hover"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${social.color} flex items-center justify-center`}>
                        <div className={`icon-${social.icon} text-xl text-white`}></div>
                      </div>
                      <span className="text-white font-medium text-lg">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}