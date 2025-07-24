'use client'
import React, { useState } from 'react';

// Mock music sample data with categories
const musicSamples = [
  { id: 1, title: 'Electric Guitar Chords - Fire', genre: 'Hip Hop, Soul', bpm: 130, key: 'F min', url: 'https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b7b7b7.mp3', category: 'Guitar', gumroadUrl: 'https://gumroad.com/l/sample1' },
  { id: 2, title: 'Guitar Loop - Escape Stack', genre: 'Rock, Indie', bpm: 153, key: 'F# min', url: 'https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b7b7b8.mp3', category: 'Guitar', gumroadUrl: 'https://gumroad.com/l/sample2' },
  { id: 3, title: 'Muted Funk Riff', genre: 'Funk, Disco', bpm: 112, key: 'D min', url: 'https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b7b7b9.mp3', category: 'Guitar', gumroadUrl: 'https://gumroad.com/l/sample3' },
  { id: 4, title: 'Piano Chill Melody', genre: 'Chill, Lo-fi', bpm: 90, key: 'C maj', url: 'https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b7b7c0.mp3', category: 'Piano', gumroadUrl: 'https://gumroad.com/l/sample4' },
  { id: 5, title: 'Trap Beat', genre: 'Trap, Hip Hop', bpm: 140, key: 'A min', url: 'https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b7b7c1.mp3', category: 'Beats', gumroadUrl: 'https://gumroad.com/l/sample5' },
  { id: 6, title: 'Jazz Sax Groove', genre: 'Jazz', bpm: 110, key: 'Bb maj', url: 'https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b7b7c2.mp3', category: 'Saxophone', gumroadUrl: 'https://gumroad.com/l/sample6' },
  { id: 7, title: 'EDM Drop', genre: 'EDM', bpm: 128, key: 'G min', url: 'https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b7b7c3.mp3', category: 'Beats', gumroadUrl: 'https://gumroad.com/l/sample7' },
  { id: 8, title: 'Classical Strings', genre: 'Classical', bpm: 100, key: 'D maj', url: 'https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b7b7c4.mp3', category: 'Strings', gumroadUrl: 'https://gumroad.com/l/sample8' },
  { id: 9, title: 'Pop Vocal Sample', genre: 'Pop', bpm: 120, key: 'E maj', url: 'https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b7b7c5.mp3', category: 'Vocals', gumroadUrl: 'https://gumroad.com/l/sample9' },
  { id: 10, title: 'Ambient Pad', genre: 'Ambient', bpm: 80, key: 'G maj', url: 'https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b7b7c6.mp3', category: 'Synth', gumroadUrl: 'https://gumroad.com/l/sample10' },
  { id: 11, title: 'Rock Drum Loop', genre: 'Rock', bpm: 110, key: 'A min', url: 'https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b7b7c7.mp3', category: 'Drums', gumroadUrl: 'https://gumroad.com/l/sample11' },
  { id: 12, title: 'Funky Bassline', genre: 'Funk', bpm: 115, key: 'C min', url: 'https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b7b7c8.mp3', category: 'Bass', gumroadUrl: 'https://gumroad.com/l/sample12' },
  { id: 13, title: 'Latin Percussion', genre: 'Latin', bpm: 105, key: 'D min', url: 'https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b7b7c9.mp3', category: 'Percussion', gumroadUrl: 'https://gumroad.com/l/sample13' },
  { id: 14, title: 'Hip Hop Vocal Chop', genre: 'Hip Hop', bpm: 95, key: 'F# min', url: 'https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b7b7d0.mp3', category: 'Vocals', gumroadUrl: 'https://gumroad.com/l/sample14' },
  { id: 15, title: 'Synthwave Lead', genre: 'Synthwave', bpm: 100, key: 'B min', url: 'https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b7b7d1.mp3', category: 'Synth', gumroadUrl: 'https://gumroad.com/l/sample15' },
];

const categories = [
  'All',
  ...Array.from(new Set(musicSamples.map((s) => s.category)))
];

const PAGE_SIZE = 6;

