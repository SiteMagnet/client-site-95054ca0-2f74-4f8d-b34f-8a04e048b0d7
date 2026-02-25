import React from "react";
import "./Plan.css";
import Link from "next/link";

const PlanSection = () => {
  return (
    <section className="plan-section">
      <div className="plan-content">
        <h1>Your Path to Coverage</h1>

        <p className="summary-text">
          Securing protection for you and your family is simple and straightforward.
          Here’s how we guide you from your initial inquiry to full coverage.
        </p>

        <div className="steps-container">
          {/* Row 1 */}
          <div className="steps-row">
            <div className="step">
              <div className="step-icon">📝</div>
              <h3>Step 1: Complete Your Questionnaire</h3>
              <p>
                Share a few details about your needs so we can better understand
                the type of coverage that fits your situation.
              </p>
            </div>

            <div className="step">
              <div className="step-icon">📞</div>
              <h3>Step 2: Consultation Call</h3>
              <p>
                A licensed agent will contact you to review your information
                and schedule a brief consultation at your convenience.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="steps-row">
            <div className="step">
              <div className="step-icon">📋</div>
              <h3>Step 3: Personalized Policy Design</h3>
              <p>
                Your agent will prepare a policy tailored specifically to
                protect what matters most to you.
              </p>
            </div>

            <div className="step">
              <div className="step-icon">✅</div>
              <h3>Step 4: You’re Protected</h3>
              <p>
                Once your policy is approved and activated, you can move forward
                with confidence knowing you and your loved ones are covered.
              </p>
            </div>
          </div>
        </div>

        <a href="#questionnaire" >
          <button className="cta-button">Start Your Protection Plan</button>
        </a>
      </div>
    </section>
  );
};

export default PlanSection;
