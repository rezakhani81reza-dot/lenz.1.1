import React from 'react';

export default function Header({ activePage, setActivePage, setActiveFilter }) {
  return (
    <header className="main-header">
      {/* سمت چپ: دکمه‌های سبد خرید و پروفایل کاربری */}
      <div className="header-left">
        <button className="icon-btn">🛒</button>
        <button className="icon-btn">👤</button>
      </div>

      {/* سمت راست: منوهای ناوبری شیک وب‌سایت */}
      <div className="header-right">
        {/* تماس با ما */}
        <a 
          href="#contact" 
          className={activePage === 'contact' ? 'active' : ''} 
          onClick={(e) => {
            e.preventDefault();
            setActivePage('contact');
          }}
        >
          تماس با ما
        </a>

        {/* درباره ما */}
        <a 
          href="#about" 
          className={activePage === 'about' ? 'active' : ''} 
          onClick={(e) => {
            e.preventDefault();
            setActivePage('about');
          }}
        >
          درباره ما
        </a>

        {/* راهنما */}
        <a 
          href="#help" 
          className={activePage === 'help' ? 'active' : ''} 
          onClick={(e) => {
            e.preventDefault();
            setActivePage('help');
          }}
        >
          راهنما
        </a>

        {/* بلاگ */}
        <a 
          href="#blog" 
          className={activePage === 'blog' ? 'active' : ''} 
          onClick={(e) => {
            e.preventDefault();
            setActivePage('blog');
          }}
        >
          بلاگ
        </a>

        {/* محصولات (بازگشت به خانه و اسلایدر کارت‌ها) */}
        <a 
          href="#products" 
          className={activePage === 'products' ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault();
            setActivePage('products');
            setActiveFilter(0); // ریست کردن اسلایدر روی اولین دسته محصولات
          }}
        >
          محصولات
        </a>
      </div>
    </header>
  );
}