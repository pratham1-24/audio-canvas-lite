
import { useState } from "react";
import { PlaylistCard } from "./PlaylistCard";

// Sample categories with vibrant colors
const categories = [
  { id: "1", name: "Pop", color: "from-pink-500 to-purple-500" },
  { id: "2", name: "Rock", color: "from-red-500 to-orange-500" },
  { id: "3", name: "Hip-Hop", color: "from-yellow-500 to-green-500" },
  { id: "4", name: "Electronic", color: "from-cyan-500 to-blue-500" },
  { id: "5", name: "R&B", color: "from-purple-500 to-indigo-500" },
  { id: "6", name: "Jazz", color: "from-blue-500 to-teal-500" },
  { id: "7", name: "Classical", color: "from-green-500 to-lime-500" },
  { id: "8", name: "Podcasts", color: "from-amber-500 to-yellow-500" },
  { id: "9", name: "Blues", color: "from-indigo-500 to-blue-500" },
  { id: "10", name: "Country", color: "from-orange-500 to-amber-500" },
  { id: "11", name: "Metal", color: "from-slate-500 to-zinc-500" },
  { id: "12", name: "Soul", color: "from-violet-500 to-purple-500" }
];

// Sample playlists data
const searchResults = [
  { id: "1", title: "Today's Top Hits", description: "The hottest tracks right now", coverUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" },
  { id: "2", title: "RapCaviar", description: "New music from Drake, Kendrick Lamar and more", coverUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" },
  { id: "3", title: "Rock Classics", description: "Rock legends & epic songs", coverUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" },
  { id: "4", title: "Chill Hits", description: "Kick back to the best new and recent chill hits", coverUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22" },
];

export function SearchView() {
  const [activeSearch, setActiveSearch] = useState(false);

  return (
    <div className="p-6 overflow-auto pb-24">
      {!activeSearch ? (
        <>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Browse all</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {categories.map((category) => (
                <div 
                  key={category.id}
                  className={`bg-gradient-to-br ${category.color} aspect-square rounded-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-transform`}
                >
                  <div className="p-4">
                    <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Top result</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-spotify-light hover:bg-white/10 p-5 rounded-md transition-all duration-200">
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" 
                    alt="Today's Top Hits" 
                    className="w-32 h-32 rounded shadow-md"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mt-4">Today's Top Hits</h3>
                <p className="text-gray-400 text-sm mt-1 mb-4">Playlist • Spotify</p>
                <button className="bg-purple-primary hover:bg-purple-secondary rounded-full h-10 w-10 flex items-center justify-center shadow-lg transition-colors">
                  <svg className="h-5 w-5 text-white ml-0.5" viewBox="0 0 24 24">
                    <polygon points="5 3 19 12 5 21 5 3" fill="currentColor"></polygon>
                  </svg>
                </button>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Songs</h3>
                <div className="space-y-3">
                  {["Heat Waves", "Blinding Lights", "Stay", "Good 4 U"].map((song, idx) => (
                    <div key={idx} className="flex items-center gap-3 hover:bg-white/5 p-2 rounded-md cursor-pointer group">
                      <img 
                        src={`https://images.unsplash.com/photo-${idx % 2 === 0 ? '1470813740244-df37b8c1edcb' : '1582562124811-c09040d0a901'}`} 
                        alt={song} 
                        className="w-12 h-12 rounded"
                      />
                      <div className="flex-1">
                        <div className="text-white font-medium">{song}</div>
                        <div className="text-gray-400 text-sm">Artist name</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Playlists</h2>
              <button className="text-gray-400 text-sm font-medium hover:text-white hover:underline">
                Show all
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {searchResults.map((playlist) => (
                <PlaylistCard 
                  key={playlist.id}
                  id={playlist.id}
                  title={playlist.title}
                  description={playlist.description}
                  coverUrl={playlist.coverUrl}
                />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
