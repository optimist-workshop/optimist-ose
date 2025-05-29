import React from 'react';
// It's good practice to alias the original import for clarity when wrapping.
import OriginalLayout from '@theme-original/Layout'; 
import MailingListPopup from '@site/src/components/MailingListPopup'; // Import your popup

export default function LayoutWrapper(props) {
  return (
    <>
      <OriginalLayout {...props} />
      <MailingListPopup /> {/* Temporarily disabled */}
    </>
  );
}
