import React from 'react';
import { Zoom, Fade } from "react-reveal"
import VideoCarousel from './video_carousel';
import WmFooter from "../component/footer";
import NavBar from "../component/nav";

const videoData = [
  { id: '1', title: 'Company Introduction', src: '/intro.mp4', description: 'Learn about our company values and mission' },
  { id: '2', title: 'Product Showcase', src: '/prod.mp4', description: 'Explore our latest products and innovations' },
];

function VideoPlayerPage() {
  return (
    <>
      <NavBar active="video" />
      
      <div className="min-h-screen flex flex-col bg-gray-50">
        <main className="flex-grow py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <Fade left>
              <p className="text-lg text-black-800 max-w-2xl mx-auto">
                Discover our story, products, and success through our curated video collection.
              </p>
              </Fade>
            </div>
               <Fade bottom>
            <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8">
              <VideoCarousel videos={videoData} />
            </div>
            </Fade>
          </div>
        </main>
        <WmFooter />
      </div>
    </>
  );
}

export default VideoPlayerPage;
