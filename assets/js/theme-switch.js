// assets/js/theme-switch.js
(function () {
  // Utilities
  const $html = document.documentElement;
  const KEY = 'theme';

  function applyTheme(theme) {
    if (theme === 'dark') $html.classList.add('dark-mode');
    else $html.classList.remove('dark-mode');
  }

  // Initial theme: honor stored pref, else system preference
  const stored = localStorage.getItem(KEY);
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');
  localStorage.setItem(KEY, initial);
  applyTheme(initial);

  // Hook up the toggle
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  // Optional: set initial icon/pressed state
  function setVisualState(theme) {
    const use = toggle.querySelector('use');
    if (use) use.setAttribute('href', theme === 'dark' ? '#svg-moon' : '#svg-sun');
    toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }
  setVisualState(initial);

  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    const next = localStorage.getItem(KEY) === 'dark' ? 'light' : 'dark';
    localStorage.setItem(KEY, next);
    applyTheme(next);
    setVisualState(next);
  });
})();
