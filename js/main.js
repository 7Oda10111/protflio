const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');
const heroSection = document.querySelector('#home');
const revealElements = document.querySelectorAll('.reveal');


navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});
window.addEventListener('scroll', () => {
  const heroHeight = heroSection.offsetHeight;

  if (window.scrollY >= heroHeight - 60) {
    navbar.classList.add('scroll');
  } else {
    navbar.classList.remove('scroll');
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.15 
});

revealElements.forEach(el => {
  revealObserver.observe(el);
});

particlesJS('particles-js', {
  particles: {
    number: { value: 60 },
    color: { value: '#2eb780' },
    shape: { type: 'circle' },
    opacity: { value: 0.4 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#2eb780',
      opacity: 0.3,
      width: 1
    },
    move: { enable: true, speed: 1.5 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: 'grab' }
    }
  }
});
const heroImage = document.querySelector('#home'); 

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;

  heroImage.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;
});
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});


const hoverElements = document.querySelectorAll('a, button, .socail-icon, .project-card');
hoverElements.forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});