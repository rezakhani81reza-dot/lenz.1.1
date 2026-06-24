import React, { useState } from 'react';
import Header from './components/Header';
import FilterScroll from './components/FilterScroll';
import ProductCarousel from './components/ProductCarousel';
import ContactSlide from './components/ContactSlide';
import AboutUs from './components/AboutUs';
import Help from './components/Help';
import Blog from './components/Blog';
import FrameContainer from './components/FrameContainer';
import Footer from './components/Footer';
import './App.css';

// فیلترهای اختصاصی بخش محصولات لنز طبی
const PRODUCT_FILTERS = [
  'همه محصولات',
  'لنز طبی',
  'لنز رنگی',
  'لنز طبی رنگی',
  'لنز فصلی',
  'لنز روزانه'
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState(0);
  
  // مدیریت صفحات مستقل: 'products' | 'about' | 'help' | 'contact' | 'blog'
  const [activePage, setActivePage] = useState('products');

  return (
    <div className="app-container">
      {/* هدر اصلی - متصل به سیستم ناوبری تک‌صفحه‌ای */}
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        setActiveFilter={setActiveFilter}
      />

      {/* نوار فیلترها - فقط در صفحه محصولات رندر می‌شود */}
      {activePage === 'products' && (
       <FilterScroll 
  filters={PRODUCT_FILTERS} 
  activeFilter={activeFilter} 
  setActiveFilter={setActiveFilter} /* اسم این پراپ در کد شما setActiveFilter است، نه onFilterChange */
/>
      )}

      {/* بخش اصلی و رندر شرطی صفحات فیکس مانیتور */}
      <main className="main-content-wrapper">
        {activePage === 'about' ? (
          <div className="single-page-wrapper">
            <FrameContainer>
              <AboutUs />
            </FrameContainer>
          </div>
        ) : activePage === 'contact' ? (
          <div className="single-page-wrapper">
            <FrameContainer>
              <ContactSlide />
            </FrameContainer>
          </div>
        ) : activePage === 'help' ? (
          <div className="single-page-wrapper">
            <FrameContainer>
              <Help setActivePage={setActivePage} />
            </FrameContainer>
          </div>
        ) : activePage === 'blog' ? (
          <div className="single-page-wrapper">
            <FrameContainer>
              <Blog />
            </FrameContainer>
          </div>
        ) : (
          /* رندر کاروسل خالص ۱۶ کارتی برای محصولات */
          <ProductCarousel 
            filters={PRODUCT_FILTERS} 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter} 
          />
        )}
      </main>

      {/* فوتر ثابت پایین مانیتور */}
      <Footer />
    </div>
  );
}