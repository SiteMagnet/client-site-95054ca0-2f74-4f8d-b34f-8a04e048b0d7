import React from 'react';
import './Plan.css'; // Make sure to link the CSS file
import Link from 'next/link';

const PlanSection = () => {
  return (
    <section className="plan-section">
      <div className="plan-content">
        <h1>How Our Plan Works</h1>
        <p className="summary-text">
          Follow these simple steps to get started with our service. We’ve made it easy, quick, and convenient for you.
        </p>

        <div className="steps-container">
          {/* Row 1: First Two Steps */}
          <div className="steps-row">
            <div className="step">
              <div className="step-icon">📝</div>
              <h3>Step 1: Sign Up</h3>
              <p>Create your account in just a few clicks. No credit card required.</p>
            </div>
            <div className="step">
              <div className="step-icon">📄</div>
              <h3>Step 2: Choose Plan</h3>
              <p>Select the plan that fits your needs and unlock premium features.</p>
            </div>
          </div>

          {/* Row 2: Next Three Steps */}
          <div className="steps-row">
            <div className="step">
              <div className="step-icon">🚀</div>
              <h3>Step 3: Get Started</h3>
              <p>Kick off your journey with our guided onboarding process.</p>
            </div>
            <div className="step">
              <div className="step-icon">🔧</div>
              <h3>Step 4: Customize</h3>
              <p>Tailor the experience to your goals and preferences.</p>
            </div>
            <div className="step">
              <div className="step-icon">📈</div>
              <h3>Step 5: Grow</h3>
              <p>Track your progress and scale effortlessly over time.</p>
            </div>
          </div>
        </div>


        {/* <Link href="/Login"> */}
    <button className="cta-button">Get Started Today</button>
  {/* </Link> */}

      </div>
    </section>
  );
};

export default PlanSection;
