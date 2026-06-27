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
import Modal from './components/Modal'; 
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
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // مدیریت صفحات مستقل: 'products' | 'about' | 'help' | 'contact' | 'blog'
  const [activePage, setActivePage] = useState('products');

  // مدیریت وضعیت داینامیک پاپ‌آپ (عنوان و محتوا)
  const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '', content: null });

  // تابع سراسری برای باز کردن مدال با محتوای دلخواه
  const openModal = (title, content) => {
    setModalConfig({ isOpen: true, title, content });
  };

  // تابع بستن مدال
  const closeModal = () => {
    setModalConfig({ isOpen: false, title: '', content: null });
  };

  const openCartModal = () => {
    setIsCartOpen(true);
  };

  const closeCartModal = () => {
    setIsCartOpen(false);
  };

  const addToCart = (product) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateCartItemQuantity = (productId, delta) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === productId ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handlePurchase = () => {
    if (cartItems.length === 0) {
      openModal('سبد خرید خالی است', <p>ابتدا یک یا چند محصول را به سبد خرید اضافه کنید.</p>);
      return;
    }

    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartItems([]);
    setIsCartOpen(false);
    openModal(
      'خرید با موفقیت ثبت شد',
      <div className="text-right" dir="rtl">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {totalCount} قلم کالا با موفقیت به ثبت رسید.
        </p>
      </div>
    );
  };

  const cartTotalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const cartContent = (
    <div className="text-right" dir="rtl">
      <div className="cart-modal-header">
        <h3>اقلام سفارشی</h3>
        <p className="cart-modal-subtitle">موارد انتخابی شما در سبد خرید</p>
      </div>
      {cartItems.length === 0 ? (
        <p className="text-sm text-gray-600 dark:text-gray-300">سبد خرید شما خالی است.</p>
      ) : (
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-row">
              <div className="cart-item-info">
                <span className="cart-item-title">{item.title}</span>
                <div className="cart-item-controls">
                  <button
                    type="button"
                    className="cart-quantity-btn"
                    onClick={() => updateCartItemQuantity(item.id, -1)}
                  >
                    −
                  </button>
                  <span className="cart-item-quantity">{item.quantity}</span>
                  <button
                    type="button"
                    className="cart-quantity-btn"
                    onClick={() => updateCartItemQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-footer">
        <button
          type="button"
          className="product-card-btn"
          onClick={handlePurchase}
          disabled={cartItems.length === 0}
        >
          ثبت خرید
        </button>
      </div>
    </div>
  );

  return (
    <div className="app-container">
      {/* هدر اصلی - متصل به سیستم ناوبری و پاپ‌آپ‌های سبد خرید/پروفایل */}
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        setActiveFilter={setActiveFilter}
        cartCount={cartTotalQuantity}
        onOpenCart={openCartModal}
        onOpenModal={openModal}
      />

      {/* نوار فیلترها - فقط در صفحه محصولات رندر می‌شود */}
      {activePage === 'products' && (
        <FilterScroll 
          filters={PRODUCT_FILTERS} 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter}
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
            onOpenModal={(title, content) => openModal(title, content)}
            onOrder={addToCart}
          />
        )}
      </main>

      {/* فوتر ثابت پایین مانیتور */}
      <Footer />

      {/* رندر تکی و هوشمند مدال در ریشه پروژه با استایل‌های تلویند */}
      <Modal isOpen={modalConfig.isOpen} onClose={closeModal} title={modalConfig.title}>
        {modalConfig.content}
      </Modal>

      <Modal isOpen={isCartOpen} onClose={closeCartModal} title={`سبد خرید (${cartTotalQuantity})`}>
        {cartContent}
      </Modal>
    </div>
  );
}