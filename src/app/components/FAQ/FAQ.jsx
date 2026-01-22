'use client'; // This tells Next.js to render this component client-side only

import React, { useState } from "react";
import "./FAQ.css"; // Keep your global import

const faqs = [
  {
    question: "What makes your websites different from others?",
    answer: "Our websites aren’t just visually appealing; they’re designed to convert visitors into paying clients. We focus on clear messaging, intuitive user experiences, and strategic lead generation that ensures your website works as hard as you do. Unlike many developers, I combine my sales expertise to create websites that attract and retain your ideal customers."
  },
  {
    question: "How long does it take to build a website?",
    answer: "The timeline for building your website depends on the complexity of the project and your specific requirements. Typically, a full website can be completed in 3-6 weeks. We’ll provide a clear timeline before we begin and keep you updated on progress every step of the way."
  },
  {
    question: "What’s included in your packages?",
    answer: "Our packages include everything you need to have a website that not only looks great but also works for your business: \n- Starter Website Package: Custom design, responsive layouts, SEO optimization, and lead capture forms. \n- Lead Generation Website Package: Everything in the Starter package, plus integrated CRM, conversion rate optimization, and targeted landing pages. \n- Website Maintenance & Support: Regular updates, security monitoring, and performance enhancements."
  },
  {
    question: "Can you help me with content for my website?",
    answer: "Absolutely! While our focus is on design and strategy, we also provide content guidance and templates to help you craft compelling copy. We can even work with you to refine your messaging to ensure it aligns with your target audience."
  },
  {
    question: "Do you offer ongoing website maintenance?",
    answer: "Yes, we offer a Website Maintenance & Support package that covers ongoing updates, security checks, performance optimizations, and priority support. This ensures your website continues to perform at its best."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Yes, all of our websites are designed to be fully responsive, meaning they’ll look and function perfectly on any device—desktop, tablet, or mobile."
  },
  {
    question: "What if I need changes or updates after my website is live?",
    answer: "We provide ongoing support and updates through our maintenance package. If you need minor adjustments, we’ll work with you to ensure your website evolves as your business does."
  },
  {
    question: "How do I know if my website will actually generate leads?",
    answer: "The Lead Generation Website Package is specifically designed with lead generation in mind. We implement features like conversion rate optimization, targeted landing pages, and CRM integrations to capture and nurture leads. Plus, we apply proven sales strategies to make sure your site brings in the clients you're targeting."
  },
  {
    question: "What happens after I book a consultation?",
    answer: "After booking a consultation, we’ll schedule a time to discuss your goals, challenges, and vision for your website. We’ll then assess your business needs and provide tailored recommendations to create a website that helps you achieve your goals."
  },
  {
    question: "How do I get started?",
    answer: "To get started, simply book a consultation through our website. During our session, we’ll discuss your needs, timeline, and how we can help. After that, we’ll outline the next steps and begin work on your website."
  },
  {
    question: "What if I’m not sure which package is right for me?",
    answer: "No problem! During your Strategy Session, we’ll assess your business needs, goals, and budget to help determine the best package for you. If needed, we can also customize a solution to fit your specific requirements."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);  // Close the answer if the same question is clicked again
    } else {
      setActiveIndex(index);  // Open the clicked question's answer
    }
  };

  return (
    <section className="faq-section">
      <div className="faq-heading">Frequently Asked Questions</div>
      <div className="faq-container">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleAnswer(index)}>
                {faq.question}
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
