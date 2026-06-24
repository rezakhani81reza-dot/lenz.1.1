import React from 'react';

export default function ContactSlide() {
  return (
    <div className="contact-slide-container">
      {/* سمت چپ: اطلاعات تماس و شبکه‌های اجتماعی */}
      <div className="contact-info-side">
        <div className="phone-numbers">
          <p>تلفن : 0921242344</p>
          <p>تلفن : 3934234534</p>
        </div>
        
        <h2 className="contact-title">با ما در ارتباط باشید</h2>
        
        <div className="social-media-grid">
          <div className="social-item">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-circle instagram">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" />
            </a>
            <span>اینستاگرام</span>
          </div>
          <div className="social-item">
            <a href="https://telegram.org" target="_blank" rel="noreferrer" className="social-circle telegram">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" />
            </a>
            <span>تلگرام</span>
          </div>
          <div className="social-item">
            <a href="#rubika" className="social-circle rubika">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Rubika_logo.svg" alt="Rubika" onerror={(e)=>{e.target.src="https://img.icons8.com/color/96/apps.png"}} />
            </a>
            <span>روبیکا</span>
          </div>
          <div className="social-item">
            <a href="#bale" className="social-circle bale">
              <img src="https://img.icons8.com/fluency/96/chat-settings.png" alt="Bale" />
            </a>
            <span>بله</span>
          </div>
        </div>
      </div>

      {/* سمت راست: نقشه و فاصله */}
      <div className="contact-map-side">
        <div className="map-wrapper">
          <iframe 
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103684.34816399128!2d51.33446059726563!3d35.70054710000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e01ca36fe8035%3A0xe78fa84fa3f44ed5!2sTehran%20Province%2C%20Tehran%2C%20Iran!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
        <div className="distance-badge">
          <span>فاصله تا شهر تهران: ۳۵ کیلومتر</span>
        </div>
      </div>
    </div>
  );
}