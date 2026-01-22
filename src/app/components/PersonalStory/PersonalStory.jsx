import React from "react";
import "./PersonalStory.css"; // Keep your global import
import content from '../../../../content.json';

function PersonalStory() {
  const personalStory = content.personalStory;
  return (
    <section className="personal-story">
      <div className="left-side">
        <h2 className="main-heading">
          I’ve Helped Over 2 Clients This Month Achieve Success
        </h2>
      </div>
      <div className="right-side">
        <p className="sub-heading">
          {personalStory[0]}
        </p>
        <p className="sub-heading">
          {personalStory[1]}
          <span className="highlight">
            {personalStory[2]}
          </span>
        </p>
        <p className="sub-heading" id="faqs">
          {personalStory[3]}
        </p>
        <p className="sub-heading" id="faqs">
          {personalStory[4]}
        </p>
      </div>
    </section>
  );
}

export default PersonalStory;