export default function EkartPage() {
  const [cart, setCart] = useState<number[]>([]);
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);

  // Filter and paginate
  const filtered = category === 'All' ? musicSamples : musicSamples.filter(s => s.category === category);
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleAddToCart = (id: number) => {
    setCart((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };
  const handleRemoveFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item !== id));
  };
  const handleCategory = (cat: string) => {
    setCategory(cat);
    setPage(1);
  };

  // Pagination logic for showing only two page numbers
  let pageNumbers = [];
  if (totalPages <= 2) {
    pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else if (page === 1) {
    pageNumbers = [1, 2];
  } else if (page === totalPages) {
    pageNumbers = [totalPages - 1, totalPages];
  } else {
    pageNumbers = [page - 1, page];
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-purple-100 px-0 pb-20">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 py-16 mb-10 text-white text-center shadow-lg">
        <h1 className="text-5xl font-extrabold mb-2 mt-4 tracking-tight drop-shadow-lg">Discover & Buy Music Samples</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">Browse, listen, and purchase high-quality music samples for your next project. Filter by category, preview tracks, and build your custom cart!</p>
      </div>

      {/* Category Filter */}
      <div className="max-w-5xl mx-auto px-4 flex flex-wrap gap-3 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-full font-semibold border transition-all text-sm shadow-sm ${category === cat ? 'bg-blue-600 text-white border-blue-700' : 'bg-white text-blue-700 border-blue-200 hover:bg-blue-100'}`}
            onClick={() => handleCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Music Grid */}
      <div className="max-w-5xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {paged.map((sample) => (
          <div key={sample.id} className="rounded-2xl bg-white/90 shadow-lg p-6 flex flex-col gap-3 group hover:scale-[1.03] hover:shadow-2xl transition-all border border-blue-100">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">{sample.category}</span>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">{sample.genre}</span>
            </div>
            <div className="font-bold text-lg mb-1 text-blue-900 group-hover:text-blue-700 transition">{sample.title}</div>
            <div className="text-xs text-gray-500 mb-2">{sample.bpm} BPM | {sample.key}</div>
            <audio
              src={sample.url}
              controls
              className="w-full rounded-lg border border-blue-100"
            />
            {cart.includes(sample.id) ? (
              <button
                className="mt-2 px-4 py-2 rounded bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                onClick={() => handleRemoveFromCart(sample.id)}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className="mt-2 px-4 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
                onClick={() => handleAddToCart(sample.id)}
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="max-w-5xl mx-auto px-4 flex justify-center gap-2 mt-10 items-center">
        <button
          className={`px-4 py-2 rounded-lg font-semibold border text-sm transition-all ${page === 1 ? 'bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed' : 'bg-white text-blue-700 border-blue-200 hover:bg-blue-100'}`}
          onClick={() => page > 1 && setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        {pageNumbers.map((p) => (
          <button
            key={p}
            className={`px-4 py-2 rounded-lg font-semibold border text-sm transition-all ${page === p ? 'bg-blue-600 text-white border-blue-700' : 'bg-white text-blue-700 border-blue-200 hover:bg-blue-100'}`}
            onClick={() => setPage(p)}
            disabled={page === p}
          >
            {p}
          </button>
        ))}
        <button
          className={`px-4 py-2 rounded-lg font-semibold border text-sm transition-all ${page === totalPages ? 'bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed' : 'bg-white text-blue-700 border-blue-200 hover:bg-blue-100'}`}
          onClick={() => page < totalPages && setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>

      {/* Cart Section */}
      <div className="max-w-3xl mx-auto mt-16 bg-white/95 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900 flex items-center gap-2">
          <span>Your Cart</span>
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">{cart.length}</span>
        </h2>
        {cart.length === 0 ? (
          <div className="text-gray-500 text-center py-8">No items in cart.</div>
        ) : (
          <ul className="divide-y divide-blue-100">
            {cart.map((id) => {
              const sample = musicSamples.find((s) => s.id === id);
              if (!sample) return null;
              return (
                <li key={id} className="flex justify-between items-center py-4">
                  <div>
                    <div className="font-semibold text-blue-800">{sample.title}</div>
                    <div className="text-xs text-gray-500">{sample.category} | {sample.genre}</div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="text-red-500 hover:underline text-sm px-3 py-1 rounded"
                      onClick={() => handleRemoveFromCart(id)}
                    >
                      Remove
                    </button>
                    <a
                      href={sample.gumroadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm"
                    >
                      Buy
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
} 