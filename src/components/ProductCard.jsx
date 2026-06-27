import React, { useState } from 'react';

const FALLBACK_IMAGE = '/assets/lens-placeholder.svg';

export default function ProductCard({ image, title, onInfo, onOrder }) {
  const [imgSrc, setImgSrc] = useState(image || FALLBACK_IMAGE);

  return (
    <article className="product-card">
      <div className="product-card-image-wrap">
        <img
          src={imgSrc}
          alt={title}
          className="product-card-image"
          onError={() => setImgSrc(FALLBACK_IMAGE)}
        />
      </div>

      <h3 className="product-card-title">{title}</h3>

      <div className="product-card-actions">
        <button type="button" className="product-card-btn" onClick={onInfo}>
          اطلاعات
        </button>
        <button type="button" className="product-card-btn" onClick={onOrder}>
          سفارش
        </button>
      </div>
    </article>
  );
}
