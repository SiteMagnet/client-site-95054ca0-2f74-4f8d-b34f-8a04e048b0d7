// components/BookingModal.jsx
'use client';

import { useEffect, useRef } from 'react';
import './BookingModal.css'; // optional: move styles here if you want

export default function BookingModal({ onClose }) {
  const bookingContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        bookingContainerRef.current &&
        !bookingContainerRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="booking-container" ref={bookingContainerRef}>
      <button className="close-booking" onClick={onClose}>
        Close
      </button>

      <div className="iframe-wrapper">
        <iframe
          src="https://api.leadconnectorhq.com/widget/booking/jcILtSg9gF3jD9wnKohK"
          className="booking-iframe"
          scrolling="yes"
          title="Booking Calendar"
        ></iframe>
      </div>
    </div>
  );
}
