import React from 'react';
import { Zoom, Fade } from "react-reveal"
import VideoCarousel from "./video_carousel";
import './video.css'


const videoData = [
  { id: '1', title: 'Company Introduction', src: '/intro.mp4', description: 'Learn about our company values and mission' },
  { id: '2', title: 'Product Showcase', src: '/prod.mp4', description: 'Explore our latest products and innovations' },
];

function VideoPlayerPage() {
  return (
    <>
      <main>
        <div className="container">
          <div className="text-center">
            <p className="description">
              Discover our story, products, and success through our curated video collection.
            </p>
          </div>
          <Fade bottom>
          <div className="video-container">
            <VideoCarousel videos={videoData} />
          </div>
          </Fade>
        </div>
      </main>
   

</>
  );
}

export default VideoPlayerPage;