// js/observer.js
let currentLayer = 'a';

function applyGradient(layer, colors) {
  layer.style.background = `linear-gradient(135deg, ${colors.start}, ${colors.end})`;
}

function crossfadeTo(colors) {
  const layerA = document.getElementById('bg-layer-a');
  const layerB = document.getElementById('bg-layer-b');

  const showLayer = currentLayer === 'a' ? layerB : layerA;
  const hideLayer = currentLayer === 'a' ? layerA : layerB;

  applyGradient(showLayer, colors);
  showLayer.style.opacity = '1';
  hideLayer.style.opacity = '0';

  currentLayer = currentLayer === 'a' ? 'b' : 'a';
}

function setActiveDot(platformId) {
  document.querySelectorAll('.dot-nav .dot').forEach(dot => {
    dot.classList.toggle('active', dot.dataset.target === platformId);
  });
}

export function setupBackgroundObserver(platforms, dashboardColors) {
  const layerA = document.getElementById('bg-layer-a');
  applyGradient(layerA, dashboardColors);
  layerA.style.opacity = '1';

  const sections = document.querySelectorAll('.dashboard-section, .platform-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        const platformId = entry.target.dataset.platform;
        const colors = platformId === 'dashboard'
          ? dashboardColors
          : platforms.find(p => p.id === platformId)?.colors;

        if (colors) crossfadeTo(colors);
        setActiveDot(platformId);
      }
    });
  }, { threshold: [0.5] });

  sections.forEach(section => observer.observe(section));
}

export function setupCardAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.game-card').forEach(card => observer.observe(card));
}
