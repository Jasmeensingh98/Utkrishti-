import React, { useState } from 'react';
import sampleGif from './image/video.37eeaa3a56d519b18818.gif'
import large_image from './image/bgflip.f0e64e40497dd749ce3c.jpg'
import linkedin from './image/linkedin.cbebb2fa99271ed6977f.jpeg'
import instagram from './image/instagram.9cf71ff33c8d9e6f1c56.jpeg'
import img1 from './image/person1_rep.0ca98a4fab953495089e.jpg'
import img2 from './image/person2_rep.dbd62329c9d4772dbfd3.jpg'
import img3 from './image/person3_rep.6744821f410d5f9e71e4.jpg'
import img4 from './image/person4_rep.fafe3e6554f36162ee97.jpg'
import img5 from './image/person5_rep.6a956e4a16b6a130aa9a.jpg'
import img6 from './image/person6_rep.51453bb9da333659623d.jpg'

import logo from './image/favicon.jpg'
function App() {

  const scrollToOverview = () => {
    const overviewSection = document.getElementById('overview-section');
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToHOME = () => {
    const overviewSection = document.getElementById('home-section');
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToPASTEVENT = () => {
    const overviewSection = document.getElementById('past-events-section');
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollTosocial = () => {
    const overviewSection = document.getElementById('social-section');
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      
      <nav className="bg-transparent p-4 flex justify-between items-center">
      <img src={logo} alt="Favicon" className="h-20 w-20 " />
      
        
        <div className="space-x-4">
          <button className="text-white bg-transparent border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors" onClick={scrollToHOME}>
            Home
          </button>
          <button className="text-white bg-transparent border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors" onClick={scrollToOverview}>
            Overview
          </button>
          <button className="text-white bg-transparent border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors" onClick={scrollToPASTEVENT}>
            Past Events
          </button>
          <button className="text-white bg-transparent border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors" onClick={scrollTosocial}>
            Social Links
          </button>
        </div>
      </nav>
      <main className="container mx-auto p-8" style={{ padding: '5%' }}>
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-start lg:items-center mb-8">
          <div className="text-white text-left lg:order-1">
            <h1 className="text-orange-500 text-5xl font-bold mb-4">UTKRISHTI</h1>
            <p>Welcome to the UTKRISHTI event. We are excited to have you here!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus eos cupiditate, iste ab a necessitatibus enim! Minima iste nemo beatae eum sapiente reprehenderit fugiat, consequatur, inventore quis veniam, veritatis enim.</p>
              <p>Join us for an amazing experience filled with insightful sessions and engaging activities.</p>
          </div>
          <div className="rounded-lg overflow-hidden relative lg:order-2 flex justify-center items-center">
          <img src={sampleGif} alt="Sample GIF" className="rounded-lg cursor-pointer"/>
          </div>
        </div>
        <div className="register-section w-full flex items-center mb-4">
          <button className="text-white bg-orange-500 px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
            Register
          </button>
          <hr className="w-full border-gray-300 mt-4 mb-4" />
          <div className="stars flex items-center">
            <svg className="star w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.429 8.195 1.18-5.916 5.753 1.397 8.151L12 18.896l-7.344 3.874 1.397-8.151-5.916-5.753 8.195-1.18L12 .587z" />
            </svg>
            <svg className="star w-8 h-8 text-white mx-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.429 8.195 1.18-5.916 5.753 1.397 8.151L12 18.896l-7.344 3.874 1.397-8.151-5.916-5.753 8.195-1.18L12 .587z" />
            </svg>
            <svg className="star w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.429 8.195 1.18-5.916 5.753 1.397 8.151L12 18.896l-7.344 3.874 1.397-8.151-5.916-5.753 8.195-1.18L12 .587z" />
            </svg>
          </div>
        </div>
        <div className="overview-section relative bg-gray-800 rounded-lg" style={{ borderTopLeftRadius: '100px', borderTopRightRadius: '100px'  }}id="overview-section">
        <img src={large_image} alt="Large Image" className="w-full h-500px object-cover" style={{ height: '500px', borderTopLeftRadius: '100px', borderTopRightRadius: '100px' }} />
          <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4">
            <svg className="w-8 h-8 text-black animate-spin" fill="currentColor" viewBox="0 0 24 24" style={{ animation: 'spin 2s linear infinite' }}>
              <path d="M12 1l5 5-1.5 1.5L12 4V0H8v4l-3.5 3.5L3 6l5-5m9 8l-5-5 1.5-1.5L12 4v4h4l-4 4h6v-6l-1.5 1.5L21 6z" />
            </svg>
          </div>
        </div>
        <div className="moving-text text-5xl text-orange-500 font-bold">
          <span className="animate-marquee">UTKRISHTI</span>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <section className="past-events-section" id="past-events-section">
          <h2 className="text-3xl font-bold text-white-900 mb-4">PAST EVENTS</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Replace with your image components */}
            <div className="rounded-lg overflow-hidden bg-gray-300 h-64"><img src={img1} alt="Favicon" className="h-64  w-8 mx-auto mb-4" /></div>
            <div className="rounded-lg overflow-hidden bg-gray-300 h-64"><img src={img2} alt="Favicon" className="h-64 w-8 mx-auto mb-4" /></div>
            <div className="rounded-lg overflow-hidden bg-gray-300 h-64"><img src={img3} alt="Favicon" className="h-64 w-8 mx-auto mb-4" /></div>
            <div className="rounded-lg overflow-hidden bg-gray-300 h-64"><img src={img4} alt="Favicon" className="h-64 w-8 mx-auto mb-4" /></div>
            <div className="rounded-lg overflow-hidden bg-gray-300 h-64"><img src={img5} alt="Favicon" className="h-64 w-8 mx-auto mb-4" /></div>
            <div className="rounded-lg overflow-hidden bg-gray-300 h-64"><img src={img6} alt="Favicon" className="h-64 w-8 mx-auto mb-4" /></div>
          </div>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <section className="social-section mt-8" id="social-section">
        <h2 className="text-7xl font-bold text-white mb-4">SOCIAL</h2>

          <div className="flex items-center justify-between">
            <img src={linkedin} alt="LinkedIn Logo" className="h-auto w-64" />
            <div className="text-white font-bold text-7xl">
            <h1><b>Follow us on</b></h1>
            <p><b>LinkedIn</b></p>
            <p><b>Instagram</b></p>
            </div>
            <img src={instagram} alt="Instagram Logo" className="h-auto w-64" />
          </div>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <footer className="text-center mt-8">
          <img src={logo} alt="Favicon" className="h-8 w-8 mx-auto mb-4" />
          <p className="text-orange-500 text-lg mb-2">PRIVACY POLICY</p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2">COPYRIGHT @ALL RIGHTS RESERVED</p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2"></p>
          <p className="text-orange-500 text-lg mb-2">TERMS & CONDITIONS</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
