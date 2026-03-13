/* ============================================
   WALNUT BREWERY — Interações & Animações
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Lucide Icons ----------
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // ---------- Intersection Observer — Fade-in ao scroll ----------
  const fadeElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.15
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach((el, index) => {
    // Stagger delay for cards in the grid
    if (el.classList.contains('beer-card')) {
      el.style.transitionDelay = `${index * 0.1}s`;
    }
    fadeObserver.observe(el);
  });

  // ---------- Navbar — Mostrar após sair do hero ----------
  const navbar = document.getElementById('navbar');
  const hero = document.querySelector('.hero');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        navbar.classList.add('show');
      } else {
        navbar.classList.remove('show');
      }
    });
  }, { threshold: 0.1 });

  if (hero) {
    navObserver.observe(hero);
  }

  // ---------- Smooth scroll para links internos ----------
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---------- Parallax sutil na logo do Hero ----------
  const heroLogo = document.querySelector('.hero-logo');

  if (heroLogo) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroHeight = hero ? hero.offsetHeight : 800;

      if (scrollY < heroHeight) {
        const progress = scrollY / heroHeight;
        heroLogo.style.transform = `translateY(${scrollY * 0.3}px) scale(${1 - progress * 0.15})`;
        heroLogo.style.opacity = 1 - progress * 0.8;
      }
    }, { passive: true });
  }

});
