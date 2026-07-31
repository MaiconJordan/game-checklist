// js/stats.js
export function computeGlobalStats(platforms, state) {
  let total = 0, completed = 0, favorites = 0;

  platforms.forEach(platform => {
    platform.games.forEach(game => {
      total++;
      if (state.completed[game.id]) completed++;
      if (state.favorites[game.id]) favorites++;
    });
  });

  const percent = total ? Math.round((completed / total) * 100) : 0;
  return { total, completed, favorites, percent };
}

export function computePlatformStats(platform, state) {
  const total = platform.games.length;
  const completed = platform.games.filter(g => state.completed[g.id]).length;
  const percent = total ? Math.round((completed / total) * 100) : 0;
  return { total, completed, percent };
}
