// js/storage.js
const STORAGE_KEY = 'gameChecklistApp_v1';

function getDefaultState() {
  return { completed: {}, favorites: {}, theme: 'dark' };
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultState();
    const parsed = JSON.parse(raw);
    return { ...getDefaultState(), ...parsed };
  } catch (err) {
    console.error('Erro ao carregar LocalStorage:', err);
    return getDefaultState();
  }
}

export function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function toggleCompleted(state, gameId) {
  state.completed[gameId] = !state.completed[gameId];
  saveState(state);
  return state.completed[gameId];
}

export function toggleFavorite(state, gameId) {
  state.favorites[gameId] = !state.favorites[gameId];
  saveState(state);
  return state.favorites[gameId];
}

export function setTheme(state, theme) {
  state.theme = theme;
  saveState(state);
}
