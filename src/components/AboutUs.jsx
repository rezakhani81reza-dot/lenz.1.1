import React from 'react';

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-video-wrapper">
        {/* پخش خودکار، تکرار، بدون صدا و کنترل برای نمایش روان و سینمایی */}
        <video 
          src="/assets/Screen Recording 2026-06-23 103240.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="about-gif-media"
        />
        
        {/* لایه معرفی روی ویدیو */}
        <div className="about-overlay-content">
          <h1 className="about-company-title">نوآوران لنز طبی</h1>
          <p>نگاهی شفاف‌تر به جهان با پیشرفته‌ترین لنزهای طبی و چشم‌پزشکی استاندارد</p>
        </div>
      </div>
    </div>
  );
}