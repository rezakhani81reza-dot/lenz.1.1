import React from 'react';
import FrameContainer from './FrameContainer';
import ContactSlide from './ContactSlide';

export default function ProductCarousel({ filters, activeFilter, setActiveFilter }) {
  const totalSlides = filters.length;

  const nextSlide = () => {
    if (activeFilter < totalSlides - 1) setActiveFilter(activeFilter + 1);
  };

  const prevSlide = () => {
    if (activeFilter > 0) setActiveFilter(activeFilter - 1);
  };

  return (
    <main className="carousel-section">
      <button className="carousel-arrow left" onClick={prevSlide} disabled={activeFilter === 0}>◀</button>

      <div className="carousel-window">
        <div className="carousel-track" style={{ transform: `translateX(-${activeFilter * 100}%)` }}>
          {filters.map((filter, index) => (
            <div className="carousel-slide" key={index}>
              <FrameContainer>
                {/* شرط بررسی: اگر نام منو یا فیلتر "تماس با ما" بود، کامپوننت نقشه را نشان بده */}
                {filter === 'تماس با ما' ? (
                  <ContactSlide />
                ) : (
                  /* در غیر این صورت صفحات محصولات همان ۱۶ کارت بدون متن باقی می‌مانند */
                  <div className="grid-layout">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="card-item"></div>
                    ))}
                  </div>
                )}
              </FrameContainer>
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-arrow right" onClick={nextSlide} disabled={activeFilter === totalSlides - 1}>▶</button>
    </main>
  );
}