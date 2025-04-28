
import { PlaylistCard } from "./PlaylistCard";

export function HomeView() {
  // Sample data - in a real app, this would be fetched from an API
  const recentlyPlayed = [
    { id: "1", title: "Discover Weekly", description: "Your weekly mixtape of fresh music", coverUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" },
    { id: "2", title: "Liked Songs", description: "Your favorite tracks", coverUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" },
    { id: "3", title: "Chill Vibes", description: "Relaxing beats for your evening", coverUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" },
    { id: "4", title: "Workout Mix", description: "High energy beats to keep you moving", coverUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22" },
  ];

  const madeForYou = [
    { id: "5", title: "Daily Mix 1", description: "Mistral Collective, Lunar Echo and more", coverUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" },
    { id: "6", title: "Daily Mix 2", description: "Electrode, Stellar Waves and more", coverUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" },
    { id: "7", title: "Radar", description: "Stay on top with the latest releases", coverUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" },
    { id: "8", title: "Time Capsule", description: "Songs we think you'll love based on your listening", coverUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22" },
  ];

  return (
    <div className="p-6 overflow-auto pb-24">
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Recently played</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recentlyPlayed.map((playlist) => (
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

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Made for you</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {madeForYou.map((playlist) => (
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

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Jump back in</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[...recentlyPlayed, ...madeForYou].slice(0, 6).map((playlist) => (
            <PlaylistCard 
              key={`recent-${playlist.id}`}
              id={playlist.id}
              title={playlist.title}
              description={playlist.description}
              coverUrl={playlist.coverUrl}
              className="p-3"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
