
import React from 'react';

export default function Blog() {
  // دیتای نمونه مقالات بلاگ تخصصی لنز طبی
  const blogPosts = [
    { id: 1, title: 'راهنمای جامع انتخاب لنز طبی بر اساس نمره چشم', date: '۱ تیر ۱۴۰۵', readTime: '۵ دقیقه' },
    { id: 2, title: 'چگونه از عفونت چشم هنگام استفاده از لنز جلوگیری کنیم؟', date: '۲۸ خرداد ۱۴۰۵', readTime: '۷ دقیقه' },
    { id: 3, title: 'تفاوت‌های اساسی لنزهای روزانه، فصلی و سالانه', date: '۱۵ خرداد ۱۴۰۵', readTime: '۴ دقیقه' },
    { id: 4, title: 'بهترین برندهای لنز رنگی طبی در بازار ایران', date: '۱۰ خرداد ۱۴۰۵', readTime: '۶ دقیقه' },
    { id: 5, title: 'نکات طلایی برای شستشو و نگهداری مایع لنز', date: '۵ خرداد ۱۴۰۵', readTime: '۵ دقیقه' },
    { id: 6, title: 'آیا با لنز طبی می‌توان به صفحه مانیتور خیره شد؟', date: '۱ خرداد ۱۴۰۵', readTime: '۸ دقیقه' },
  ];

  return (
    <div className="blog-page-container">
      <div className="blog-scroll-viewport">
        <div className="blog-grid-layout">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-article-card">
              <div className="article-image-placeholder">
                {/* آیکون یا تصویر مینی‌مال مقاله */}
                <span className="lens-icon-decor">👁️</span>
              </div>
              <div className="article-meta-info">
                <span className="article-date">{post.date}</span>
                <span className="article-time">زمان مطالعه: {post.readTime}</span>
              </div>
              <h3 className="article-title">{post.title}</h3>
              <button className="read-more-btn">مطالعه مقاله ←</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}