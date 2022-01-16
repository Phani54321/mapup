import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>WELCOME TO MapUp</h1>
      <p>Scroll down for maps</p>
      
    </div>
  );
}

export default HeroSection;
