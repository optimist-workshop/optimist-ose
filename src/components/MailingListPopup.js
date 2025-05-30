import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router'; // Import useLocation
import styles from './MailingListPopup.module.css';

// Key for storing the popup's closed state in localStorage
const LOCAL_STORAGE_KEY = 'mailingListPopupClosed';

export default function MailingListPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation(); // Get the current location object
  const [isClosed, setIsClosed] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(LOCAL_STORAGE_KEY) === 'true';
    }
    return false; // Default to not closed if localStorage is not available (e.g., SSR)
  });

  useEffect(() => {
    // Do not proceed to show popup if already closed or if on the /join page
    if (isClosed || (location.pathname === '/join' || location.pathname === '/join/')) {
      setIsVisible(false);
      return;
    }

    // Show the popup after a 3-second delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isClosed, location.pathname]); // Add location.pathname to dependencies

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true); // Keeps it closed for the current session
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_KEY, 'true'); // Remember across sessions
    }
  };

  // Don't render if closed OR if we ARE on the /join page
  if (isClosed || (location.pathname === '/join' || location.pathname === '/join/')) {
    return null; // Don't render if permanently closed
  }

  return (
    <div className={`${styles.popupContainer} ${isVisible ? styles.popupContainerVisible : ''}`}>
      <button 
        onClick={handleClose} 
        className={styles.closeButton} 
        aria-label="Close mailing list popup"
      >
        ×
      </button>
      <h4>Stay Updated!</h4>
      <p>Join our mailing list for <br/>the latest news.</p>
      <Link className="button button--primary button--sm" to="/join">
        Join Now
      </Link>
    </div>
  );
}
