import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import "./video_carousel.css";

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
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimerRef = useRef<NodeJS.Timeout>();

  const handlePlayPause = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
      showControlsTemporarily();
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      showControlsTemporarily();
    }
  };

  const goToVideo = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.src = videos[index].src;
      videoRef.current.play();
    }
    showControlsTemporarily();
  };

  const showControlsTemporarily = () => {
    setShowControls(true);
    if (controlsTimerRef.current) {
      clearTimeout(controlsTimerRef.current);
    }
    controlsTimerRef.current = setTimeout(() => {
      setShowControls(false);
    }, 5000);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    return () => {
      if (controlsTimerRef.current) {
        clearTimeout(controlsTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleEnded = () => {
        goToVideo((currentIndex + 1) % videos.length);
      };
      video.addEventListener("ended", handleEnded);
      return () => video.removeEventListener("ended", handleEnded);
    }
  }, [currentIndex, videos.length]);

  return (
    <div className="carousel-container">
      <div className="video-wrapper"
           onMouseMove={showControlsTemporarily}
           onMouseEnter={() => setShowControls(true)}
           onMouseLeave={() => setTimeout(() => setShowControls(false), 2000)}>
        <video
          ref={videoRef}
          src={videos[currentIndex].src}
          className="video-element"
          autoPlay
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {showControls && (
          <div className="video-controls">
            <button onClick={handlePlayPause} className="control-button">
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            <h3 className="video-title">{videos[currentIndex].title}</h3>
            <button onClick={handleMute} className="control-button">
              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>
          </div>
        )}
      </div>

      <div className="navigation-controls">
        <button
          onClick={() => goToVideo((currentIndex - 1 + videos.length) % videos.length)}
          className="nav-button"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => goToVideo((currentIndex + 1) % videos.length)}
          className="nav-button"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;