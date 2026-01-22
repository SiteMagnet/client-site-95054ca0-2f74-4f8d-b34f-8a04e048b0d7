import React from "react";
import "./ConnectTab.css";

const ConnectTab = () => {
  return (
    <div className="connect-tab">
      <h2>Connect With Us</h2>
      <p className="subtext">
        Send us a message or schedule a consultation below.
      </p>

      <div className="card-container">
        <div className="chat-box">
          <h3>Direct Message</h3>
          <textarea
            className="message-input"
            placeholder="Type your message here..."
            rows="5"
          />
          <button className="btn">Send Message</button>
        </div>

        <div className="booking-box">
          <h3>Book a Consultation</h3>
          <p className="note">Choose a time that works for you.</p>
          <button className="btn">Open Booking Calendar</button>
        </div>
      </div>
    </div>
  );
};

export default ConnectTab;
