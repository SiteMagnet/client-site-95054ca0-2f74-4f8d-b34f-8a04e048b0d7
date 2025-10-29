"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import BookingModal from "../BookingModal";
import "./Packages.css";
import content from '../../../../content.json';
const Packages = () => {
  const [showComparison, setShowComparison] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const toggleComparison = () => setShowComparison(!showComparison);
  const toggleBookingModal = () => setShowBookingModal(!showBookingModal);
  const packages = content.key_problem;
  return (
    <section className="packages">
      <h2 className="packages-heading">Our Package</h2>
      <p className="packages-description">
      Sed ut perspiciatis unde omnis iste natus error sit.
      </p>

      <div className="packages-grid">
        {/* Starter Website Package */}


        {/* Lead Generation Website Package */}
        <div className="package-card middle-card">
          <span className="package-number">Lorem ipsum</span>
          <span className="package-price">$250  (One-Time)</span>
          <h3 className="package-heading">{packages[1]}</h3>
          <p className="package-tagline">
          Sed ut perspiciatis unde omnis iste natus error sit.
          </p>
          <ul className="package-features">
            <li><FaCheck className="feature-icon" /> Quis autem vel eum iure reprehenderit</li>
            <li><FaCheck className="feature-icon" /> Et harum quidem rerum facilis est et </li>
            <li><FaCheck className="feature-icon" /> Nam libero tempore, cum soluta </li>
            <li><FaCheck className="feature-icon" />  Itaque earum rerum </li>
            <li><FaCheck className="feature-icon" /> At vero eos et accusamus et </li>
          </ul>
          {/* <Link href="/Login"> */}
            <button className="cta-button">Get Started</button>
          {/* </Link> */}
          {/* <button className="book-call-link" onClick={toggleBookingModal} >Book a Call</button> */}
        </div>
      </div>

      {/* Compare Button */}
      {/* <div className="compare-button-wrapper">
        <button onClick={toggleComparison} className="compare-button">
          Compare Packages
        </button>
      </div> */}

      {/* Package Comparison Modal */}
      {showComparison && (
        <div className="modal-overlay" onClick={toggleComparison}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={toggleComparison}>×</button>
            <h3>Compare Packages</h3>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Starter Website</th>
                  <th>Lead Generation Website</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Custom Website</td><td>Yes</td><td>Yes</td></tr>
                <tr><td>Mobile Responsive</td><td>Yes</td><td>Yes</td></tr>
                <tr><td>SEO-Optimized</td><td>Yes</td><td>Yes</td></tr>
                <tr><td>Lead Capture Forms</td><td>Yes</td><td>Yes</td></tr>
                <tr><td>Insights Dashboard</td><td>Yes</td><td>Yes</td></tr>
                <tr><td>Monthly Maintenance</td><td>Optional ($100/mo)</td><td>Included ($100/mo)</td></tr>
                <tr><td>Done-for-You Marketing</td><td>No</td><td>Yes (via retainer)</td></tr>
                <tr><td>Ad Spend Guidance</td><td>No</td><td>Yes</td></tr>
                <tr><td>Lead Gen Strategy</td><td>No</td><td>Yes</td></tr>
                <tr><td>Ideal For</td><td>DIYers / Low budget</td><td>Business owners ready to scale</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="modal-overlay" onClick={toggleBookingModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <BookingModal onClose={toggleBookingModal} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Packages;
