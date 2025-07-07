// lib/data/artists.ts

export const ARTISTS = [
  {
    name: 'Luna Eclipse',
    genre: 'Electronic / Ambient',
    description: 'Grammy-nominated producer creating ethereal soundscapes that blend electronic and organic elements.',
    achievement: '500M+ Streams',
    image: '🌙',
    color: 'purple',
    quote: 'SoundForge transformed my artistic vision into sonic reality. The team’s expertise is unmatched.',
  },
  {
    name: 'The Midnight Collective',
    genre: 'Indie Rock',
    description: 'Rising indie rock band known for their atmospheric sound and powerful live performances.',
    achievement: 'Billboard Top 40',
    image: '🎸',
    color: 'cyan',
    quote: 'Recording at SoundForge was a game-changer. They captured our energy perfectly.',
  },
  {
    name: 'Maya Santos',
    genre: 'R&B / Soul',
    description: 'Soulful vocalist whose powerful voice and emotional depth captivate audiences worldwide.',
    achievement: 'Multi-Platinum Artist',
    image: '👑',
    color: 'gold',
    quote: 'The vocal booth at SoundForge brings out the best in every performance. Pure magic.',
  },
  {
    name: 'Digital Dreams',
    genre: 'Synthwave / Retrowave',
    description: 'Duo creating nostalgic yet futuristic soundscapes that transport listeners to another dimension.',
    achievement: 'Spotify Editorial',
    image: '🚀',
    color: 'purple',
    quote: 'SoundForge understood our retro-futuristic vision and helped us bring it to life.',
  },
  {
    name: 'Alex Chen',
    genre: 'Film Score',
    description: 'Composer creating emotionally resonant scores for major motion pictures and documentaries.',
    achievement: 'Emmy Winner',
    image: '🎬',
    color: 'cyan',
    quote: 'The orchestral recording capabilities at SoundForge are world-class. Incredible space.',
  },
  {
    name: 'Neon Nights',
    genre: 'Pop / Dance',
    description: 'High-energy pop duo creating infectious dance tracks that dominate radio and streaming charts.',
    achievement: '300M+ Streams',
    image: '💫',
    color: 'gold',
    quote: 'SoundForge’s production team helped us create our biggest hits. They get our vision.',
  },
] as const

export type Artist = (typeof ARTISTS)[number]
