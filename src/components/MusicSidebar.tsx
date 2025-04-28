
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ListMusic, 
  Home, 
  Search, 
  Library, 
  Plus, 
  Heart,
  ChevronDown,
  Pin
} from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";

interface Playlist {
  id: string;
  name: string;
  isPinned?: boolean;
}

export function MusicSidebar() {
  const [playlists, setPlaylists] = useState<Playlist[]>([
    { id: "1", name: "Discover Weekly", isPinned: true },
    { id: "2", name: "Liked Songs", isPinned: true },
    { id: "3", name: "Chill Vibes" },
    { id: "4", name: "Workout Mix" },
    { id: "5", name: "Study Lounge" },
    { id: "6", name: "Road Trip" },
    { id: "7", name: "Throwback Hits" },
    { id: "8", name: "Morning Coffee" },
    { id: "9", name: "Evening Wind Down" },
  ]);

  return (
    <div className="flex flex-col h-full bg-spotify-darker w-64 shrink-0">
      {/* Navigation */}
      <div className="p-4 space-y-2">
        <div className="mb-6 flex items-center">
          <span className="text-xl font-bold text-white">Musicly</span>
        </div>
        <Link to="/" className="flex items-center gap-3 text-gray-300 hover:text-white py-2 px-3 rounded-md hover:bg-spotify-light transition-colors duration-200">
          <Home size={22} />
          <span>Home</span>
        </Link>
        <Link to="/search" className="flex items-center gap-3 text-gray-300 hover:text-white py-2 px-3 rounded-md hover:bg-spotify-light transition-colors duration-200">
          <Search size={22} />
          <span>Search</span>
        </Link>
      </div>

      {/* Library Section */}
      <div className="flex-1 overflow-hidden flex flex-col mt-2">
        <div className="bg-spotify-light bg-opacity-40 mx-2 rounded-lg flex flex-col">
          <div className="p-3 pb-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer px-2 py-1 rounded-md hover:bg-white/10">
                <Library size={20} />
                <span className="font-medium">Your Library</span>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 text-gray-300 hover:text-white hover:bg-white/10">
                  <Plus size={18} />
                </Button>
              </div>
            </div>
          </div>

          <div className="px-2 py-2">
            <div className="flex gap-2 mb-4">
              <Button variant="outline" size="sm" className="bg-white/10 hover:bg-white/20 text-white border-none text-xs rounded-full">
                Playlists
              </Button>
              <Button variant="outline" size="sm" className="bg-white/10 hover:bg-white/20 text-white border-none text-xs rounded-full">
                Albums
              </Button>
            </div>
          </div>

          <ScrollArea className="flex-1 px-2 pb-2" style={{ height: 'calc(100vh - 14rem)' }}>
            <div className="space-y-2">
              {playlists.map((playlist) => (
                <Link 
                  key={playlist.id}
                  to={`/playlist/${playlist.id}`}
                  className={cn(
                    "flex items-center justify-between p-2 rounded-md hover:bg-white/10 group",
                    playlist.id === "1" ? "bg-white/10" : ""
                  )}
                >
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      "h-10 w-10 flex items-center justify-center rounded",
                      playlist.id === "2" ? "bg-gradient-to-br from-purple-600 to-purple-900" : "bg-spotify-light"
                    )}>
                      {playlist.id === "2" ? (
                        <Heart size={16} className="text-white" />
                      ) : (
                        <ListMusic size={16} className="text-gray-300" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white truncate max-w-[120px]">{playlist.name}</span>
                      <span className="text-xs text-gray-400">Playlist</span>
                    </div>
                  </div>
                  {playlist.isPinned && (
                    <Pin size={14} className="text-purple-primary opacity-60 mr-2" />
                  )}
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
