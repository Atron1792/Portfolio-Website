
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

// Experience tabs functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and panels
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));
    
    // Add active class to clicked button and corresponding panel
    button.classList.add('active');
    const targetPanel = document.getElementById(button.getAttribute('data-tab'));
    if (targetPanel) {
      targetPanel.classList.add('active');
    }
  });
});

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

// Project Management System
class ProjectManager {
  constructor() {
    this.projects = {
      featured: [
        {
          id: 'winter-express',
          title: 'Winter Express',
          description: 'A strategic management game that fosters critical thinking by challenging players to optimize resource allocation and strategic decision-making. Features a dynamic resource management system that interacts with various game mechanics, enhancing strategic depth and player engagement. Developed during a 24-hour hackathon while contributing to project design and coding aspects.',
          tech: ['Godot', 'GDScript', 'Game Development', 'Team Leadership'],
          github: 'https://github.com/Atron1792/winter-express',
          external: 'https://itch.io/jam/gmtk-game-jam-2024',
          image: '/assets/logo.png',
          year: 2024,
          type: 'featured',
          company: 'Personal Project'
        },
        {
          id: 'caesar-cipher',
          title: 'Caesar Cipher',
          description: 'A robust Caesar Cipher algorithm implementation in Python showcasing strong problem-solving and coding abilities. Demonstrates proficiency in modular programming by creating well-structured and reusable code components. Includes comprehensive error handling mechanisms to ensure graceful handling of unexpected inputs or errors.',
          tech: ['Python', 'Cryptography', 'Algorithm Design', 'Error Handling'],
          github: 'https://github.com/Atron1792/caesar-cipher',
          image: '/assets/logo.png',
          year: 2023,
          type: 'featured',
          company: 'Academic Project'
        },
        {
          id: 'limbo-td',
          title: 'LimboTD',
          description: 'A 2D survival tower defense game that won 2nd place in a 24-hour hackathon. Showcased proficiency in rapid prototyping and time management while contributing effectively to team-based game development. Demonstrated strong learning ability through using the Godot game engine to create and implement engaging game mechanics.',
          tech: ['Godot', 'GDScript', 'Game Design', 'Team Collaboration'],
          github: 'https://github.com/Atron1792/limbo-td',
          external: 'https://itch.io/jam/brackeys-12',
          image: '/assets/logo.png',
          year: 2024,
          type: 'featured',
          company: 'Hackathon Project'
        }
      ],
      archive: [
        {
          id: 'wolflings-pack',
          title: 'Wolflings: Peril of the Pack',
          description: 'A survival adventure game where players control a pack of wolves navigating through dangerous territories.',
          tech: ['Godot', 'GDScript', 'Game Design'],
          github: 'https://github.com/Atron1792/wolflings',
          external: 'https://itch.io/jam/brackeys-11',
          year: 2024,
          type: 'game',
          company: 'Game Jam'
        },
        {
          id: 'change-to-scale',
          title: 'Change to Scale',
          description: 'A puzzle platformer game made for GMTK Game Jam 2024 with scaling mechanics.',
          tech: ['Godot', 'GDScript', 'Platformer'],
          github: 'https://github.com/Atron1792/change-to-scale',
          external: 'https://itch.io/jam/gmtk-game-jam-2024',
          year: 2024,
          type: 'game',
          company: 'Game Jam'
        },
        {
          id: 'combat-harvest',
          title: 'Combat Harvest',
          description: 'An action-packed harvesting game combining combat mechanics with resource management.',
          tech: ['Godot', 'GDScript', 'Action'],
          github: 'https://github.com/Atron1792/combat-harvest',
          year: 2024,
          type: 'game',
          company: 'Personal Project'
        }
      ]
    };
    
    this.initializeArchive();
  }

  // Add new project
  addProject(projectData, category = 'archive') {
    projectData.id = projectData.id || this.generateId(projectData.title);
    this.projects[category].push(projectData);
    this.saveProjects();
    this.updateDisplay();
  }

  // Update existing project
  updateProject(id, updatedData, category = 'archive') {
    const projectIndex = this.projects[category].findIndex(p => p.id === id);
    if (projectIndex !== -1) {
      this.projects[category][projectIndex] = { ...this.projects[category][projectIndex], ...updatedData };
      this.saveProjects();
      this.updateDisplay();
    }
  }

  // Remove project
  removeProject(id, category = 'archive') {
    this.projects[category] = this.projects[category].filter(p => p.id !== id);
    this.saveProjects();
    this.updateDisplay();
  }

