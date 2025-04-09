import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";

interface Video {
  id: string;
  title: string;
  src: string;
}

interface VideoCarouselProps {
  videos: Video[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const controlsTimerRef = useRef<NodeJS.Timeout>();

  // Show controls briefly
  const showControlsTemporarily = () => {
    setShowControls(true);
    if (controlsTimerRef.current) clearTimeout(controlsTimerRef.current);
    controlsTimerRef.current = setTimeout(() => setShowControls(false), 3000);
  };

  // Play/pause toggle
  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    showControlsTemporarily();
  };

  // Mute/unmute toggle
  const handleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
    showControlsTemporarily();
  };


  // Auto-advance on end
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    const onEnded = () => goToVideo((currentIndex + 1) % videos.length);
    videoEl.addEventListener("ended", onEnded);
    return () => videoEl.removeEventListener("ended", onEnded);
  }, [currentIndex, videos.length]);

  // Intersection Observer: autoplay & unmute on enter, pause on leave
  useEffect(() => {
    const wrapperEl = wrapperRef.current;
    const videoEl = videoRef.current;
    if (!wrapperEl || !videoEl) return;
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Auto-play and unmute when in view
            videoEl.muted = false;
            setIsMuted(false);
            videoEl.play();
            setIsPlaying(true);
          } else {
            // Pause when out of view
            videoEl.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0 } // Trigger as soon as any part is visible
    );
  
    observer.observe(wrapperEl);
    return () => observer.disconnect();
  }, []);
  

  return (
    <div ref={wrapperRef} className="carousel-container w-full mx-auto">
      <div
        className="video-wrapper relative aspect-video rounded-xl overflow-hidden bg-black shadow-lg"
        onMouseMove={showControlsTemporarily}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setTimeout(() => setShowControls(false), 2000)}
      >
       <video
  ref={videoRef}
  src={videos[currentIndex].src}
  className="video-element absolute w-full h-full object-cover cursor-pointer"
  playsInline
  preload="auto"
  loop                 
  onClick={handlePlayPause}
  onTouchStart={handlePlayPause}
/>
        {showControls && (
          <div className="video-controls absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3 flex justify-between items-center transition-opacity duration-300">
            <button onClick={handlePlayPause} className="control-button bg-transparent p-2 rounded-full hover:bg-white/10 transition">
              {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
            </button>
            <h3 className="video-title text-white text-lg font-medium drop-shadow">
              {videos[currentIndex].title}
            </h3>
            <button onClick={handleMute} className="control-button bg-transparent p-2 rounded-full hover:bg-white/10 transition">
              {isMuted ? <VolumeX className="w-6 h-6 text-white" /> : <Volume2 className="w-6 h-6 text-white" />}
            </button>
          </div>
        )}
      </div>

      
    </div>
  );
};

export default VideoCarousel;
