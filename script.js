(() => {
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');
  const toast = document.getElementById('toast');

  // Theme choice is saved locally in the visitor's browser.
  try {
    if (localStorage.getItem('ahmad-portfolio-theme') === 'dark') body.classList.add('dark');
  } catch (_) {}
  themeToggle?.addEventListener('click', () => {
    body.classList.toggle('dark');
    try { localStorage.setItem('ahmad-portfolio-theme', body.classList.contains('dark') ? 'dark' : 'light'); } catch (_) {}
    themeToggle.setAttribute('aria-label', body.classList.contains('dark') ? 'Switch to light theme' : 'Switch to dark theme');
  });

  menuToggle?.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  siteNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }));

  // Filter the portfolio cards by project category.
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  filterButtons.forEach(button => button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.toggle('active', item === button));
    const filter = button.dataset.filter;
    projectCards.forEach(card => {
      const categories = (card.dataset.category || '').split(' ');
      card.classList.toggle('is-hidden', filter !== 'all' && !categories.includes(filter));
    });
  }));

  // Reveal sections as they enter the viewport, with a safe fallback.
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add('visible'));

  // Change the footer year automatically.
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Copy contact email with fallback for browsers without Clipboard API.
  document.getElementById('copyEmail')?.addEventListener('click', async event => {
    const email = event.currentTarget.dataset.email;
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(email);
      else {
        const input = document.createElement('textarea');
        input.value = email; input.setAttribute('readonly', '');
        input.style.position = 'fixed'; input.style.opacity = '0';
        document.body.appendChild(input); input.select();
        const copied = document.execCommand('copy'); input.remove();
        if (!copied) throw new Error('Copy not available');
      }
      toast.textContent = 'Email copied';
    } catch (_) { toast.textContent = email; }
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 2200);
  });
})();
