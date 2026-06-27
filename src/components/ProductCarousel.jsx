import React from 'react';
import FrameContainer from './FrameContainer';
import ProductCard from './ProductCard';
import { getProductsForFilter } from '../data/products';

export default function ProductCarousel({ filters, activeFilter, setActiveFilter, onOpenModal, onOrder }) {
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
        <div
          className="carousel-track"
          style={{
            width: `${totalSlides * 100}%`,
            transform: `translateX(-${(activeFilter * 100) / totalSlides}%)`,
          }}
        >
          {filters.map((filter, index) => {
            const products = getProductsForFilter(filter);

            return (
              <div
                className="carousel-slide"
                key={index}
                style={{ width: `${100 / totalSlides}%` }}
              >
                <FrameContainer>
                  <div className="grid-layout">
                    {products.map((product) => (
                      <ProductCard
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        /* دکمه‌های کامپوننت داخلی شما به استیت متصل شدند */
                        onInfo={() => onOpenModal('جزئیات محصول', (
                          <div className="text-right" dir="rtl">
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              این یک متن نمونه برای اطلاعات تکمیلی و فرآیند ثبت سفارش لنز چشم است.
                            </p>
                          </div>
                        ))}
                        onOrder={() => onOrder(product)}
                      />
                    ))}
                  </div>
                </FrameContainer>
              </div>
            );
          })}
        </div>
      </div>

      <button className="carousel-arrow right" onClick={nextSlide} disabled={activeFilter === totalSlides - 1}>▶</button>
    </main>
  );
}