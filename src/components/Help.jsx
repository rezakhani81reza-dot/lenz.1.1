import React from 'react';

export default function Help({ setActivePage }) {
  // دیتای مربوط به کارت‌های راهنما و لینک مقالات آن‌ها در بلاگ
  const guideCards = [
    { id: 'choose-lens', title: 'چگونه لنز انتخاب کنیم' },
    { id: 'use-lens', title: 'نحوه استفاده لنز های مختلف' }
  ];

  const handleCardClick = (articleId) => {
    // منتقل کردن کاربر به صفحه بلاگ با فرستادن شناسه مقاله (اختیاری برای آینده)
    setActivePage('blog');
  };

  return (
    <div className="help-page-container">
      {/* بخش اصلی سمت راست و مرکز: عنوان و کارت‌های راهنما */}
      <div className="help-content-side">
        <h2 className="help-main-title">ما در این صفحه میخواهیم به سوالات شما پاسخ دهیم.</h2>
        
        <div className="help-cards-grid">
          {guideCards.map((card) => (
            <div 
              key={card.id} 
              className="help-guide-card"
              onClick={() => handleCardClick(card.id)}
            >
              <div className="card-glass-glow"></div>
              <span>{card.title}</span>
              <div className="card-arrow-icon">←</div>
            </div>
          ))}
        </div>
      </div>

      {/* بخش سمت چپ: تصویر پرسنل و دکمه سوالات متداول */}
      <div className="help-sidebar-side">
        <div className="avatar-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" 
            alt="پشتیبانی لنز" 
            className="help-avatar-img"
          />
        </div>
        <div className="faq-trigger-zone">
          <h3 className="faq-title">سوالات متداول</h3>
          <button className="faq-link-btn" onClick={() => handleCardClick('faq')}>
            کلیک کنید
          </button>
        </div>
      </div>
    </div>
  );
}