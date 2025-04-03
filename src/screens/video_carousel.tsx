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
  const [isPlaying, setIsPlaying] = useState(true); // Default to playing
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true); // Controls visible initially
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play/Pause Toggle
  const handlePlayPause = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
      setShowControls(true); // Show controls when interacting
    }
  };

  // Mute/Unmute Toggle
  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Change Video
  const goToVideo = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.src = videos[index].src;
      videoRef.current.play();
    }
  };

  // Auto-hide controls after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowControls(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isPlaying]);

  // Auto-play video on page load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  // Auto-move to next video when current video ends
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", () => {
        goToVideo((currentIndex + 1) % videos.length);
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full">
      {/* Video Container */}
      <div className="aspect-video relative rounded-xl overflow-hidden bg-black w-full h-full">
        <video
          ref={videoRef}
          src={videos[currentIndex].src}
          className="absolute w-full h-full object-contain"
          autoPlay
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onMouseMove={() => setShowControls(true)} // Show controls on hover
        />

        {/* Video Controls (Hidden after 5 seconds) */}
        {showControls && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex justify-between items-center transition-opacity duration-500">
            <button onClick={handlePlayPause} className="text-white hover:text-blue-400 transition">
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            <h3 className="text-white text-sm sm:text-base">{videos[currentIndex].title}</h3>
            <button onClick={handleMute} className="text-white hover:text-blue-400 transition">
              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-6 px-4">
        <button
          onClick={() => goToVideo((currentIndex - 1 + videos.length) % videos.length)}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => goToVideo((currentIndex + 1) % videos.length)}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
