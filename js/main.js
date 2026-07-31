// js/main.js
import { platforms, dashboardColors } from './data.js';
import { loadState, toggleCompleted, toggleFavorite, setTheme } from './storage.js';
import {
  createPlatformSection,
  updatePlatformProgress,
  updateGlobalStats,
  renderPlatformIcon
} from './ui.js';
import { setupBackgroundObserver, setupCardAnimation } from './observer.js';
import { setupSearch } from './search.js';

const state = loadState();

function init() {
  renderDotNav();
  renderPlatformSections();
  applyTheme(state.theme);
  updateGlobalStats(platforms, state);

  setupBackgroundObserver(platforms, dashboardColors);
  setupCardAnimation();
  setupSearch(document.getElementById('searchInput'));
  setupEventListeners();
}

function renderDotNav() {
  const dotNav = document.getElementById('dotNav');

  // Dot do dashboard (sempre emoji, não tem logo)
  dotNav.appendChild(createDot('dashboard', '🏠', null));

  // Dots das plataformas (com logo, se existir)
  platforms.forEach(p => dotNav.appendChild(createDot(p.id, p.icon, p.logo)));
}

function createDot(target, icon, logo) {
  const dot = document.createElement('button');
  dot.className = 'dot';
  dot.dataset.target = target;

  if (logo) {
    dot.innerHTML = `
      <img
        src="${logo}"
        alt="${target}"
        class="dot-logo-img"
        onerror="this.onerror=null; this.outerHTML='<span>${icon}</span>';"
      />
    `;
  } else {
    dot.innerHTML = `<span>${icon}</span>`;
  }

  dot.addEventListener('click', () => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
  });

  return dot;
}

function renderPlatformSections() {
  const container = document.getElementById('platformsContainer');
  const chipsContainer = document.getElementById('platformChips');

  platforms.forEach(platform => {
    const section = createPlatformSection(platform, state);
    container.appendChild(section);

    const chip = document.createElement('button');
    chip.className = 'platform-chip';
    chip.style.setProperty('--chip-color', platform.colors.accent);
    chip.innerHTML = `${renderPlatformIcon(platform, 'chip-icon')} ${platform.shortName}`;
    chip.addEventListener('click', () => section.scrollIntoView({ behavior: 'smooth' }));
    chipsContainer.appendChild(chip);
  });
}

function setupEventListeners() {
  const container = document.getElementById('platformsContainer');

  // Checkbox de "completado"
  container.addEventListener('change', (e) => {
    if (!e.target.classList.contains('game-checkbox')) return;

    const card = e.target.closest('.game-card');
    const gameId = card.dataset.gameId;
    const isCompleted = toggleCompleted(state, gameId);

    card.classList.toggle('completed', isCompleted);
    card.classList.add('just-toggled');
    setTimeout(() => card.classList.remove('just-toggled'), 700);

    card.querySelector('.checkbox-label').textContent =
      isCompleted ? 'Completado' : 'Marcar como completo';

    const section = card.closest('.platform-section');
    const platform = platforms.find(p => p.id === section.dataset.platform);
    updatePlatformProgress(section, platform, state);
    updateGlobalStats(platforms, state);
  });

  // Botão de favorito
  container.addEventListener('click', (e) => {
    if (!e.target.classList.contains('favorite-btn')) return;

    const card = e.target.closest('.game-card');
    const gameId = card.dataset.gameId;
    const isFav = toggleFavorite(state, gameId);

    card.classList.toggle('favorited', isFav);
    e.target.textContent = isFav ? '⭐' : '☆';
    updateGlobalStats(platforms, state);
  });

  // Dark/Light theme
  document.getElementById('themeToggle').addEventListener('click', () => {
    const newTheme = state.theme === 'dark' ? 'light' : 'dark';
    setTheme(state, newTheme);
    applyTheme(newTheme);
  });

  // Voltar ao topo
  document.getElementById('scrollTopBtn').addEventListener('click', () => {
    document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
  });
}

function applyTheme(theme) {
  document.body.classList.toggle('light-theme', theme === 'light');
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = theme === 'light' ? '🌙' : '☀️';
}

document.addEventListener('DOMContentLoaded', init);
