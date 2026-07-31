// js/ui.js
import { computeGlobalStats, computePlatformStats } from './stats.js';

/**
 * Renderiza o ícone/logo de uma plataforma.
 * Se existir "platform.logo", tenta mostrar a imagem.
 * Caso a imagem falhe ao carregar, troca automaticamente pelo emoji (platform.icon).
 */
export function renderPlatformIcon(platform, sizeClass = 'platform-icon') {
  if (platform.logo) {
    return `
      <img
        src="${platform.logo}"
        alt="Logo ${platform.shortName}"
        class="${sizeClass} platform-logo-img"
        onerror="this.onerror=null; this.outerHTML='<span class=\\'${sizeClass}\\'>${platform.icon}</span>';"
      />
    `;
  }
  return `<span class="${sizeClass}">${platform.icon}</span>`;
}

export function createGameCard(game, state) {
  const card = document.createElement('div');
  card.className = 'game-card';
  card.dataset.gameId = game.id;
  card.dataset.name = game.name.toLowerCase();

  const isCompleted = !!state.completed[game.id];
  const isFavorite = !!state.favorites[game.id];

  if (isCompleted) card.classList.add('completed');
  if (isFavorite) card.classList.add('favorited');

  card.innerHTML = `
    <button class="favorite-btn" aria-label="Favoritar jogo" title="Favoritar">
      ${isFavorite ? '⭐' : '☆'}
    </button>

    <div class="game-cover">
      <img
        src="./assets/covers/${game.cover}"
        alt="Capa de ${game.name}"
        loading="lazy"
        onerror="this.onerror=null; this.remove(); this.parentElement.classList.add('no-image');"
      />
      <div class="cover-overlay"></div>
      <div class="check-badge">✔</div>
    </div>

    <div class="game-info">
      <h3 class="game-title">${game.name}</h3>
      <label class="checkbox-container">
        <input type="checkbox" class="game-checkbox" ${isCompleted ? 'checked' : ''} />
        <span class="checkmark"></span>
        <span class="checkbox-label">${isCompleted ? 'Completado' : 'Marcar como completo'}</span>
      </label>
    </div>
  `;

  return card;
}

export function createPlatformSection(platform, state) {
  const section = document.createElement('section');
  section.className = 'platform-section';
  section.id = platform.id;
  section.dataset.platform = platform.id;
  section.style.setProperty('--platform-accent', platform.colors.accent);

  const stats = computePlatformStats(platform, state);

  section.innerHTML = `
    <div class="platform-header">
      <div class="platform-title">
        ${renderPlatformIcon(platform, 'platform-icon')}
        <h2>${platform.name}</h2>
      </div>
      <div class="platform-progress">
        <span class="progress-text" data-progress-text>${stats.completed}/${stats.total} completos</span>
        <div class="progress-bar">
          <div class="progress-fill" data-progress-fill style="width:${stats.percent}%"></div>
        </div>
      </div>
    </div>
    <div class="games-grid" data-games-grid></div>
  `;

  const grid = section.querySelector('[data-games-grid]');
  platform.games.forEach(game => grid.appendChild(createGameCard(game, state)));

  return section;
}

export function updatePlatformProgress(sectionEl, platform, state) {
  const stats = computePlatformStats(platform, state);
  sectionEl.querySelector('[data-progress-text]').textContent = `${stats.completed}/${stats.total} completos`;
  sectionEl.querySelector('[data-progress-fill]').style.width = `${stats.percent}%`;
}

export function updateGlobalStats(platforms, state) {
  const stats = computeGlobalStats(platforms, state);

  document.querySelectorAll('[data-stat="total"]').forEach(el => el.textContent = stats.total);
  document.querySelectorAll('[data-stat="completed"]').forEach(el => el.textContent = stats.completed);
  document.querySelectorAll('[data-stat="percent"]').forEach(el => el.textContent = `${stats.percent}%`);
  document.querySelectorAll('[data-stat="favorites"]').forEach(el => el.textContent = stats.favorites);

  const heroFill = document.querySelector('[data-hero-progress-fill]');
  if (heroFill) heroFill.style.width = `${stats.percent}%`;
}
