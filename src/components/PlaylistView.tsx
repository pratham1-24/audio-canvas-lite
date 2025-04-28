
import { useState } from "react";
import { Clock, Heart, MoreHorizontal, Play, Pause } from "lucide-react";
import { Button } from "./ui/button";

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  plays: number;
  dateAdded: string;
}

export function PlaylistView() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null);
  
  const playlistTracks: Track[] = [
    { id: "t1", title: "Purple Haze", artist: "Mistral Collective", album: "Synthwave Dreams", duration: "3:57", plays: 1254670, dateAdded: "2 days ago" },
    { id: "t2", title: "Midnight City", artist: "Lunar Echo", album: "Neon Streets", duration: "4:22", plays: 987230, dateAdded: "3 days ago" },
    { id: "t3", title: "Digital Horizons", artist: "Electrode", album: "Future Bass", duration: "3:15", plays: 1876540, dateAdded: "1 week ago" },
    { id: "t4", title: "Cosmic Drift", artist: "Stellar Waves", album: "Galaxy Cruise", duration: "5:03", plays: 678450, dateAdded: "2 weeks ago" },
    { id: "t5", title: "Neural Dance", artist: "Synaptic Pulse", album: "Brain Waves", duration: "3:45", plays: 2134560, dateAdded: "3 weeks ago" },
    { id: "t6", title: "Quantum Dream", artist: "Electron Flow", album: "Particle Shift", duration: "4:11", plays: 897650, dateAdded: "1 month ago" },
    { id: "t7", title: "Astral Journey", artist: "Nova Cascade", album: "Interstellar", duration: "6:22", plays: 765430, dateAdded: "1 month ago" },
    { id: "t8", title: "Cyber Pulse", artist: "Digital Frontier", album: "Neon Horizon", duration: "4:43", plays: 1324560, dateAdded: "2 months ago" },
    { id: "t9", title: "Electric Dreams", artist: "Volt Vision", album: "Current Flow", duration: "3:38", plays: 987650, dateAdded: "2 months ago" },
    { id: "t10", title: "Synth Paradise", artist: "Wave Generator", album: "Frequency Shift", duration: "5:17", plays: 876540, dateAdded: "3 months ago" },
  ];

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="flex flex-col pb-20">
      {/* Playlist header */}
      <div className="flex p-6 bg-gradient-to-b from-purple-700/40 to-spotify-dark">
        <div className="h-52 w-52 mr-6 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
            alt="Playlist cover" 
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="flex flex-col justify-end">
          <div className="text-sm text-gray-300 mb-2">PLAYLIST</div>
          <h1 className="text-6xl font-bold mb-6 text-white">Discover Weekly</h1>
          <div className="flex items-center text-sm text-gray-300">
            <span>Created for you • 10 songs, 45 min</span>
          </div>
        </div>
      </div>

      {/* Controls and track list */}
      <div className="px-6 py-4">
        <div className="flex items-center gap-6 mb-6">
          <Button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="rounded-full bg-purple-primary hover:bg-purple-secondary h-14 w-14 flex items-center justify-center shadow-lg"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
          </Button>
        </div>

        {/* Track list */}
        <table className="w-full text-left text-gray-300 text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase text-gray-400">
              <th className="w-10 px-2 py-3">#</th>
              <th className="py-3">Title</th>
              <th className="py-3">Album</th>
              <th className="py-3">Date Added</th>
              <th className="py-3 text-right px-4">
                <Clock size={16} />
              </th>
            </tr>
          </thead>
          <tbody>
            {playlistTracks.map((track, index) => (
              <tr 
                key={track.id} 
                className="hover:bg-white/5 group"
                onMouseEnter={() => setHoveredTrack(track.id)}
                onMouseLeave={() => setHoveredTrack(null)}
              >
                <td className="px-2 py-3">
                  {hoveredTrack === track.id ? (
                    <button className="text-white">
                      <Play size={16} />
                    </button>
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </td>
                <td className="py-3">
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <span className="text-white font-medium">{track.title}</span>
                      <span className="text-gray-400">{track.artist}</span>
                    </div>
                  </div>
                </td>
                <td className="py-3">{track.album}</td>
                <td className="py-3">{track.dateAdded}</td>
                <td className="py-3 text-right">
                  <div className="flex items-center justify-end gap-4">
                    <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-white transition-colors">
                      <Heart size={16} />
                    </button>
                    <span>{track.duration}</span>
                    <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-white transition-colors">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
