
import { useState, useRef, useEffect } from "react";
import { 
  Play,
  Pause,
  SkipBack, 
  SkipForward, 
  Volume2,
  VolumeX,
  Shuffle, 
  Repeat, 
  Heart
} from "lucide-react";
import { Slider } from "./ui/slider";

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  coverArt: string;
}

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const progressInterval = useRef<number | null>(null);

  // This would come from props or context in a real app
  const currentTrack: Track = {
    id: "t1",
    title: "Purple Haze",
    artist: "Mistral Collective",
    album: "Synthwave Dreams",
    duration: 237, // in seconds
    coverArt: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
  };

  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = window.setInterval(() => {
        setProgress(prev => {
          if (prev >= currentTrack.duration) {
            clearInterval(progressInterval.current!);
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [isPlaying, currentTrack.duration]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);
  const toggleLike = () => setIsLiked(!isLiked);
  const toggleShuffle = () => setIsShuffle(!isShuffle);
  const toggleRepeat = () => setIsRepeat(!isRepeat);

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume[0]);
    if (isMuted && newVolume[0] > 0) setIsMuted(false);
  };

  const handleProgressChange = (newProgress: number[]) => {
    setProgress(newProgress[0]);
    // In a real app, we would also seek the audio to this position
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-spotify-darker border-t border-zinc-800">
      {/* Currently playing track */}
      <div className="flex items-center gap-4 w-1/4">
        <div className="h-14 w-14 rounded-md overflow-hidden">
          <img 
            src={currentTrack.coverArt} 
            alt={`${currentTrack.title} cover`} 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-white">{currentTrack.title}</span>
          <span className="text-xs text-gray-400">{currentTrack.artist}</span>
        </div>
        <button 
          onClick={toggleLike}
          className="ml-4 focus:outline-none"
        >
          <Heart 
            size={18} 
            className={`${isLiked ? 'fill-purple-primary text-purple-primary' : 'text-gray-400'} hover:text-white transition-colors`} 
          />
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center justify-center w-2/4">
        <div className="flex items-center gap-6">
          <button 
            onClick={toggleShuffle}
            className={`focus:outline-none ${isShuffle ? 'text-purple-primary' : 'text-gray-400'} hover:text-white transition-colors`}
          >
            <Shuffle size={18} />
          </button>
          <button className="focus:outline-none text-gray-400 hover:text-white transition-colors">
            <SkipBack size={22} />
          </button>
          <button 
            onClick={togglePlay}
            className="bg-white rounded-full p-2 focus:outline-none hover:scale-105 transition-transform"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
          </button>
          <button className="focus:outline-none text-gray-400 hover:text-white transition-colors">
            <SkipForward size={22} />
          </button>
          <button 
            onClick={toggleRepeat}
            className={`focus:outline-none ${isRepeat ? 'text-purple-primary' : 'text-gray-400'} hover:text-white transition-colors`}
          >
            <Repeat size={18} />
          </button>
        </div>
        <div className="w-full flex items-center gap-2 px-4 mt-1">
          <span className="text-xs text-gray-400 w-8 text-right">{formatTime(progress)}</span>
          <Slider
            className="w-full"
            defaultValue={[0]}
            value={[progress]}
            max={currentTrack.duration}
            step={1}
            onValueChange={handleProgressChange}
          />
          <span className="text-xs text-gray-400 w-8">{formatTime(currentTrack.duration)}</span>
        </div>
      </div>

      {/* Volume controls */}
      <div className="flex items-center justify-end gap-2 w-1/4">
        <button 
          onClick={toggleMute}
          className="text-gray-400 hover:text-white transition-colors focus:outline-none"
        >
          {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        <Slider
          className="w-24"
          defaultValue={[70]}
          value={[isMuted ? 0 : volume]}
          max={100}
          step={1}
          onValueChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}
