import React from 'react';
import { Zoom, Fade } from "react-reveal"
import VideoCarousel from './video_carousel';
import WmFooter from "../../component/footer";
import NavBar from "../../component/nav";
import './video.css'


const videoData = [
  { id: '1', title: 'Company Introduction', src: '/intro.mp4', description: 'Learn about our company values and mission' },
  { id: '2', title: 'Product Showcase', src: '/prod.mp4', description: 'Explore our latest products and innovations' },
];

function VideoPlayerPage() {
  return (
    <>
<NavBar active="video" />
    <div className="video-page">
      <main>
        <div className="container">
          <div className="text-center">
            <p className="description">
              Discover our story, products, and success through our curated video collection.
            </p>
          </div>
          <div className="video-container">
            <VideoCarousel videos={videoData} />
          </div>
        </div>
      </main>
      <WmFooter />
  </div>
</>
  );
}

export default VideoPlayerPage;