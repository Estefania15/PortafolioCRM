// Utilidades de animación para el portafolio

const AnimationUtils = {
  // Función para animar elementos al hacer scroll
  observeElements: (selector, callback, options = {}) => {
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry.target, true);
        }
      });
    }, defaultOptions);

    const elements = document.querySelectorAll(selector);
    elements.forEach(element => observer.observe(element));

    return observer;
  },

  // Función para scroll suave a una sección
  smoothScrollTo: (targetId, offset = 0) => {
    const element = document.getElementById(targetId);
    if (element) {
      const targetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  },

  // Función para agregar clase con delay
  addClassWithDelay: (element, className, delay = 0) => {
    setTimeout(() => {
      element.classList.add(className);
    }, delay);
  },

  // Función para crear efecto de escritura
  typeWriter: (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    
    function typing() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    }
    
    typing();
  },

  // Función para animar contadores
  animateCounter: (element, start, end, duration = 2000) => {
    const startTime = performance.now();
    const difference = end - start;

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const current = Math.floor(start + (difference * progress));
      element.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }
};

// Exportar para uso global
window.AnimationUtils = AnimationUtils;