  // Generate ID from title
  generateId(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  // Save projects to localStorage
  saveProjects() {
    localStorage.setItem('portfolio-projects', JSON.stringify(this.projects));
  }

  // Load projects from localStorage
  loadProjects() {
    const saved = localStorage.getItem('portfolio-projects');
    if (saved) {
      this.projects = { ...this.projects, ...JSON.parse(saved) };
    }
  }

  // Create archive page
  createArchivePage() {
    const archiveHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Archive - Muhammad Abdullah</title>
        <link href="style.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <style>
          .archive-container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 150px 25px 100px;
          }
          
          .archive-header {
            text-align: center;
            margin-bottom: 100px;
          }
          
          .archive-title {
            font-size: clamp(40px, 8vw, 80px);
            margin: 0 0 20px;
            color: var(--lightest-slate);
          }
          
          .archive-subtitle {
            color: var(--green);
            font-family: var(--font-mono);
            font-size: var(--fz-md);
            font-weight: 400;
          }
          
          .archive-table {
            width: 100%;
            border-collapse: collapse;
            visibility: visible;
            opacity: 1;
          }
          
          .archive-table thead th {
            padding: 10px;
            text-align: left;
            color: var(--lightest-slate);
            font-size: var(--fz-sm);
            font-weight: 600;
          }
          
          .archive-table tbody tr {
            border-bottom: 1px solid var(--lightest-navy);
            transition: var(--transition);
          }
          
          .archive-table tbody tr:hover {
            background-color: var(--lightest-navy);
          }
          
          .archive-table tbody td {
            padding: 15px 10px;
            font-size: var(--fz-sm);
            vertical-align: top;
          }
          
          .project-year {
            color: var(--green);
            font-family: var(--font-mono);
            font-size: var(--fz-xs);
          }
          
          .project-title {
            color: var(--lightest-slate);
            font-size: var(--fz-lg);
            font-weight: 600;
          }
          
          .project-company {
            color: var(--light-slate);
            font-size: var(--fz-xs);
          }
          
          .project-tech {
            color: var(--light-slate);
            font-family: var(--font-mono);
            font-size: var(--fz-xxs);
          }
          
          .project-links {
            display: flex;
            gap: 10px;
            align-items: center;
          }
          
          .project-links a {
            color: var(--light-slate);
            transition: var(--transition);
          }
          
          .project-links a:hover {
            color: var(--green);
          }
          
          .project-links svg {
            width: 16px;
            height: 16px;
          }
          
          @media (max-width: 768px) {
            .archive-table {
              font-size: var(--fz-sm);
            }
            
            .archive-table thead {
              display: none;
            }
            
            .archive-table tbody tr {
              display: block;
              margin-bottom: 30px;
              padding: 20px;
              border: 1px solid var(--lightest-navy);
              border-radius: var(--border-radius);
            }
            
            .archive-table tbody td {
              display: block;
              padding: 5px 0;
              border: none;
            }
          }
        </style>
      </head>
      <body>
        <nav class="navbar">
          <div class="nav-logo">
            <a href="/">
              <img src="/attached_assets/logo_white_1754616491062.png" alt="MA Logo" class="logo-image" />
            </a>
          </div>
        </nav>
        
        <main>
          <div class="archive-container">
            <header class="archive-header">
              <h1 class="archive-title">Archive</h1>
              <p class="archive-subtitle">A big list of things I've worked on</p>
            </header>
            
            <table class="archive-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Title</th>
                  <th>Made at</th>
                  <th>Built with</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody id="archive-projects">
                <!-- Projects will be inserted here -->
              </tbody>
            </table>
          </div>
        </main>
        
        <script>
          // Load and display archive projects
          const projects = JSON.parse(localStorage.getItem('portfolio-projects') || '{}');
          const allProjects = [...(projects.featured || []), ...(projects.archive || [])];
          
          const tbody = document.getElementById('archive-projects');
          
          allProjects
            .sort((a, b) => b.year - a.year)
            .forEach(project => {
              const row = document.createElement('tr');
              row.innerHTML = \`
                <td class="project-year">\${project.year}</td>
                <td>
                  <div class="project-title">\${project.title}</div>
                  <div class="project-company">\${project.company || 'Personal Project'}</div>
                </td>
                <td class="project-company">\${project.company || 'Personal Project'}</td>
                <td class="project-tech">\${project.tech ? project.tech.join(' • ') : ''}</td>
                <td>
                  <div class="project-links">
                    \${project.github ? \`
                      <a href="\${project.github}" target="_blank" aria-label="GitHub">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    \` : ''}
                    \${project.external ? \`
                      <a href="\${project.external}" target="_blank" aria-label="External Link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15,3 21,3 21,9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    \` : ''}
                  </div>
                </td>
              \`;
              tbody.appendChild(row);
            });
        </script>
      </body>
      </html>
    `;
    
    return archiveHTML;
  }

  // Initialize archive functionality
  initializeArchive() {
    this.loadProjects();
    
    // Add archive link to main navigation if it doesn't exist
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu && !document.querySelector('a[href="archive.html"]')) {
      const archiveLink = document.createElement('a');
      archiveLink.href = 'archive.html';
      archiveLink.textContent = 'Archive';
      archiveLink.setAttribute('data-number', '05.');
      navMenu.insertBefore(archiveLink, navMenu.querySelector('.resume-link'));
    }
    
    // Add "view archive" link to projects section
    this.addArchiveLink();
  }

  // Add archive link to projects section
  addArchiveLink() {
    const projectsSection = document.querySelector('#projects .container');
    if (projectsSection && !document.querySelector('.archive-link')) {
      const archiveLink = document.createElement('div');
      archiveLink.className = 'archive-link';
      archiveLink.style.cssText = `
        text-align: center;
        margin-top: 80px;
      `;
      archiveLink.innerHTML = `
        <a href="archive.html" style="
          color: var(--green);
          font-family: var(--font-mono);
          font-size: var(--fz-sm);
          text-decoration: none;
          border: 1px solid var(--green);
          border-radius: var(--border-radius);
          padding: 1.25rem 1.75rem;
          transition: var(--transition);
          display: inline-block;
        " onmouseover="this.style.backgroundColor='rgba(100, 255, 218, 0.1)'" onmouseout="this.style.backgroundColor='transparent'">
          view the archive
        </a>
      `;
      projectsSection.appendChild(archiveLink);
    }
  }

  // Update project display on main page
  updateDisplay() {
    // Update featured projects
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
      projectsGrid.innerHTML = this.projects.featured.map(project => `
        <div class="project featured">
          <div class="project-content">
            <p class="project-overline">Featured Project</p>
            <h3 class="project-title">${project.title}</h3>
            <div class="project-description">
              <p>${project.description}</p>
            </div>
            <ul class="project-tech-list">
              ${project.tech.map(tech => `<li>${tech}</li>`).join('')}
            </ul>
            <div class="project-links">
              ${project.github ? `
                <a href="${project.github}" target="_blank" aria-label="GitHub Link">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              ` : ''}
              ${project.external ? `
                <a href="${project.external}" target="_blank" aria-label="External Link">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              ` : ''}
            </div>
          </div>
          <div class="project-image">
            <a href="${project.external || project.github || '#'}" target="_blank">
              <img src="${project.image || 'https://via.placeholder.com/600x400'}" alt="${project.title}" />
            </a>
          </div>
        </div>
      `).join('');
    }
  }

