import React from 'react';

export default function FrameContainer({ children }) {
  return (
    <div className="frame-container">
      {/* حذف تایتل و دکمه بیشتر برای رسیدن به ظاهر کاملاً مینیمال */}
      <div className="frame-content">
        {children}
      </div>
    </div>
  );
}