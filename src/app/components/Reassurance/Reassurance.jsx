'use client';

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './Reassurance.css';

export default function Reassurance() {
  return (
    <section className="reassurance-section">
      <div className="left-side">
        <h2 className="heading">Is This You?</h2>
        <div className="card-container">
          <div className="card">
            <p>
              <FaCheckCircle /> Worried about how your family would manage financially without you?
            </p>
            <p>
              <FaCheckCircle /> Concerned about leaving behind unpaid debts or a mortgage?
            </p>
            <p>
              <FaCheckCircle /> Unsure if your current coverage is enough to truly protect your loved ones?
            </p>
            <p>
              <FaCheckCircle /> Want to make sure your children’s future is secure no matter what happens?
            </p>
            <p>
              <FaCheckCircle /> Putting off life insurance because you're not sure where to start?
            </p>
          </div>
        </div>
      </div>

      <div className="right-side">
        <h2 className="heading">Now Imagine If You Could...</h2>
        <div className="card-container">
          <div className="card">
            <p>
              <FaCheckCircle /> Know your family is financially protected and secure.
            </p>
            <p>
              <FaCheckCircle /> Ensure your mortgage, debts, and final expenses are fully covered.
            </p>
            <p>
              <FaCheckCircle /> Provide income replacement so your loved ones can maintain their lifestyle.
            </p>
            <p>
              <FaCheckCircle /> Leave behind a legacy instead of financial stress.
            </p>
            <p>
              <FaCheckCircle /> Gain peace of mind knowing you’ve made a responsible financial decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
