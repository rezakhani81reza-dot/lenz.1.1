import React, { useEffect, useRef } from 'react';

export default function Modal({ isOpen, onClose, title, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <dialog ref={dialogRef} onClose={onClose} className="custom-modal">
      <div className="modal-content">
        <h2 id="modalTitle" className="modal-title">
          {title || 'اطلاعات'}
        </h2>

        <div id="modalDescription" className="modal-description">
          {children || (
            <p className="text-sm text-gray-600 dark:text-gray-300">
              محتوای این پنجره در دسترس نیست.
            </p>
          )}
        </div>

        <div className="modal-actions">
          <button type="button" onClick={onClose} className="btn-cancel">
            بستن
          </button>
        </div>
      </div>
    </dialog>
  );
}