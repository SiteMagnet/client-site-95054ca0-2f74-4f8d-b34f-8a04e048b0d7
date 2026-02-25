'use client'; // This tells Next.js to render this component client-side only

import React, { useState } from "react";
import "./FAQ.css"; // Keep your global import

const faqs = [
  {
    question: "Why is life insurance important?",
    answer: "Life insurance provides financial protection for your loved ones if something happens to you. It can help cover funeral expenses, pay off debts such as a mortgage, replace lost income, and ensure your family can maintain their standard of living."
  },
  {
    question: "How does life insurance work?",
    answer: "Life insurance is a contract between you and an insurance company. You pay regular premiums, and in return, the insurer provides a tax-free death benefit to your chosen beneficiaries if you pass away while the policy is active."
  },
  {
    question: "How much life insurance coverage do I need?",
    answer: "The right amount depends on your income, debts, family size, and future financial responsibilities. Many people choose coverage that replaces several years of income or covers major obligations like a mortgage, education costs, and final expenses."
  },
  {
    question: "What types of life insurance are available?",
    answer: "The most common types include Term Life Insurance, which provides coverage for a set period of time, and Permanent Life Insurance (such as Whole or Universal Life), which offers lifelong coverage and may build cash value over time."
  },
  {
    question: "How much does life insurance typically cost?",
    answer: "The cost of life insurance depends on factors such as your age, health, lifestyle, coverage amount, and policy type. In many cases, coverage is more affordable than people expect, especially when purchased at a younger age."
  },
  {
    question: "When is the best time to purchase life insurance?",
    answer: "The best time to purchase life insurance is when you are young and healthy, as premiums are generally lower. However, coverage can be valuable at any stage of life, especially when you have financial responsibilities or dependents."
  },
  {
    question: "How long should my coverage last?",
    answer: "Your coverage should align with your financial obligations. For example, many individuals choose term lengths that match the duration of their mortgage or until their children are financially independent."
  },
  {
    question: "What happens after I apply for coverage?",
    answer: "After you apply, the insurance company reviews your application and may request additional information or a medical exam. Once approved, your policy becomes active after your first premium payment."
  },
  {
    question: "Are life insurance benefits taxable?",
    answer: "In most cases, life insurance death benefits are paid out tax-free to beneficiaries. However, certain situations may have tax implications, so it’s always best to consult a tax professional for personalized advice."
  },
  {
    question: "Is employer-provided life insurance enough?",
    answer: "Employer-provided coverage is a great benefit, but it may not be sufficient to fully protect your family’s financial needs. Additionally, employer coverage typically ends if you leave your job, which is why many people choose to secure an individual policy."
  },
  {
    question: "Can I customize my life insurance policy?",
    answer: "Yes. Many policies offer optional riders that allow you to add features such as living benefits, critical illness coverage, or additional protection tailored to your needs."
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
