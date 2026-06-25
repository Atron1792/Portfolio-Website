// Shared project data used by both index.html and archive.html.
const defaultProjects = {
  featured: ['aom-ck3', 'stress-heatmap', 'limbo-td'],
  archive: [
    {
      id: 'aom-ck3',
      title: 'Artifact of Myth, a CK3 Mod',
      description: 'An independently developed, expansive Crusader Kings III mod that introduces mythological artifacts, lore-based decisions, and dynamic event chains, with continuous content updates to enrich gameplay.',
      tech: ['Jomini Script', 'Steam Workshop'],
      external: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3481270592',
      date: 'May 2025',
      purpose: 'Personal Project'
    },
    {
      id: 'caesar-cipher',
      title: 'Caesar Cipher',
      description: 'A robust Caesar Cipher implementation in Python that demonstrates strong problem-solving, modular programming, reusable code design, and comprehensive error handling for unexpected inputs.',
      tech: ['Python', 'Cryptography', 'Algorithm Design', 'Error Handling'],
      date: 'January 2023',
      purpose: 'Academic Project'
    },
    {
      id: 'limbo-td',
      title: 'LimboTD',
      description: 'A 2D survival tower defense game that won 2nd place in a 24-hour hackathon, demonstrating rapid prototyping, teamwork, time management, and strong learning ability through building engaging mechanics in Godot.',
      tech: ['Godot', 'GDScript', 'Game Design', 'Team Collaboration'],
      github: 'https://github.com/Atron1792/LimboLTD_CalgaryHacks2024',
      external: 'https://mrugddc.itch.io/limbo-ltd',
      date: 'February 2024',
      purpose: 'CalgaryHacks 2024'
    },
    {
      id: 'wolflings-pack',
      title: 'Wolflings: Peril of the Pack',
      description: 'A survival adventure game where players control a pack of wolves navigating through dangerous territories.',
      tech: ['Godot', 'GDScript', 'Game Design'],
      github: 'https://github.com/TechPowerAwaits/calgaryhacks-2025',
      external: 'https://atron1792.itch.io/wolflings-peril-of-the-pack',
      date: 'May 2025',
      purpose: 'CalgaryHacks 2025'
    },
    {
      id: 'change-to-scale',
      title: 'Change to Scale',
      description: 'A puzzle platformer game made for GMTK Game Jam 2024 with scaling mechanics.',
      tech: ['Godot', 'GDScript', 'Platformer'],
      github: 'https://github.com/Atron1792/Change-to-Scale_GMTK-2024',
      external: 'https://atron1792.itch.io/change-to-scale',
      date: 'August 2024',
      purpose: 'GMTK Game Jam 2024'
    },
    {
      id: 'combat-harvest',
      title: 'Combat Harvest',
      description: 'An action-packed harvesting game combining combat mechanics with resource management.',
      tech: ['Godot', 'GDScript', 'Action'],
      github: 'https://github.com/Atron1792/combat-harvest',
      external: 'https://karszo.itch.io/combat-harvest',
      date: '2024',
      purpose: 'Propel Alberta Game Jam'
    },
    {
      id: 'winter-express',
      title: 'Winter Express',
      description: 'A strategic management game that fosters critical thinking by challenging players to optimize resource allocation and strategic decision-making.',
      tech: ['Godot', 'GDScript', 'Game Development', 'Team Leadership'],
      github: 'https://github.com/Atron1792/MRUHacks2024',
      external: 'https://atron1792.itch.io/winter-express',
      date: 'October 2024',
      purpose: 'MRUHacks 2024'
    },
    {
      id: 'website',
      title: 'Portfolio Website',
      description: 'My personal portfolio website to showcase my projects and skills.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Atron1792/Portfolio-Website',
      external: 'https://www.mabdu.ca/',
      date: 'November 2025',
      purpose: 'Personal Project'
    },
    {
      id: 'winfolderlock',
      title: 'WinFolderLock',
      description: 'A UI based folder locking system for Windows 10/11.',
      tech: ['C#', 'GitHub Copilot', 'Windows App'],
      github: 'https://github.com/Atron1792/WinFolderLock',
      date: 'June 2026',
      purpose: 'Personal Project'
    },
    {
      id: 'stress-heatmap',
      title: 'MRU Student Stress Heatmap',
      description: 'An app that reads student input, connects it to machine learning, and sends the readout to a web map for administrative use.',
      tech: ['JavaScript', 'Python', 'Kotlin', 'Machine Learning', 'SQL'],
      github: 'https://github.com/goose121/stress-heatmap',
      date: 'April 2026',
      purpose: 'Academic Project'
    }
  ]
};

function getProjectStore() {
  try {
    const storedProjects = window.localStorage ? localStorage.getItem('portfolio-projects') : null;
    if (!storedProjects) return defaultProjects;

    const parsedProjects = JSON.parse(storedProjects);
    return {
      featured: parsedProjects.featured || defaultProjects.featured,
      archive: parsedProjects.archive || defaultProjects.archive
    };
  } catch (error) {
    console.warn('Could not load saved projects. Using default projects instead.', error);
    return defaultProjects;
  }
}

function escapeHTML(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getProjectLink(project) {
  return project.external || project.github || '#';
}

function getProjectById(projects, id) {
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].id === id) return projects[i];
  }
  return null;
}

function getFeaturedProjects(projectStore) {
  const projects = projectStore.archive || [];
  const featured = projectStore.featured || [];
  const resolvedProjects = [];

  for (let i = 0; i < featured.length; i += 1) {
    const projectOrId = featured[i];
    let project = null;

    if (typeof projectOrId === 'string') {
      project = getProjectById(projects, projectOrId);
    } else if (projectOrId && projectOrId.id) {
      project = getProjectById(projects, projectOrId.id) || projectOrId;
    }

    if (project) resolvedProjects.push(project);
  }

  return resolvedProjects;
}

