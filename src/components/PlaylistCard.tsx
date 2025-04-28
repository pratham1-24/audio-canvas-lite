
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaylistCardProps {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  className?: string;
}

export function PlaylistCard({ id, title, description, coverUrl, className }: PlaylistCardProps) {
  return (
    <div 
      className={cn(
        "group relative bg-spotify-light hover:bg-white/10 p-4 rounded-md transition-all duration-200 cursor-pointer",
        className
      )}
    >
      <div className="mb-4 relative">
        <img 
          src={coverUrl} 
          alt={title} 
          className="w-full aspect-square object-cover rounded shadow-md"
        />
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button className="bg-purple-primary h-10 w-10 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
            <Play size={20} className="text-white ml-1" />
          </button>
        </div>
      </div>
      <h3 className="text-white font-medium truncate">{title}</h3>
      <p className="text-gray-400 text-sm line-clamp-2 mt-1">{description}</p>
    </div>
  );
}
