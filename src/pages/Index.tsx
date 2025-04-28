
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { MusicSidebar } from "@/components/MusicSidebar";
import { MusicPlayer } from "@/components/MusicPlayer";
import { TopBar } from "@/components/TopBar";
import { PlaylistView } from "@/components/PlaylistView";
import { HomeView } from "@/components/HomeView";
import { SearchView } from "@/components/SearchView";

const Index = () => {
  const location = useLocation();
  const [view, setView] = useState("home");

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setView("home");
    } else if (path.includes("/search")) {
      setView("search");
    } else if (path.includes("/playlist")) {
      setView("playlist");
    }
  }, [location]);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-spotify-dark text-white">
      <div className="flex flex-1 overflow-hidden">
        <MusicSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopBar />
          <div className="flex-1 overflow-y-auto">
            {view === "home" && <HomeView />}
            {view === "search" && <SearchView />}
            {view === "playlist" && <PlaylistView />}
          </div>
        </div>
      </div>
      <MusicPlayer />
    </div>
  );
};

export default Index;
