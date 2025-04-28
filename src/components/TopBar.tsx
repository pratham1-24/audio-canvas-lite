
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, Bell, Clock, Search, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export function TopBar() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const showSearch = location.pathname.includes("/search");

  return (
    <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-spotify-dark bg-opacity-95 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="bg-black/40 text-white rounded-full h-8 w-8">
            <ChevronLeft size={18} />
          </Button>
          <Button variant="ghost" size="icon" className="bg-black/40 text-white rounded-full h-8 w-8">
            <ChevronRight size={18} />
          </Button>
        </div>
        
        {showSearch && (
          <div className="flex-1 relative ml-4">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
            <Input
              className="rounded-full pl-9 bg-spotify-light border-none focus:ring-1 focus:ring-white/50 h-10 w-80"
              placeholder="What do you want to listen to?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" className="rounded-full bg-black/40 text-white border-none hover:bg-spotify-light">
          Upgrade
        </Button>
        <Button variant="ghost" size="icon" className="bg-black/40 text-white rounded-full h-8 w-8">
          <Bell size={18} />
        </Button>
        <Avatar className="h-8 w-8 cursor-pointer">
          <AvatarImage src="https://images.unsplash.com/photo-1500673922987-e212871fec22" />
          <AvatarFallback className="bg-purple-secondary text-white">JD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