function parseProjectDate(date) {
  const monthMap = {
    january: 0,
    february: 1,
    feburary: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11
  };

  const dateString = String(date || '').toLowerCase();
  const yearMatch = dateString.match(/\d{4}/);
  const monthMatch = dateString.match(/[a-z]+/);
  const year = yearMatch ? Number(yearMatch[0]) : 0;
  const month = monthMatch && Object.prototype.hasOwnProperty.call(monthMap, monthMatch[0])
    ? monthMap[monthMatch[0]]
    : 0;

  return new Date(year, month, 1).getTime();
}

function buildProjectImage(project) {
  const projectId = project && project.id ? project.id : 'logo';
  const projectTitle = project && project.title ? project.title : 'Project image';

  // The image file name should match the project id exactly.
  // Example: id "limbo-td" uses /assets/limbo-td.png
  return `<img src="/assets/${escapeHTML(projectId)}.png" alt="${escapeHTML(projectTitle)}" width="512" height="512" onerror="this.onerror=null; this.src='/assets/logo.png';">`;
}

function renderFeaturedProjects() {
  const projectGrid = document.getElementById('featured-projects');
  if (!projectGrid) return;

  const featuredProjects = getFeaturedProjects(getProjectStore());

  projectGrid.innerHTML = featuredProjects.map(project => {
    const techItems = (project.tech || [])
      .map(tech => `<li>${escapeHTML(tech)}</li>`)
      .join('');

    const link = getProjectLink(project);
    const linkAttributes = link !== '#' ? 'target="_blank" rel="noopener noreferrer"' : '';

    return `
      <div class="project featured">
        <div class="project-content">
          <p class="project-overline">Featured Project</p>
          <h3 class="project-title">${escapeHTML(project.title)}</h3>
          <div class="project-description">
            <p>${escapeHTML(project.description)}</p>
          </div>
          <ul class="project-tech-list">
            ${techItems}
          </ul>
        </div>
        <div class="project-image">
          <a href="${escapeHTML(link)}" ${linkAttributes}>
            ${buildProjectImage(project)}
          </a>
        </div>
      </div>
    `;
  }).join('');
}

function renderArchiveProjects() {
  const archiveTableBody = document.getElementById('archive-projects');
  if (!archiveTableBody) return;

  const projects = (getProjectStore().archive || []).slice();

  archiveTableBody.innerHTML = projects
    .sort((a, b) => parseProjectDate(b.date) - parseProjectDate(a.date))
    .map(project => `
      <tr>
        <td class="project-date u-mono u-meta-sm">${escapeHTML(project.date)}</td>
        <td>
          <div class="project-title">${escapeHTML(project.title)}</div>
        </td>
        <td class="project-purpose">${escapeHTML(project.purpose)}</td>
        <td class="project-tech u-mono u-meta-xs">${project.tech ? project.tech.map(escapeHTML).join(' • ') : ''}</td>
        <td>
          <div class="project-links u-icon-links">
            ${project.github ? `
              <a href="${escapeHTML(project.github)}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            ` : ''}
            ${project.external ? `
              <a href="${escapeHTML(project.external)}" target="_blank" rel="noopener noreferrer" aria-label="External Link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15,3 21,3 21,9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            ` : ''}
          </div>
        </td>
      </tr>
    `).join('');
}

function setupNavbarScroll() {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (navbar) {
      if (scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    const hero = document.querySelector('.hero');
    if (hero && window.innerWidth > 768) {
      hero.style.transform = `translateY(${scrollY * 0.1}px)`;
    }
  });
}

function setupTypewriter() {
  const typewriterText = document.querySelector('.typewriter');
  if (!typewriterText) return;

  const words = ['websites', 'games', 'applications', 'algorithms'];
  let wordIndex = 0;
  let letterIndex = 0;
  let currentWord = '';
  let isDeleting = false;

  function typeWriter() {
    const word = words[wordIndex];

    if (isDeleting) {
      currentWord = word.substring(0, letterIndex - 1);
      letterIndex -= 1;
    } else {
      currentWord = word.substring(0, letterIndex + 1);
      letterIndex += 1;
    }

    typewriterText.textContent = currentWord;

    let typeSpeed = isDeleting ? 75 : 150;

    if (!isDeleting && letterIndex === word.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
  }

  setTimeout(typeWriter, 1000);
}

function setupSectionAnimations() {
  const sections = document.querySelectorAll('section');

  if (!('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(sections, section => {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    });
    return;
  }

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

  Array.prototype.forEach.call(sections, section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
}

function setupMobileNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (!navToggle || !navMenu) return;

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

  function closeMenu() {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    backdrop.style.opacity = '0';
    backdrop.style.visibility = 'hidden';
    document.body.style.overflow = 'auto';
  }

  function openMenu() {
    navMenu.classList.add('active');
    navToggle.classList.add('active');
    backdrop.style.opacity = '1';
    backdrop.style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
  }

  navToggle.addEventListener('click', event => {
    event.stopPropagation();
    if (navMenu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  const navLinks = document.querySelectorAll('.nav-menu a');
  Array.prototype.forEach.call(navLinks, link => {
    link.addEventListener('click', closeMenu);
  });

  backdrop.addEventListener('click', closeMenu);

  document.addEventListener('click', event => {
    if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
      closeMenu();
    }
  });
}

function initSite() {
  try {
    renderFeaturedProjects();
    renderArchiveProjects();
  } catch (error) {
    console.error('Project rendering failed:', error);
  }

  setupNavbarScroll();
  setupTypewriter();
  setupSectionAnimations();
  setupMobileNavigation();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSite);
} else {
  initSite();
}
