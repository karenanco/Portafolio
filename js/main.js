
const EMAILJS_CONFIG = {
  publicKey: 'm062kPwL_MQgVVeCi',        // Ej: "abc123def456"
  serviceID: 'service_3s2ce1g',       // Ej: "service_abc123"
  templateID: 'template_ggyznhe',     // Ej: "template_abc123"
};

document.addEventListener('DOMContentLoaded', () => {

  // --- Inicializar EmailJS ---
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }

  // --- Mobile Menu Toggle ---
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
    const icon = menuToggle.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    }
  });

  // Close mobile menu on link click
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      const icon = menuToggle?.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });

  // --- Smooth Scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Contact Form via EmailJS ---
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  form?.addEventListener('submit', e => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Enviando...';
    btn.disabled = true;
    formStatus.classList.add('hidden');

    const templateParams = {
      from_name: form.name.value.trim(),
      from_email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    emailjs.send(EMAILJS_CONFIG.serviceID, EMAILJS_CONFIG.templateID, templateParams)
      .then(() => {
        formStatus.className = 'text-center text-sm text-green-400';
        formStatus.textContent = '¡Mensaje enviado con éxito! Te responderé pronto.';
        formStatus.classList.remove('hidden');
        form.reset();
      })
      .catch(() => {
        formStatus.className = 'text-center text-sm text-red-400';
        formStatus.textContent = 'Hubo un error al enviar. Por favor, intenta de nuevo o escríbeme directamente al correo.';
        formStatus.classList.remove('hidden');
      })
      .finally(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
      });
  });

  // --- Intersection Observer for fade-in animations ---
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
  });

});
