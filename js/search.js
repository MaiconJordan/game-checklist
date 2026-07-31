// js/search.js
export function setupSearch(inputEl) {
  inputEl.addEventListener('input', () => {
    const term = inputEl.value.trim().toLowerCase();

    document.querySelectorAll('.game-card').forEach(card => {
      const match = !term || card.dataset.name.includes(term);
      card.classList.toggle('hidden', !match);
    });

    document.querySelectorAll('.platform-section').forEach(section => {
      const visible = section.querySelectorAll('.game-card:not(.hidden)').length;
      section.classList.toggle('all-hidden', term.length > 0 && visible === 0);
    });
  });
}