  // Create archive.html file
  generateArchiveFile() {
    const archiveContent = this.createArchivePage();
    
    // Create a download link for the archive file
    const blob = new Blob([archiveContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'archive.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    console.log('Archive file generated! Save it as archive.html in your project root.');
  }
}

// Initialize project manager
const projectManager = new ProjectManager();

// Expose project manager to global scope for easy access
window.projectManager = projectManager;

// Helper functions for easy project management
window.addProject = (projectData, category = 'archive') => {
  projectManager.addProject(projectData, category);
};

window.updateProject = (id, updatedData, category = 'archive') => {
  projectManager.updateProject(id, updatedData, category);
};

window.removeProject = (id, category = 'archive') => {
  projectManager.removeProject(id, category);
};

window.generateArchive = () => {
  projectManager.generateArchiveFile();
};

// Console helper message
console.log(`
🚀 Project Manager Loaded!

Usage examples:
- Add a new project: addProject({title: 'My Project', description: '...', tech: ['React', 'Node.js'], github: 'https://github.com/...', year: 2024})
- Update a project: updateProject('project-id', {title: 'Updated Title'})
- Remove a project: removeProject('project-id')
- Generate archive.html: generateArchive()

Current projects:
- Featured: ${projectManager.projects.featured.length}
- Archive: ${projectManager.projects.archive.length}
`);

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

// Add blur effect to navigation when menu is open (for future mobile menu)
function toggleBlur() {
  const main = document.querySelector('main');
  const socialFixed = document.querySelector('.social-fixed');
  const emailFixed = document.querySelector('.email-fixed');
  
  [main, socialFixed, emailFixed].forEach(element => {
    if (element) {
      element.style.filter = element.style.filter ? '' : 'blur(5px)';
      element.style.pointerEvents = element.style.pointerEvents === 'none' ? '' : 'none';
    }
  });
}

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('using-keyboard');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('using-keyboard');
});

// Email link functionality
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Optional: Add analytics tracking here
    console.log('Email link clicked');
  });
});

// External link handling
const externalLinks = document.querySelectorAll('a[target="_blank"]');
externalLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Optional: Add analytics tracking for external links
    console.log('External link clicked:', link.href);
  });
});
