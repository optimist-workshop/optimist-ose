import React, { useEffect } from 'react';
import Head from '@docusaurus/Head';

function CalendlyPopupButton() {
  useEffect(() => {
    // Append Calendly CSS to the head
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Append Calendly script to the body if it's not already there
    const script = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!script) {
      const newScript = document.createElement('script');
      newScript.src = 'https://assets.calendly.com/assets/external/widget.js';
      newScript.type = 'text/javascript';
      newScript.async = true;
      document.body.appendChild(newScript);
    }

    return () => {
      // Cleanup if needed
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, []);

  return (
    <a
      href="#"
      onClick={() => {
        window.Calendly.initPopupWidget({ url: 'https://calendly.com/mtol-wpi/15min' });
        return false;
      }}
      style={{
        backgroundColor: '#0069ff',
        color: '#ffffff',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1em',
        textDecoration: 'none', // Remove default link underline
      }}
    >
      Schedule a meeting
    </a>
  );
}

export default CalendlyPopupButton;