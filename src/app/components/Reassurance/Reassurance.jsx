'use client'; // This tells Next.js to render this component client-side only

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Importing a checkmark icon from react-icons
import './Reassurance.css';

export default function Reassurance() {
  return (
    <section className="reassurance-section">
      <div className="left-side">
        <h2 className="heading">Is This For Me?</h2>
        <div className="card-container">
          <div className="card">
            <p>
              <FaCheckCircle /> Struggling to find clients who value your work?
            </p>
            <p>
              <FaCheckCircle /> Your website isn’t converting visitors into paying clients?
            </p>
            <p>
              <FaCheckCircle /> Want to escape the 9-5 but don’t know where to start?
            </p>
            <p>
              <FaCheckCircle /> Overwhelmed by choosing the right website design?
            </p>
            <p>
              <FaCheckCircle /> Putting in work but not seeing the growth you deserve?
            </p>
          </div>
        </div>
      </div>
      <div className="right-side">
        <h2 className="heading">Now, Imagine If You Could...</h2>
        <div className="card-container">
          <div className="card">
            <p>
              <FaCheckCircle /> Attract your first $3,000 client within weeks.
            </p>
            <p>
              <FaCheckCircle /> Turn your website into a lead-generating machine.
            </p>
            <p>
              <FaCheckCircle /> Build a trusted brand that makes clients excited to invest in you.
            </p>
            <p>
              <FaCheckCircle /> Gain clarity on your messaging and marketing strategies.
            </p>
            <p>
              <FaCheckCircle /> Escape the 9-5 grind and build the life you deserve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
