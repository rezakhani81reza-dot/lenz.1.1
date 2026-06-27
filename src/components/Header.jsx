import React from 'react';

// اضافه شدن پراپ onOpenHeaderModal به ورودی‌های هدر
export default function Header({ activePage, setActivePage, setActiveFilter, cartCount, onOpenCart, onOpenModal }) {
  return (
    <header className="main-header">
      {/* سمت چپ: دکمه‌های سبد خرید و پروفایل کاربری با قابلیت پاپ‌آپ داینامیک */}
      <div className="header-left">
        <button 
          className="icon-btn cart-button"
          onClick={() => {
            if (typeof onOpenCart === 'function') {
              onOpenCart();
            }
          }}
        >
          🛒
          {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}
        </button>

        <button 
          className="icon-btn"
          onClick={() => {
            if (typeof onOpenModal === 'function') {
              onOpenModal('پروفایل کاربری', (
                <div className="flex flex-col gap-4 text-right" dir="rtl">
                  <p className="text-sm text-gray-600 dark:text-gray-300">خوش آمدید! هنوز وارد حساب کاربری خود نشده‌اید.</p>
                  <div className="flex gap-2 justify-start mt-2">
                    <button className="rounded bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
                      ورود به حساب
                    </button>
                    <button className="rounded border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-white hover:bg-gray-50">
                      ثبت‌نام
                    </button>
                  </div>
                </div>
              ));
            }
          }}
        >
          👤
        </button>
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