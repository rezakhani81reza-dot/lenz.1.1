import React from 'react';

export default function FilterScroll({ filters, activeFilter, setActiveFilter }) {
  // شرط محافظ برای جلوگیری از ارور در صورت خالی بودن آرایه فیلترها
  if (!filters || !Array.isArray(filters)) return null;

  return (
    <div className="filter-scroll-container">
      {filters.map((filterName, index) => (
        <button
          key={index}
          className={`filter-item ${activeFilter === index ? 'active' : ''}`}
          onClick={() => {
            // شرط محافظ حیاتی: فقط اگر تابع وجود داشت آن را اجرا کن تا ارور ندهد
            if (typeof setActiveFilter === 'function') {
              setActiveFilter(index);
            }
          }}
        >
          {filterName}
        </button>
      ))}
    </div>
  );
}