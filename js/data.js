// js/data.js
// Base de dados de plataformas e jogos.
// "cover" = nome do arquivo em assets/covers/
// "logo"  = caminho da imagem do logo da plataforma em assets/logos/

export const dashboardColors = { start: '#0f0f1a', end: '#1a1a2e', accent: '#6c63ff' };

export const platforms = [
  {
    id: 'snes',
    name: 'Super Nintendo (SNES)',
    shortName: 'SNES',
    icon: '🕹️',
    logo: './assets/logos/snes.png',
    colors: { start: '#4b2e6f', end: '#8a63c9', accent: '#b79cf0' },
    games: [
      { id: 'snes-01', name: "The Legend of Zelda: A Link to the Past", cover: 'the-legend-of-zelda-a-link-to-the-past.jpg' },
      { id: 'snes-02', name: "Super Mario World", cover: 'super-mario-world.jpg' },
      { id: 'snes-03', name: "Super Metroid", cover: 'super-metroid.jpg' },
      { id: 'snes-04', name: "Donkey Kong Country 2: Diddy's Kong Quest", cover: 'donkey-kong-country-2-diddys-kong-quest.jpg' },
      { id: 'snes-05', name: "Chrono Trigger", cover: 'chrono-trigger.jpg' },
      { id: 'snes-06', name: "Super Mario World 2: Yoshi's Island", cover: 'super-mario-world-2-yoshis-island.jpg' },
      { id: 'snes-07', name: "Super Castlevania IV", cover: 'super-castlevania-iv.jpg' },
      { id: 'snes-08', name: "EarthBound", cover: 'earthbound.jpg' },
      { id: 'snes-09', name: "Mega Man X", cover: 'mega-man-x.jpg' },
      { id: 'snes-10', name: "Terranigma", cover: 'terranigma.jpg' },
    ]
  },
  {
    id: 'gba',
    name: 'Game Boy Advance (GBA)',
    shortName: 'GBA',
    icon: '🎮',
    logo: './assets/logos/gba.png',
    colors: { start: '#2c1a5e', end: '#7b2fe0', accent: '#a56bff' },
    games: [
      { id: 'gba-01', name: "The Legend of Zelda: The Minish Cap", cover: 'the-legend-of-zelda-the-minish-cap.jpg' },
      { id: 'gba-02', name: "Metroid Fusion", cover: 'metroid-fusion.jpg' },
      { id: 'gba-03', name: "Metroid: Zero Mission", cover: 'metroid-zero-mission.jpg' },
      { id: 'gba-04', name: "Castlevania: Aria of Sorrow", cover: 'castlevania-aria-of-sorrow.jpg' },
      { id: 'gba-05', name: "Golden Sun", cover: 'golden-sun.jpg' },
      { id: 'gba-06', name: "Pokémon Emerald", cover: 'pokemon-emerald.jpg' },
      { id: 'gba-07', name: "Super Mario Advance 4: Super Mario Bros. 3", cover: 'super-mario-advance-4-super-mario-bros-3.jpg' },
      { id: 'gba-08', name: "Kirby & The Amazing Mirror", cover: 'kirby-the-amazing-mirror.jpg' },
      { id: 'gba-09', name: "Wario Land 4", cover: 'wario-land-4.jpg' },
      { id: 'gba-10', name: "Kingdom Hearts: Chain of Memories", cover: 'kingdom-hearts-chain-of-memories.jpg' },
    ]
  },
  {
    id: 'nds',
    name: 'Nintendo DS',
    shortName: 'NDS',
    icon: '📱',
    logo: './assets/logos/nds.png',
    colors: { start: '#123353', end: '#3a86c8', accent: '#7fc1f0' },
    games: [
      { id: 'nds-01', name: "The Legend of Zelda: Phantom Hourglass", cover: 'the-legend-of-zelda-phantom-hourglass.jpg' },
      { id: 'nds-02', name: "Castlevania: Order of Ecclesia", cover: 'castlevania-order-of-ecclesia.jpg' },
      { id: 'nds-03', name: "Okamiden", cover: 'okamiden.jpg' },
      { id: 'nds-04', name: "Professor Layton and the Curious Village", cover: 'professor-layton-and-the-curious-village.jpg' },
      { id: 'nds-05', name: "Monster Tale", cover: 'monster-tale.jpg' },
    ]
  },
   {
    id: 'ps4',
    name: 'PlayStation 4 (PS4)',
    shortName: 'PS4',
    icon: '🎯',
    logo: './assets/logos/ps4.png',
    colors: { start: '#050a30', end: '#1868c9', accent: '#4fa3ff' },
    games: [
      { id: 'ps4-01', name: "The Last of Us Part I & Part II", cover: 'the-last-of-us-part-i-part-ii.jpg' },
      { id: 'ps4-02', name: "God of War (2018)", cover: 'god-of-war-2018.jpg' },
      { id: 'ps4-03', name: "Red Dead Redemption 2", cover: 'red-dead-redemption-2.jpg' },
      { id: 'ps4-04', name: "Uncharted 4: A Thief's End", cover: 'uncharted-4-a-thiefs-end.jpg' },
      { id: 'ps4-05', name: "Marvel's Spider-Man", cover: 'marvels-spider-man.jpg' },
      { id: 'ps4-06', name: "Ghost of Tsushima", cover: 'ghost-of-tsushima.jpg' },
      { id: 'ps4-07', name: "Horizon Zero Dawn", cover: 'horizon-zero-dawn.jpg' },
      { id: 'ps4-08', name: "The Witcher 3: Wild Hunt", cover: 'the-witcher-3-wild-hunt.jpg' },
      { id: 'ps4-09', name: "Bloodborne", cover: 'bloodborne.jpg' },
      { id: 'ps4-10', name: "Shadow of the Colossus (Remake)", cover: 'shadow-of-the-colossus-remake.jpg' },
      { id: 'ps4-11', name: "Resident Evil 2 (Remake)", cover: 'resident-evil-2-remake.jpg' },
      { id: 'ps4-12', name: "Monster Hunter: World", cover: 'monster-hunter-world.jpg' },
      { id: 'ps4-13', name: "Hollow Knight", cover: 'hollow-knight.webp' },
      { id: 'ps4-14', name: "Death Stranding", cover: 'death-stranding.webp' },
      { id: 'ps4-15', name: "Grand Theft Auto V", cover: 'grand-theft-auto-v.jpg' },
      { id: 'ps4-16', name: "NieR: Automata", cover: 'nier-automata.jpg' },
      { id: 'ps4-18', name: "Control", cover: 'control.webp' },
      { id: 'ps4-19', name: "Star Wars Jedi: Fallen Order", cover: 'star-wars-jedi-fallen-order.png' },
      { id: 'ps4-20', name: "Tomb Raider: Definitive Edition", cover: 'tomb-raider-definitive-edition.jpg' },
    ]
  },
  {
    id: 'xbox',
    name: 'Xbox Series S',
    shortName: 'Xbox',
    icon: '🟩',
    logo: './assets/logos/xbox.png',
    colors: { start: '#0b3d0b', end: '#3fae43', accent: '#7be07f' },
    games: [
      { id: 'xbox-01', name: "Elden Ring", cover: 'elden-ring.jpg' },
      { id: 'xbox-02', name: "Starfield", cover: 'starfield.jpg' },
      { id: 'xbox-03', name: "Alan Wake 2", cover: 'alan-wake-2.jpg' },
      { id: 'xbox-04', name: "Cyberpunk 2077: Phantom Liberty", cover: 'cyberpunk-2077-phantom-liberty.jpg' },
      { id: 'xbox-05', name: "Assassin's Creed Oydssey", cover: 'assassins-creed-odyssey.jpg' },
      { id: 'xbox-06', name: "Psychonauts 2", cover: 'psychonauts-2.jpg' },
      { id: 'xbox-07', name: "Ori and the Will of the Wisps", cover: 'ori-and-the-will-of-the-wisps.jpg' },
      { id: 'xbox-08', name: "Immortals Fenyx Rising", cover: 'immortals-fenyx-rising.jpg' },
      { id: 'xbox-09', name: "A Plague Tale: Requiem", cover: 'a-plague-tale-requiem.jpg' },
      { id: 'xbox-10', name: "Dead Ceels", cover: 'dead-ceels.jpg' },
    ]
  },
  {
    id: 'pc',
    name: 'PC (Steam)',
    shortName: 'PC',
    icon: '💻',
    logo: './assets/logos/pc.png',
    colors: { start: '#171a21', end: '#2a475e', accent: '#66c0f4' },
    games: [
      { id: 'pc-01', name: "Baldur's Gate 3", cover: 'baldurs-gate-3.jpg' },
      { id: 'pc-02', name: "Portal 2", cover: 'portal-2.jpg' },
      { id: 'pc-03', name: "Black Myth: Wukong", cover: 'black-myth-wukong.jpg' },
      { id: 'pc-04', name: "Outer Wilds", cover: 'outer-wilds.jpg' },
      { id: 'pc-05', name: "Subnautica", cover: 'subnautica.jpg' },
      { id: 'pc-06', name: "Stray", cover: 'stray.jpg' },
      { id: 'pc-07', name: "Tunic", cover: 'tunic.jpg' },
      { id: 'pc-08', name: "It Takes Two", cover: 'it-takes-two.jpg' },
      { id: 'pc-09', name: "Sea of Stars", cover: 'sea-of-stars.jpg' },
      { id: 'pc-10', name: "Dave the Diver", cover: 'dave-the-diver.jpg' },
    ]
  },
  {
    id: 'switch',
    name: 'Nintendo Switch 1 & 2',
    shortName: 'Switch',
    icon: '🔴',
    logo: './assets/logos/switch.png',
    colors: { start: '#7a0d13', end: '#0d6fa8', accent: '#ff5b60' },
    games: [
      { id: 'switch-01', name: "The Legend of Zelda: Tears of the Kingdom", cover: 'the-legend-of-zelda-tears-of-the-kingdom.jpg' },
      { id: 'switch-02', name: "Super Mario Odyssey", cover: 'super-mario-odyssey.jpg' },
      { id: 'switch-03', name: "Metroid Prime Remastered", cover: 'metroid-prime-remastered.jpg' },
      { id: 'switch-04', name: "Metroid Dread", cover: 'metroid-dread.jpg' },
      { id: 'switch-05', name: "Luigi's Mansion 3", cover: 'luigis-mansion-3.jpg' },
      { id: 'switch-06', name: "The Legend of Zelda: Breath of the Wild", cover: 'the-legend-of-zelda-breath-of-the-wild.jpg' },
      { id: 'switch-07', name: "Super Mario 3D World + Bowsers Fury", cover: 'super-mario-3d-world.png' },
    ]
  },
];
