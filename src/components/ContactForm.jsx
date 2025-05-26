import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const FORMSPREE_FORM_ID = "xldbykdy";

export function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  if (state.succeeded) {
    const successMessageStyle = {color: 'green', fontWeight: 'bold'};
    return <p className="form-success-message" style={successMessageStyle}>Thanks for your message! We'll get back to you soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {/* ... your form fields ... */}
      <div className="form-group">
        <label htmlFor="name" className="form-label">Your Name:</label>
        <input id="name" type="text" name="name" required className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Your Email Address:</label>
        <input id="email" type="email" name="email" required className="form-input" />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="form-error-message" />
      </div>
      <div className="form-group">
        <label htmlFor="subject" className="form-label">Subject:</label>
        <input id="subject" type="text" name="subject" required className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">Message:</label>
        <textarea id="message" name="message" rows="5" required className="form-input" />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="form-error-message" />
      </div>
      <div className="form-group">
        <button type="submit" disabled={state.submitting} className="form-button">
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}