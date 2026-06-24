// Navigation scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Enhanced typewriter effect
const typewriterText = document.querySelector('.typewriter');
if (typewriterText) {
  const words = ['websites', 'games', 'applications', 'algorithms'];
  let wordIndex = 0;
  let letterIndex = 0;
  let currentWord = '';
  let isDeleting = false;
  
  function typeWriter() {
    const word = words[wordIndex];
    
    if (isDeleting) {
      currentWord = word.substring(0, letterIndex - 1);
      letterIndex--;
    } else {
      currentWord = word.substring(0, letterIndex + 1);
      letterIndex++;
    }
    
    typewriterText.textContent = currentWord;
    
    let typeSpeed = 150;
    
    if (isDeleting) {
      typeSpeed /= 2;
    }
    
    if (!isDeleting && letterIndex === word.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500; // Pause before typing next word
    }
    
    setTimeout(typeWriter, typeSpeed);
  }
  
  // Start the typewriter effect
  setTimeout(typeWriter, 1000);
}

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe sections for animation
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Create backdrop overlay
const backdrop = document.createElement('div');
backdrop.className = 'nav-backdrop';
backdrop.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 9;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;
document.body.appendChild(backdrop);

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    // Show/hide backdrop and prevent scrolling
    if (navMenu.classList.contains('active')) {
      backdrop.style.opacity = '1';
      backdrop.style.visibility = 'visible';
      document.body.style.overflow = 'hidden';
    } else {
      backdrop.style.opacity = '0';
      backdrop.style.visibility = 'hidden';
      document.body.style.overflow = 'auto';
    }
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      backdrop.style.opacity = '0';
      backdrop.style.visibility = 'hidden';
      document.body.style.overflow = 'auto';
    });
  });

  // Close menu when clicking backdrop
  backdrop.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    backdrop.style.opacity = '0';
    backdrop.style.visibility = 'hidden';
    document.body.style.overflow = 'auto';
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      backdrop.style.opacity = '0';
      backdrop.style.visibility = 'hidden';
      document.body.style.overflow = 'auto';
    }
  });
}

// Add loading animation for page
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Parallax effect for hero section (subtle)
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero && window.innerWidth > 768) {
    hero.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('using-keyboard');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('using-keyboard');
});
