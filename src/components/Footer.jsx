import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container-inner">
        {/* سمت چپ: نمادهای مینیاتوری و لوکس (مثلاً اینماد و ساماندهی به صورت شیک) */}
        <div className="footer-badges">
          <div className="mini-badge-glow"></div>
          <div className="mini-badge-glow"></div>
        </div>

        {/* مرکز: متن کپی رایت با فونت تمیز */}
        <div className="footer-copyright">
          <span>© {currentYear} تمامی حقوق برای مجموعه لنزهای طبی محفوظ است.</span>
        </div>

        {/* سمت راست: دسترسی‌های سریع و مینی‌مال */}
        <div className="footer-links-quick">
          <a href="#privacy">قوانین و مقررات</a>
          <span className="footer-divider">|</span>
          <a href="#support">پشتیبانی ۲۴ ساعته</a>
        </div>
      </div>
    </footer>
  );
}