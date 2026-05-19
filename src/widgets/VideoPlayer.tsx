import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Play, Pause, Volume2, VolumeX, Maximize, ChevronLeft, Settings, Subtitles, SkipForward } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn, formatDuration } from '@/shared/lib/utils';

interface VideoPlayerProps {
  url: string;
  title: string;
  onBack: () => void;
}

export const VideoPlayer = ({ url, title, onBack }: VideoPlayerProps) => {
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const playerRef = useRef<ReactPlayer>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (playing) setShowControls(false);
    }, 3000);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, [playing]);

  const togglePlay = () => setPlaying(!playing);
  const toggleMute = () => setMuted(!muted);

  const handleProgress = (state: { played: number }) => {
    if (!seeking) setPlayed(state.played);
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseDown = () => setSeeking(true);
  const handleSeekMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    setSeeking(false);
    playerRef.current?.seekTo(parseFloat((e.target as HTMLInputElement).value));
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current?.requestFullscreen();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-black group overflow-hidden select-none"
      onMouseMove={handleMouseMove}
    >
      <ReactPlayer
        ref={playerRef}
        url={url}
        width="100%"
        height="100%"
        playing={playing}
        volume={volume}
        muted={muted}
        onProgress={handleProgress}
        onDuration={(d) => setDuration(d)}
        progressInterval={500}
        style={{ pointerEvents: 'none' }}
      />

      {/* Overlay Controls */}
      <div className={cn(
        "absolute inset-0 z-10 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-transparent to-black/60",
        showControls ? "opacity-100" : "opacity-0"
      )}>
        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 p-6 flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
          >
            <ChevronLeft size={32} />
          </button>
          <h2 className="text-xl font-bold text-white uppercase tracking-tight">{title}</h2>
        </div>

        {/* Center Play/Pause */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="p-8 bg-accent/80 hover:bg-accent text-white rounded-full transition-all transform hover:scale-110 active:scale-95"
          >
            {playing ? <Pause size={48} fill="currentColor" /> : <Play size={48} fill="currentColor" className="ml-2" />}
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          {/* Progress Slider */}
          <div className="flex flex-col gap-4 mb-6">
            <input
              type="range"
              min={0}
              max={0.999999}
              step="any"
              value={played}
              onMouseDown={handleSeekMouseDown}
              onChange={handleSeekChange}
              onMouseUp={handleSeekMouseUp}
              className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between text-sm font-medium text-gray-300">
              <span>{formatDuration(played * duration)}</span>
              <span>{formatDuration(duration)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <button onClick={togglePlay} className="text-white hover:text-accent transition-colors">
                {playing ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" />}
              </button>

              <div className="flex items-center gap-3 group/volume">
                <button onClick={toggleMute} className="text-white hover:text-accent transition-colors">
                  {muted || volume === 0 ? <VolumeX size={28} /> : <Volume2 size={28} />}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step="any"
                  value={muted ? 0 : volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-0 group-hover/volume:w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white transition-all overflow-hidden"
                />
              </div>

              <button className="text-white hover:text-accent transition-colors flex items-center gap-2">
                <SkipForward size={28} />
                <span className="text-sm font-bold hidden sm:inline">NEXT EPISODE</span>
              </button>
            </div>

            <div className="flex items-center gap-6">
              <button className="text-white hover:text-accent transition-colors">
                <Subtitles size={24} />
              </button>
              <button className="text-white hover:text-accent transition-colors">
                <Settings size={24} />
              </button>
              <button onClick={toggleFullscreen} className="text-white hover:text-accent transition-colors">
                <Maximize size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
